//import { Container } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Header from "./components/Header";
//import HeaderTwo from "./components/HeaderTwo";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./utils/ProtectedRoute";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import ForgotPassword from "./pages/ForgotPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
]);
function App() {
  const themeMode = useSelector((state) => state.theme.mode);
  const theme = useMemo(
    () => createTheme(themeSettings(themeMode)),
    [themeMode]
  );
  //console.log(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
