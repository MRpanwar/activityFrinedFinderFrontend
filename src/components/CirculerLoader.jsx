import { Box, CircularProgress } from "@mui/material";

const CirculerLoader = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        textAlign: "center",
        width: "100%",
        background: "#e5e7e78c",
        height: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress
        sx={{
          position: "relative",
          top: "46%",
          transform: "translateY(-46%)",
        }}
      />
    </Box>
  );
};

export default CirculerLoader;
