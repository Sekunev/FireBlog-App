import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import noDataPng from "../assets/no-data.png";

const NotFound = () => {
  return (
    <Typography
      variant="h4"
      align="center"
      sx={{
        display: "flex",
        flexDirection: "column",
        justfyContent: "center",
        marginTop: "5rem",
        alignItems: "center",
      }}
    >
      <span>Page not found. Please go to</span>
      <NavLink to="/">Home Page</NavLink>
      <img src={noDataPng} alt="" />
    </Typography>
  );
};

export default NotFound;
