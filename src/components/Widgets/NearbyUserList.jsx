//import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";
import UserImage from "../UserImage";
//import WidgetWrapper from "../WidgetWrapper";

const NearbyUserList = ({ name, userPicturePath, distance, duration }) => {
  const { palette } = useTheme();
  //const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box>
          <Typography color={main} variant="h5" fontWeight="500">
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem" mt={1}>
            distance:{distance}, Time:{duration}
          </Typography>
        </Box>
        <Box></Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default NearbyUserList;
