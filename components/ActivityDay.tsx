import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
const DUMMY_IMAGE = [
  {
    time: "09.00",
  },
  {
    time: "09.00",
  },
  {
    time: "09.00",
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "7rem 0",
  },
  card: {
    width: "90%",
    padding: ".2rem",
    backgroundColor: "#3498DB",
    borderRadius: ".3rem",
    display: "flex",
    margin: "1rem auto",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardHeader: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  cardBody: {
    width: "65%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
}));

const AcitvityDays = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        variant="h1"
        color="primary"
        style={{
          fontSize: "40px",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        Level 3
      </Typography>
      <Box>
        {DUMMY_IMAGE.map((time: any, index: number) => (
          <Box className={classes.card} key={time + index}>
            <Box className={classes.cardHeader}>
              <Typography>{time.time}</Typography>
            </Box>
            <Box className={classes.cardBody}>
              <Box
                style={{
                  backgroundColor: "#FFE4B5",
                  margin: ".4rem 0",
                  padding: ".2rem .4rem",
                  borderRadius: ".3rem",
                }}
              >
                <Typography>Salah satu </Typography>
              </Box>
              <Box
                style={{
                  backgroundColor: "#FFE4B5",
                  margin: ".4rem 0",
                  padding: ".2rem .4rem",
                  borderRadius: ".3rem",
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
              <Box
                style={{
                  backgroundColor: "#FFE4B5",
                  margin: ".4rem 0",
                  padding: ".2rem .4rem",
                  borderRadius: ".3rem",
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
              <Box
                style={{
                  backgroundColor: "#FFE4B5",
                  margin: ".4rem 0",
                  padding: ".2rem .4rem",
                  borderRadius: ".3rem",
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
              <Box
                style={{
                  backgroundColor: "#FFE4B5",
                  margin: ".4rem 0",
                  padding: ".2rem .4rem",
                  borderRadius: ".3rem",
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AcitvityDays;
