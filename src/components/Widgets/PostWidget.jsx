import { FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";
import { IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { serverBaseURL } from "../../config";
const PostWidget = ({
  name,
  description,
  location,
  picturePath,
  userPicturePath,
}) => {
  //console.log(name, description, location, picturePath, userPicturePath);
  const { palette } = useTheme();
  const main = palette.neutral.main;
  //const primary = palette.primary.main;

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`${serverBaseURL}/img/posts/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton>
              <FavoriteBorderOutlined />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default PostWidget;
