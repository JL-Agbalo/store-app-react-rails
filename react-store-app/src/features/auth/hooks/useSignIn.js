import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../schemas/SignInSchema";
import { useAuth } from "./useAuth";
import { signInUser } from "../../../services/v1/authService";

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await signInUser(data.email, data.password);

      if (response.user) {
        setUser(response.user);
        navigate("/");
      }
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "Sign in failed. Please check your email and password.",
      });
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

export default useSignIn;
