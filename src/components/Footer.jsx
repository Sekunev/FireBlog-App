import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <Box sx={{ height: "5rem" }}></Box>
      <Box
        sx={{
          position: "fixed",
          backgroundColor: "secondary.main",

          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "4rem",
          bottom: 0,
          boxShadow: "2px 2px 10px black",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <a
            href="https://github.com/Sekunev/"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon
              sx={{
                fontSize: "2rem",
                color: "primary.contrastText",
                transition: "all .5s",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/abdullah-ahlatli/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              sx={{
                fontSize: "2rem",
                color: "primary.contrastText",
                transition: "all .5s",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
          </a>
        </Box>
        © {new Date().getFullYear()} Sekunev
      </Box>
    </>
  );
};

export default Footer;
