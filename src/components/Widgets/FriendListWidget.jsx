import { Box, Divider, Typography, useTheme, List } from "@mui/material";
//import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NearbyUserList from "./NearbyUserList";
import { apiBaseURL } from "../../config";
const FriendListWidget = () => {
  const [nearByUserData, setNearByuserData] = useState([]);
  const token = useSelector((state) => state.user.token);
  const { palette } = useTheme();
  const getNearByUserData = () => {
    fetch(`${apiBaseURL}/newbyusers/getusers`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("You are not authenticate user.");
        }
        return response.json();
      })
      .then((userData) => {
        setNearByuserData(userData.data.results);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getNearByUserData();
    // eslint-disable-next-line
  }, []);
  return (
    <WidgetWrapper
      sx={{
        boxShadow:
          "0px 10px 13px -6px rgba(0,0,0,0.2), 0px 20px 31px 3px rgba(0,0,0,0.14), 0px 8px 38px 7px rgba(0,0,0,0.12)",
      }}
    >
      <List>
        <Typography
          color={palette.neutral.dark}
          variant="h4"
          fontWeight="500"
          sx={{ mb: "1.5rem" }}
        >
          Nearby Users
        </Typography>
        <Divider />
        <Box display="flex" flexDirection="column" gap="1.5rem" mt={2}>
          {nearByUserData.length > 0 &&
            nearByUserData.map((nearByUser, i) => (
              <NearbyUserList
                key={i}
                name={nearByUser.name}
                activity={nearByUser.activity}
                userPicturePath={nearByUser.photo}
                distance={nearByUser.distance}
                duration={nearByUser.duration}
              />
            ))}
        </Box>
      </List>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
