import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Link,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { toast, Bounce } from "react-toastify";

import CirculerLoader from "./CirculerLoader";
import AuthFormHeadingLogo from "./AuthFormHeadingLogo";
import AuthFormBox from "./AuthFormBox";
import { apiBaseURL } from "../config";
const activityArr = ["Swimming", "Hiking", "Cricket", "Hockey", "Football"];
const ZIPCODES = [
  452001, 452002, 452003, 452007, 452008, 452010, 452013, 452015, 452016,
  452018, 453220,
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Provide valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must have min. 8 characters")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  activity: yup.array().required("Activity is required"),
  pincode: yup.string().required("Pincode is required"),
  gender: yup.string().required("Gender is required"),
});

const initialValuesRegister = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  activity: [],
  pincode: "",
  gender: "",
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
const SignupForm = ({ smSize, mdSize }) => {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const navigate = useNavigate();

  //for toast notify
  const notifySuccess = () => toast.success("Sing up Successfully!", notifyObj);
  const notifyError = () => toast.error("Error Please try again!", notifyObj);

  const handleFormSubmit = (values, onSubmitProps) => {
    signupHandler(values, onSubmitProps);
  };

  const signupHandler = (values, onSubmitProps) => {
    setIsFormSubmit(true);
    const inputData = {};
    for (let value in values) {
      inputData[value] = Array.isArray(values[value])
        ? values[value].join(",")
        : values[value];
    }

    fetch(`${apiBaseURL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        onSubmitProps.resetForm();
        setIsFormSubmit(false);
        navigate("/login");
        notifySuccess();
      })
      .catch((error) => {
        setIsFormSubmit(false);
        notifyError();
        console.error("Error:", error);
      });
  };
  return (
    <Grid item sm={smSize} md={mdSize} sx={{ position: "relative" }}>
      <AuthFormBox>
        <AuthFormHeadingLogo formHeading="Sign-up Here" />
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesRegister}
          validationSchema={registerSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
          }) => (
            <form
              method="post"
              onSubmit={handleSubmit}
              style={{ width: "100%", marginTop: "15px" }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="Name"
                    label="Name*"
                    name="name"
                    autoComplete="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    error={Boolean(touched.name) && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email*"
                    name="email"
                    autoComplete="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password*"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="passwordConfirm"
                    label="Confirm Password*"
                    type="password"
                    id="passwordConfirm"
                    autoComplete="current-confirm-password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.passwordConfirm}
                    error={
                      Boolean(touched.passwordConfirm) &&
                      Boolean(errors.passwordConfirm)
                    }
                    helperText={
                      touched.passwordConfirm && errors.passwordConfirm
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={4}>
                  <FormControl sx={{ width: "100%", marginTop: "15px" }}>
                    <InputLabel id="actvityLabel">Activity* (Max 3)</InputLabel>
                    <Select
                      labelId="actvityLabel"
                      id="activity"
                      multiple
                      fullWidth
                      name="activity"
                      value={values.activity}
                      onChange={(e) =>
                        setFieldValue("activity", e.target.value)
                      }
                      error={Boolean(touched.activity && errors.activity)}
                      input={<OutlinedInput label="Activity* (Max 3)" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {activityArr.map((SingleActivity) => (
                        <MenuItem
                          key={SingleActivity}
                          value={SingleActivity}
                          disabled={
                            values.activity.length >= 3 &&
                            !values.activity.includes(SingleActivity)
                          }
                        >
                          <Checkbox
                            checked={
                              values.activity.indexOf(SingleActivity) > -1
                            }
                          />
                          <ListItemText primary={SingleActivity} />
                        </MenuItem>
                      ))}
                      {touched.country && errors.country ? (
                        <FormHelperText
                          sx={{
                            color: "#bf3333",
                            marginLeft: "16px !important",
                          }}
                        >
                          {touched.country && errors.country}
                        </FormHelperText>
                      ) : null}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <FormControl sx={{ width: "100%", marginTop: "15px" }}>
                    <InputLabel id="zipcodeLabel">Zipcode*</InputLabel>
                    <Select
                      labelId="zipcodeLabel"
                      id="zipcode"
                      name="pincode"
                      onChange={(e) => setFieldValue("pincode", e.target.value)}
                      value={values.pincode}
                      error={Boolean(touched.country && errors.country)}
                      label="Zipcode"
                      input={<OutlinedInput label="Zipcode*" />}
                      MenuProps={MenuProps}
                    >
                      {ZIPCODES.map((zipcode) => (
                        <MenuItem key={zipcode} value={zipcode}>
                          {zipcode}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <FormControl sx={{ width: "100%", marginTop: "15px" }}>
                    <InputLabel id="genderLabel">Gender*</InputLabel>
                    <Select
                      labelId="genderLabel"
                      id="gender"
                      name="gender"
                      onChange={(e) => setFieldValue("gender", e.target.value)}
                      value={values.gender}
                      label="Gender"
                      input={<OutlinedInput label="Gender*" />}
                      MenuProps={MenuProps}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="reset"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 0 }}
                    md={6}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    md={6}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={12} md={12} textAlign="right">
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="body2"
                    sx={{ fontSize: "16px" }}
                    onClick={() => {
                      resetForm();
                    }}
                  >
                    Have an Account? Login Here
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

export default SignupForm;
