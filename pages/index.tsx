import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { UserContext } from "../context/user";
import { Button, Input } from "@mui/material";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { addUser } = React.useContext(UserContext);
  const [user, setUser] = React.useState<string>("");
  const handleInputUser = () => {
    addUser(user);
    router.push("/sikomoku");
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="h1" color="primary">
          Sikomoku
        </Typography>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser(e.target.value)
          }
        />
        <Button onClick={handleInputUser}>Submit</Button>
      </Box>
    </Container>
  );
};

export default Home;
