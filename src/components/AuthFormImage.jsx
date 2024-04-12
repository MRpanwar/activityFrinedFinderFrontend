import { Box, Grid } from "@mui/material";
import activityImg from "./../assets/activity.jpg";
//import activityImg from "./../assets/activityNew.jpg";

const AuthFormImage = ({ smSize, mdSize, xsDisplay, smDisplay }) => {
  const gridStyle = { xs: xsDisplay, sm: smDisplay, lg: "block" };
  return (
    <>
      <Grid item sm={smSize} md={mdSize} display={gridStyle}>
        <Box
          component="img"
          alt="We are offer to connect for activity."
          src={activityImg}
          sx={{ maxWidth: "100%" }}
        />
      </Grid>
    </>
  );
};

export default AuthFormImage;
