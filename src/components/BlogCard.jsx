import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

import blogpng from "../assets/blok.png";

const BlogCard = ({ item }) => {
  const navigate = useNavigate();
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
      <CardHeader title={title} subheader={date} />
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
          color="secondary.dark"
        >
          {content}
        </Typography>
        <Typography sx={{ mt: ".3rem" }}>{email}</Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button>
          <FavoriteIcon color="primary.light" />
        </Button>
      </Box>
    </Card>
  );
};

export default BlogCard;
