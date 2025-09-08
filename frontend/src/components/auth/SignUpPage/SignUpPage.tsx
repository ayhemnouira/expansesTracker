import { useState } from "react";

import { Box } from "@mui/material";

import type { SignUpFormData } from "./schema";
import SignUpForm from "../auth/SignUpForm";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSignIn = async (data: SignUpFormData) => {
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
      <SignUpForm onSubmit={handleSignIn} isLoading={isLoading} error={error} />
   
    </Box>
  );
};

export default SignUpPage;
