import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schemas/SignUpSchema";
import { useAuth } from "./useAuth";
import { signUpUser } from "../services/authService";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError: setFormError,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const user = await signUpUser(data);

      navigate("/signin", {
        state: {
          email: user.email, // Pass email to pre-fill login form
          message:
            "Account created successfully! Please sign in with your credentials.",
        },
      });
    } catch (err) {
      if (err.message === "Email already registered") {
        setFormError("email", {
          type: "manual",
          message: "This email is already registered",
        });
      } else {
        setFormError("root", {
          type: "manual",
          message: "Failed to create account. Please try again.",
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
  };
};
