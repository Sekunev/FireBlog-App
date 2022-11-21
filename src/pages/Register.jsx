import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, CssBaseline, TextField } from "@mui/material";
import { register, singInGoogle } from "../helpers/firebase";
import GoogleIcon from "../assets/GoogleIcon";

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter an email"),
  password: yup
    .string()
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .required("Please enter a password")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must have a special chars"),
  firstname: yup.string().required("Please enter a First Name"),
  lastname: yup.string().required("Please enter a Last Name"),
});

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid
        container
        // xs={12}
        rowSpacing={{ sm: 3 }}
        sx={{
          marginTop: "12rem",
          height: "100vh",
          p: 2,
        }}
      >
        <Grid
          item
          xs={12}
          sm={10}
          md={12}
          sx={{
            marginTop: "7rem",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h3" align="center" mb={2} color="primary.light">
            Register
          </Typography>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              const displayName = `${values.firstname} ${values.lastname}`;
              register(values.email, values.password, navigate, displayName);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({
              values,
              isSubmitting,
              handleChange,
              handleBlur,
              errors,
              touched,
            }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                  color="secondary"
                >
                  <TextField
                    label="First Name"
                    name="firstname"
                    id="firstname"
                    type="text"
                    variant="outlined"
                    autoFocus
                    value={values?.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstname && Boolean(errors.firstname)}
                    helperText={touched.firstname && errors.firstname}
                  />
                  <TextField
                    label="Last Name"
                    name="lastname"
                    id="lastName"
                    type="text"
                    variant="outlined"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastname && Boolean(errors.lastname)}
                    helperText={touched.lastname && errors.lastname}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />

                  <Button
                    type="submit"
                    loadingPosition="center"
                    variant="contained"
                  >
                    Submit
                  </Button>
                  <Button
                    onClick={() => singInGoogle(navigate)}
                    type="button"
                    fullWidth
                    variant="outlined"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      px: 8,
                      mb: 2,
                    }}
                  >
                    CONTİNUE WITH GOOGLE
                    <GoogleIcon />
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/login">Do you have an account?</Link>
          </Box>
        </Grid>
        <Grid item xs={0} sm={7} md={6}></Grid>
      </Grid>
    </Container>
  );
};
export default Register;
