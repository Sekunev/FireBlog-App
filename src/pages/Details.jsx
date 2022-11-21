import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { AuthContext, useAuthContext } from "../contexts/AuthContext";
import { BlogContext, useBlogContext } from "../contexts/BlogContext";
import { DeleteBlog } from "../helpers/functions";
import { useContext } from "react";

const Details = () => {
  const navigate = useNavigate();

  const { blogInfo, setBlogInfo } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const { state: item } = useLocation();
  const { id, content, imageUrl, date, email, title } = item;

  console.log(blogInfo);
  const handleDeleteBlog = () => {
    DeleteBlog(id);
    navigate("/");
  };
  const handleUpdateBlog = () => {
    setBlogInfo({
      ...blogInfo,
      id: id,
      content: content,
      title: title,
      imageUrl: imageUrl,
      date: new Date().toDateString(),
      email: email,
    });
    navigate(`updateblog/${id}`);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" display={}>
      <Card sx={{ width: 645, minWidth: 345, height: 545, marginTop: "9rem" }}>
        <CardMedia component="img" height="340" image={imageUrl} alt="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="error" onClick={() => navigate("/")}>
        <ReplyAllIcon sx={{ marginRight: "1rem" }} />
        Go Back
      </Button>
      <>
        <CardActions>
          {currentUser.email === email && (
            <Box
              sx={{
                width: "100%",
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleUpdateBlog}
                sx={{ color: "white" }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ color: "white" }}
                onClick={handleDeleteBlog}
              >
                Delete
              </Button>
            </Box>
          )}
        </CardActions>
      </>
    </Grid>
  );
};

export default Details;
