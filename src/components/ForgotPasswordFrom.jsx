import { Grid, TextField, Button, Link, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import AuthFormBox from "./AuthFormBox";
import AuthFormHeadingLogo from "./AuthFormHeadingLogo";
const ForgotPasswordFrom = ({ smSize, mdSize }) => {
  return (
    <Grid item sm={smSize} md={mdSize} sx={{ position: "relative" }}>
      <AuthFormBox>
        <AuthFormHeadingLogo formHeading="Forgot Password" />
        <Box style={{ width: "100%", marginTop: "15px" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sumbit
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs textAlign="right">
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                sx={{ fontSize: "16px" }}
              >
                Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </AuthFormBox>
    </Grid>
  );
};

export default ForgotPasswordFrom;
