import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
const DUMMY_IMAGE = [
  {
    title: "images",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "images",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "images",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "images",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "images",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "images",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "images",
    image: "https://picsum.photos/200/300",
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "7rem 0",
  },
  container: {
    width: "80%",
    padding: "1.4rem",
    border: "0.2px solid gray",
    boxShadow: " 0 4px 2px -2px gray",
    borderRadius: ".4rem",
    marginBottom: "2rem",
  },
  card: {
    margin: ".4rem",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  image: {
    width: "100%",
  },
}));

const AcitivityImage = () => {
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
        Level
      </Typography>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "3rem auto",
        }}
      >
        {DUMMY_IMAGE.map((image, index) => (
          <Grid item xs={5} className={classes.card} key={image.title + index}>
            <img
              src={image.image}
              alt={image.title}
              className={classes.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AcitivityImage;
