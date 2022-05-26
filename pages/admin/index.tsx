import React, { ReactNode, useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Button,
  Pagination,
  Modal,
  Typography,
} from "@mui/material";
import { ActivityForm } from "components/ActivityForm";
import { get } from "lodash";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";
import { httpClient } from "modules/client";
import { useRouter } from "next/router";

const keyMap = ["schedules", "levels"];

const spesificParamCount = [
  ["include_users", "include_level"],
  ["include_users"],
];

const fieldsNames = [
  ["id", "name", "level.name"],
  ["id", "name", "schedules.length"],
];

const headersNames = [
  ["ID", "Nama Aktivitas", "Level"],
  ["ID", "Nama Level", "Banyak Aktivitas"],
];

const specialConstraint = ["levels"];

export default function Index() {
  const [currentTab, setCurrentTab] = useState(0);

  const [take, setTake] = useState(10);
  const [page, setPage] = useState(0);

  const [{ open, cb }, setOpen] = useState<{
    open: boolean;
    cb?: null | (() => {});
  }>({ open: false });

  const handleClose = () => setOpen({ open: false, cb: null });

  const key = keyMap[currentTab];

  const {
    isLoading,
    error,
    data: { data, total } = {},

    refetch,
  } = useQuery(
    [key, page, take, currentTab],
    async () =>
      await (
        await httpClient.get("/api/" + key, {
          params: {
            take,
            skip: take * page,
            ...(spesificParamCount[currentTab]?.reduce((acc, cur) => {
              return {
                ...acc,
                [cur]: true,
              };
            }, {}) || {}),
          },
        })
      ).data
  );

  const handleDelete = (id: number) => {
    const func = () =>
      httpClient.delete("/api/" + key + "/?id=" + id).then(() => {
        refetch();
        setOpen({
          open: false,
        });
      });

    if (specialConstraint.includes(key)) {
      setOpen({ open: true, cb: func });
    } else {
      func();
    }
  };

  const { push } = useRouter();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Anda yakin menghapus {key} ini?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Jika anda menghapus data ini maka data yang berelasi akan otomatis
            terhapus
          </Typography>

          <Box display="flex" justifyContent={"flex-end"} gap={2} mt={3}>
            <Button
              onClick={() => {
                handleClose();
              }}
            >
              Batal
            </Button>
            <Button
              onClick={() => {
                cb && cb();

                handleClose();
              }}
              color="error"
              variant="contained"
            >
              Yakin
            </Button>
          </Box>
        </Box>
      </Modal>

      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        onChange={(_, v) => {
          setCurrentTab(v);
          setPage(0);
        }}
        value={currentTab}
      >
        <Tab label="Managemen Aktivitas" />
        <Tab label="Managemen Level" />
      </Tabs>

      <Box my={2} />

      {isLoading && <p>Loading...</p>}

      <Button fullWidth variant="contained">
        BUAT{" "}
      </Button>

      <BasicTable
        actionFieldsName={"Aksi"}
        fields={fieldsNames[currentTab]}
        headers={headersNames[currentTab]}
        data={data}
      >
        {(row) => (
          <Box sx={{ display: "flex", gap: 1 }}>
            {currentTab == 0 && (
              <>
                <Button variant="contained">Lihat Gambar</Button>
                <Button
                  onClick={() => push("/admin/schedules/" + row.id)}
                  variant="contained"
                  color="warning"
                >
                  Edit
                </Button>

                <Button
                  onClick={() => handleDelete(row.id)}
                  variant="contained"
                  color="error"
                >
                  Hapus
                </Button>
              </>
            )}
          </Box>
        )}
      </BasicTable>

      <Box display="flex" justifyContent={"center"} p={2}>
        <Pagination
          count={Math.ceil(total / take)}
          page={page + 1}
          onChange={(_, v) => setPage(v - 1)}
        />
      </Box>
    </Box>
  );
}

interface WithId {
  id: number;
}

interface BasicTableProps<T> {
  actionFieldsName?: string;
  children?: (e: T) => ReactNode;
  fields: string[];
  headers: string[];
  data: T[];
}

export function BasicTable<T extends WithId>({
  actionFieldsName,
  children,
  fields,
  headers,
  data,
}: BasicTableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers?.map((header) => (
              <TableCell key={`${header}`}>{`${header}`}</TableCell>
            ))}
            {actionFieldsName && (
              <TableCell
                key={`${actionFieldsName}`}
              >{`${actionFieldsName}`}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {fields?.map((header) => (
                <TableCell key={`${header}`}>{get(row, `${header}`)}</TableCell>
              ))}

              {children && <TableCell>{children(row)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
