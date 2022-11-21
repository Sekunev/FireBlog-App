import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { AuthContext, useAuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import blogpng from "../assets/blok.png";

const BlogCard = ({ item }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { id, content, imageUrl, date, email, title } = item;

  return (
    <Card
      onClick={() =>
        navigate(`details/${id}`, {
          state: item,
        })
      }
      sx={{
        width: 350,
        maxWidth: 345,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 10px",
        height: 500,
        transition: "transform .2s",
        "&:hover": {
          transform: "scale(1.01)",
        },
      }}
    >
      <CardHeader
        // avatar={
        //   <Avatar
        //     alt="Remy Sharp"
        //     src="https://i.pravatar.cc/300"
        //     sx={{ width: 56, height: 56 }}
        //   />
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={title}
        subheader={date}
      />
      {imageUrl && (
        <CardMedia
          component="img"
          height="254"
          image={imageUrl}
          alt="imageUrl"
        />
      )}
      {!imageUrl && (
        <CardMedia
          component="img"
          height="254"
          image={blogpng}
          alt="imageUrl"
        />
      )}

      <CardContent>
        <Typography
          variant="body1"
          className="lineClamp"
          title={title}
          color="secondary"
        >
          {content}
        </Typography>
        <Typography sx={{ mt: ".3rem" }}>{email}</Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button>
          <ThumbUpAltIcon color="primary" />
        </Button>
        <Button>
          <FavoriteIcon color="error" />
        </Button>
        <Button>
          <ThumbDownAltIcon color="primary" />
        </Button>
      </Box>
    </Card>
  );
};

export default BlogCard;
