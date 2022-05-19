import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  Input,
  Paper,
  TextField,
  Theme,
  Typography,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "3rem 0",
  },
  container: {
    width: "90%",
    margin: "auto",
  },
  containerChild: {
    marginBottom: "1rem",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  button: {
    padding: ".7rem 0",
    display: "flex",
    margin: "auto",
  },
}));

type Inputs = {
  name: string;
  age: number;
  file: string;
  date: Date;
};
export const ActivityForm = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);
  return (
    <Container className={classes.root}>
      <Paper elevation={3}>
        <Typography
          style={{
            textAlign: "center",
            padding: "2rem 0",
          }}
          color="primary"
        >
          Form Demo
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={classes.container}>
            <Box className={classes.containerChild}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name required" }}
                render={({ field: { value } }) => (
                  <TextField
                    label={"Nama Aktivitas"}
                    fullWidth
                    {...register("name")}
                  />
                )}
              />
            </Box>

            <Box className={classes.containerChild}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Controller
                name="age"
                control={control}
                rules={{ required: "Name required" }}
                render={({ field: { value } }) => (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    {...register("age")}
                    fullWidth
                  >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                  </Select>
                )}
              />
            </Box>
            <Box className={classes.containerChild}>
              <Controller
                name="file"
                control={control}
                rules={{ required: "File required" }}
                render={({ field: { value } }) => (
                  <TextField type="file" fullWidth {...register("file")} />
                )}
              />
            </Box>

            <Box className={classes.containerChild}>
              <Controller
                name="date"
                control={control}
                rules={{ required: "Date required" }}
                render={({ field: { onChange, value } }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Date time"
                      value={value}
                      onChange={onChange}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          {...params}
                          {...register("date")}
                        />
                      )}
                    />
                  </LocalizationProvider>
                )}
              />
            </Box>
            <Button type="submit" className={classes.button}>
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};
