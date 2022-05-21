import { Box } from "@mui/system";
import { Controller } from "react-hook-form";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  containerChild: {
    marginBottom: "1rem",
  },
}));
const FormController = ({ children, control }: any): any => {
  const classes = useStyles();
  return (
    <Box className={classes.containerChild}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: "Name required" }}
        //@ts-ignore
        render={({ field: { value } }) => ({ children })}
      />
    </Box>
  );
};

export default FormController;
