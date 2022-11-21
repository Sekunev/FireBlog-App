import { createTheme, ThemeProvider } from "@mui/material";
import { cyan, purple } from "@mui/material/colors";
import AuthProvider from "./contexts/AuthContext";
import BlogProvider from "./contexts/BlogContext";
import AppRouter from "./routers/AppRouter";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: cyan[800],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BlogProvider>
          <AppRouter />
        </BlogProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
