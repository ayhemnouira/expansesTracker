import { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import type { SignUpFormData } from "./schema";
import SignUpForm from "../auth/SignUpForm";
import { registerUser } from "../../../api/authApi";


const SignUpPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSignUp = async (data: SignUpFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const user = await registerUser(data); // call backend
      console.log("User registered:", user);

      // Redirect to login page after successful signup
      navigate("/signIn");
    } catch (err: any) {
      // Handle errors returned from backend
      setError(err.response?.data?.message || err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <SignUpForm onSubmit={handleSignUp} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default SignUpPage;
