import { useState } from "react";
import { Grid, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";

import { signIn } from "../store/slice/userSlice";
import CirculerLoader from "./CirculerLoader";
import AuthFormHeadingLogo from "./AuthFormHeadingLogo";
import AuthFormBox from "./AuthFormBox";
import { apiBaseURL } from "../config";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Provide valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
const initialValuesLogin = {
  email: "",
  password: "",
};

const notifyObj = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

const LoginForm = ({ smSize, mdSize }) => {
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifySuccess = () =>
    toast.success("Logged In Successfully!", notifyObj);
  const notifyError = () => toast.error("Error Please try again!", notifyObj);

  const handleFormSubmit = (values, onSubmitProps) => {
    loginHandler(values, onSubmitProps);
  };

  const loginHandler = (values, onSubmitProps) => {
    setIsFormSubmit(true);
    const inputData = {};
    for (let value in values) {
      inputData[value] = values[value];
    }
    //console.log(inputData);
    fetch(`${apiBaseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not authenticate user.");
        }
        if (response.status === 400 || response.status === 401) {
          throw new Error("Incorrect email or password!");
        }
        return response.json();
      })
      .then((userData) => {
        //console.log(userData);
        const payload = {
          user: userData.data,
          token: userData.token,
          loggedInTime: Date.now() + 300000,
        };
        dispatch(signIn(payload));
        onSubmitProps.resetForm();
        setIsFormSubmit(false);
        navigate("/");
        notifySuccess();
      })
      .catch(() => {
        setIsFormSubmit(false);
        notifyError();
        //console.error("Error:", error);
      });
  };

  return (
    <Grid item sm={smSize} md={mdSize} sx={{ position: "relative" }}>
      <AuthFormBox>
        <AuthFormHeadingLogo formHeading="Login Here" />
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesLogin}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            resetForm,
          }) => (
            <form
              method="post"
              onSubmit={handleSubmit}
              style={{ width: "100%", marginTop: "15px" }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    error={
                      Boolean(touched.password) && Boolean(errors.password)
                    }
                    helperText={touched.password && errors.password}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Link
                    component={RouterLink}
                    to="/forgotpassword"
                    variant="body2"
                    sx={{ fontSize: "16px" }}
                    onClick={() => {
                      resetForm();
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/signup"
                    variant="body2"
                    sx={{ fontSize: "16px" }}
                    onClick={() => {
                      resetForm();
                    }}
                  >
                    Sign-up
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </AuthFormBox>
      {isFormSubmit && <CirculerLoader />}
    </Grid>
  );
};

export default LoginForm;
