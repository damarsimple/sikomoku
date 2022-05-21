import { useContext } from "react";
import { Typography, Box, Theme, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { UserContext } from "../context/user";
import Link from "next/link";

const level = [
  {
    title: "Level 1",
    path: "level-one",
    color: "#00c853",
  },
  {
    title: "Level 2",
    path: "level-two",
    color: "#2962ff",
  },
  {
    title: "Level 3",
    path: "level-three",
    color: "#FBC02D",
  },
  {
    title: "Aktivitasku",
    path: "activity",
    color: "#FBC02D",
  },
];
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "7rem 0",
  },
  container: {
    width: "90%",
    padding: "1.4rem",
    border: "0.2px solid gray",
    boxShadow: " 0 4px 2px -2px gray",
    borderRadius: ".4rem",
    marginBottom: "2rem",
  },

  grid: {
    display: "flex",
    flexDirection: "row",
    margin: "0 .4rem",
  },

  box: {
    textAlign: "center",
    margin: ".4rem",
    padding: ".4rem .5rem",
    color: "#fff",
    borderRadius: ".3rem",
    cursor: "pointer",
    transition: "all 0.5s ease-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },

  title: {
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: "24px",
    lineHeight: 1.2,
    marginBottom: "1rem",
  },

  subTitle: {
    fontSize: "16px",
    lineHeight: "18px",
    textAlign: "center",
  },
}));

const Sikomoku = () => {
  const { user } = useContext(UserContext);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box
        component="div"
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="div" className={classes.container}>
          <Typography variant="h4" color="primary" className={classes.title}>
            Home
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            Aplikasi komunikasi dan pengelolaan perilaku Anak Autism
          </Typography>
        </Box>
        <Box component="div" className={classes.container}>
          <Typography color="secondary" variant="h4" className={classes.title}>
           Dewi Barotut Taqiyah
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            NIM: 21129251031
          </Typography>
        </Box>
        <Box component="div" className={classes.container}>
          <Typography variant="h4" color="primary" className={classes.title}>
            Menu
          </Typography>
          <Grid container>
            {level.map((level, index) => (
              <Link href={level.path} key={level.path + index}>
                <Grid
                  item
                  xs={5}
                  className={classes.box}
                  style={{
                    backgroundColor: `${level.color}`,
                  }}
                >
                  <Typography>{level.title}</Typography>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Sikomoku;
