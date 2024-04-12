import { Box } from "@mui/material";

const AuthFormBox = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "25px 15px 25px 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderLeft: "5px solid",
        borderImage: "linear-gradient(to bottom, #f96618, #6ad4fe) 1",
      }}
    >
      {children}
    </Box>
  );
};

export default AuthFormBox;
