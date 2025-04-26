import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schemas/SignUpSchema";
import { useAuth } from "./useAuth";
import { signUpUser } from "../../../services/v1/authService";

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
  
      const payload = {
        ...data,
        password_confirmation: data.confirmPassword,
      };
      delete payload.confirmPassword;
  
      const user = await signUpUser(payload);
  
      // Log user data
      console.log("Signup successful! User:", user);
  
      // Optionally set user in context if needed
      setUser(user);
  
      // Redirect to home page
      navigate("/", {
        state: {
          message: "Account created and signed in successfully!",
        },
      });
    } catch (err) {
      if (err.fieldErrors) {
        Object.entries(err.fieldErrors).forEach(([field, message]) => {
          setFormError(field, { type: "manual", message });
        });
      } else if (err.message === "Email already registered") {
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
