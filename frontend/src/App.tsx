
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AuthForm from "./components/auth/auth/SignInForm";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthForm />
    </ThemeProvider>
  );
};

export default App;
