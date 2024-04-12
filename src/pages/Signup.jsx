import { Grid, Paper } from "@mui/material";

import AuthFormImage from "../components/AuthFormImage";
import SignupForm from "../components/SignupForm";

const Signup = () => {
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
            smSize={4}
            mdSize={4}
            xsDisplay="none"
            smDisplay="block"
          />
          <SignupForm smSize={8} mdSize={8} />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signup;
