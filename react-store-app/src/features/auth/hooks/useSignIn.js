import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../schemas/SignInSchema";
import { useAuth } from "../../../contexts/auth/useAuth";

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

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
      
      await login(data.email, data.password);
      navigate("/");
      
    } catch (error) {
      setError("root", {
        type: "manual",
        message: error.message || "Sign in failed. Please check your email and password.",
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