//import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

const Friend = ({ name, subtitle, userPicturePath }) => {
  const { palette } = useTheme();
  //const primaryLight = palette.primary.light;
  //const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box>
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Friend;
