import { Grid, Paper } from "@mui/material";

import AuthFormImage from "../components/AuthFormImage";
import ForgotPasswordFrom from "../components/ForgotPasswordFrom";

const ForgotPassword = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#e5e7e7",
        padding: "25px 15px",
      }}
    >
      <Paper elevation={20} sx={{ marginLeft: "15px", marginRight: "15px" }}>
        <Grid container justifyContent="center" alignItems="center">
          <AuthFormImage
            smSize={6}
            mdSize={5}
            xsDisplay="none"
            smDisplay="block"
          />
          <ForgotPasswordFrom smSize={6} mdSize={7} />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ForgotPassword;
