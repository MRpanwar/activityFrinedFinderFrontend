import { Box, Typography } from "@mui/material";
import logo from "./../assets/logo.png";
const AuthFormHeadingLogo = ({ formHeading }) => {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        mb={1}
        sx={{
          background: "-webkit-linear-gradient(#f96618, #6ad4fe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
      >
        Activity Friend Finder
      </Typography>
      <Box component="img" alt="logo" src={logo} sx={{ width: "75px" }} />
      <Typography component="h1" variant="h3" mt={2} fontWeight={700}>
        {formHeading}
      </Typography>
    </>
  );
};

export default AuthFormHeadingLogo;
