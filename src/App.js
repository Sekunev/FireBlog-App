import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./contexts/AuthContext";
import BlogProvider from "./contexts/BlogContext";
import AppRouter from "./routers/AppRouter";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: red[200],
        main: red[500],
        dark: red[900],
        contrastText: "#fff",
      },
      secondary: {
        light: red[200],
        main: red[500],
        dark: red[900],
        contrastText: "#000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BlogProvider>
          <AppRouter />
          <ToastContainer />
        </BlogProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
