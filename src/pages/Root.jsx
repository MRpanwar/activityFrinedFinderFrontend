import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut, updateloggedInTime } from "./../store/slice/userSlice";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
const RootLayout = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  let expireTime = useSelector((state) => state.user.loggedInTime);
  //console.log("expireTime", expireTime);

  const navigate = useNavigate();

  //function for check inactivity and logout
  const checkInactivity = () => {
    if (expireTime < Date.now()) {
      dispatch(signOut());
      navigate("/login");
    }
  };

  //function to update expire time
  const updateExpireTime = () => {
    if (token) {
      dispatch(updateloggedInTime());
    }
  };

  //useEffect to set interval to check for inactivity
  useEffect(() => {
    //check for inacivity every 5 seconds
    const interval = setInterval(() => {
      checkInactivity();
    }, 5000);

    //clear interval on unmount
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  //useEffect to update expire time on any user activity
  useEffect(() => {
    //update initial expire time
    updateExpireTime();

    //set event listners
    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    //window.addEventListener("mousemove", updateExpireTime);

    //clean up
    return () => {
      window.addEventListener("click", updateExpireTime);
      window.addEventListener("keypress", updateExpireTime);
      window.addEventListener("scroll", updateExpireTime);
      //window.addEventListener("mousemove", updateExpireTime);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
