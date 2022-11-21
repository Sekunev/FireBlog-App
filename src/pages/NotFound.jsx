import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Typography variant="h4" align="center" style={{ marginTop: "5rem" }}>
      Page not found. Please go to <NavLink to="/">Home Page</NavLink>
    </Typography>
  );
};

export default NotFound;
