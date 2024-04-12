import { Box, useMediaQuery } from "@mui/material";
import UserWidget from "../components/Widgets/UserWidget";
import MyPostWidget from "../components/Widgets/MyPostWidget";
import PostsWidget from "../components/Widgets/PostsWidget";
import FriendListWidget from "../components/Widgets/FriendListWidget";
const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobileScreens ? "flex" : "block"}
      gap="0.5rem"
      justifyContent="space-between"
    >
      <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
        <Box
          sx={{
            boxShadow:
              "0px 10px 13px -6px rgba(0,0,0,0.2), 0px 20px 31px 3px rgba(0,0,0,0.14), 0px 8px 38px 7px rgba(0,0,0,0.12)",
          }}
        >
          <UserWidget />
        </Box>
      </Box>
      <Box
        flexBasis={isNonMobileScreens ? "42%" : undefined}
        mt={isNonMobileScreens ? undefined : "2rem"}
      >
        <MyPostWidget />
        <PostsWidget />
      </Box>
      {isNonMobileScreens && (
        <Box flexBasis="26%">
          {/* <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} /> */}
          <FriendListWidget />
        </Box>
      )}
    </Box>
  );
};

export default Home;
