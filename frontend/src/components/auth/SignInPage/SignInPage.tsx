import { useState } from "react";
import type { SignInFormData } from "./schema";
import { Box } from "@mui/material";
import SignInForm from "../auth/SignInForm";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSignIn = async (data: SignInFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      // perform sign in logic here
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <SignInForm onSubmit={handleSignIn} isLoading={isLoading} error={error} />
      <nav>
        <Link to="/signUp">Don't have an account? Sign Up</Link>
      </nav>
    </Box>
  );
};

export default SignInPage;
