import { ThemeProvider, createTheme } from "@mui/material/styles";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "./components/auth/SignInPage/SignInPage";
import SignUpPage from "./components/auth/SignUpPage/SignUpPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Dashboard } from "@mui/icons-material";

const theme = createTheme();

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/" element={<Navigate to="/signIn" />} />
          {/* Protected routes */}
  <Route path="/dashboard" element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
