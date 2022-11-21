import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useAuthContext } from "../contexts/AuthContext";
import { useBlogContext } from "../contexts/BlogContext";
import { DeleteBlog } from "../helpers/functions";

const Details = () => {
  const navigate = useNavigate();

  const { blogInfo, setBlogInfo } = useBlogContext();
  const { currentUser } = useAuthContext();

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
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Card
          sx={{
            width: 645,
            minWidth: 345,
            marginTop: "7rem",
            borderRadius: "10px",
          }}
        >
          <CardMedia component="img" height="340" image={imageUrl} alt="img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
            <Typography
              variant="body1"
              color="secondary.dark"
              autoComplete="content"
              multiline
            >
              {content}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        mt={2}
        display="flex"
        justifyContent="center"
        direction="column"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          <ReplyAllIcon sx={{ marginRight: "1rem" }} />
          Go Back
        </Button>
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
                color="primary"
                onClick={handleUpdateBlog}
                sx={{ color: "white", marginRight: "1rem" }}
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
      </Grid>
    </Grid>
  );
};

export default Details;
