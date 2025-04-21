import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../schemas/SignInSchema";
import { useAuth } from "./useAuth";

export const useSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);

      // Navigate to the page user tried to visit or home
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (err) {
      if (err.message === "Email not found") {
        setError("email", {
          type: "manual",
          message: "No account found with this email",
        });
      } else if (err.message === "Invalid credentials") {
        setError("password", {
          type: "manual",
          message: "Invalid password",
        });
      } else {
        setError("root", {
          type: "manual",
          message: "An unexpected error occurred. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
    setValue,
  };
};
