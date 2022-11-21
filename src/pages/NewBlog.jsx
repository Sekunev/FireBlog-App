import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useContext } from "react";
import { Button, CssBaseline, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuthContext } from "../contexts/AuthContext";
import { BlogContext, useBlogContext } from "../contexts/BlogContext";
import { AddNewBlog } from "../helpers/functions";
import { Form, Formik } from "formik";
import * as yup from "yup";

const newBlogSchema = yup.object().shape({
  title: yup.string().required("Please  enter an title"),
  // imageUrl: yup.string().required("Please  enter an img"),
  content: yup.string().required("Please  enter an content"),
});

const initialValues = {
  title: "",
  imageUrl: "",
  content: "",
};

const NewBlog = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { blogInfo, setBlogInfo } = useContext(BlogContext);
  console.log(currentUser, blogInfo);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   AddNewBlog(blogInfo, currentUser);
  //   setBlogInfo(initialValues);
  //   navigate("/");
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://www.nemutlu.net/images/blog.png"
          alt=""
          style={{
            width: "20rem",
            height: "15rem",
            borderRadius: "30%",
            marginTop: "2rem",
          }}
        />
        <Typography component="h1" variant="h4">
          New Blog
        </Typography>

        <Formik
          initialValues={{
            title: "",
            imageUrl: "",
            content: "",
          }}
          validationSchema={newBlogSchema}
          onSubmit={(values, actions) => {
            AddNewBlog(values, currentUser);
            setBlogInfo(initialValues);
            navigate("/");
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            touched,
            errors,
          }) => (
            <Form sx={{ mt: 1 }} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="imageUrl"
                label="Image Url"
                id="imageUrl"
                autoComplete="imageUrl"
                value={values.imageUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.imageUrl && Boolean(errors.imageUrl)}
                helperText={touched.imageUrl && errors.imageUrl}
              />

              <TextField
                margin="normal"
                type="text"
                required
                fullWidth
                name="content"
                label="content"
                id="content"
                autoComplete="content"
                multiline
                value={values.content}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.content && Boolean(errors.content)}
                helperText={touched.content && errors.content}
                multiline
                rows={10}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default NewBlog;
