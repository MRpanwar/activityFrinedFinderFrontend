import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import { Box, Typography, Divider, useTheme, Chip } from "@mui/material";
import { useSelector } from "react-redux";

import UserImage from "../UserImage";
import FlexBetween from "../FlexBetween";
import WidgetWrapper from "../WidgetWrapper";

const UserWidget = () => {
  const user = useSelector((state) => state.user.user);
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  return (
    <WidgetWrapper>
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <UserImage image={user.photo} />
          <Box>
            <Typography variant="h4" color={dark} fontWeight="500">
              {user.name}
            </Typography>
            <Typography color={medium}>{0} friends</Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>
      <Divider />
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocalActivityOutlinedIcon fontSize="large" sx={{ color: main }} />
          {user.activity.map((act) => (
            <Chip key={act} label={act} />
          ))}
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
