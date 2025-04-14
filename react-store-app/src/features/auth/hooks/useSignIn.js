import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../schemas/SignInSchema";
import { useAuth } from "./useAuth";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { login, setLoading } = useAuth();

  const { register, handleSubmit, formState, setError, clearErrors } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      clearErrors();
      setLoading(true);
      await login(data.email, data.password);
      navigate("/");
    } catch (error) {
      // Handle different types of errors
      if (error.message.includes("Invalid email or password")) {
        setError("root", {
          type: "manual",
          message: "Invalid email or password. Please try again.",
        });
      } else if (error.message.includes("network")) {
        setError("root", {
          type: "manual",
          message: "Network error. Please check your connection.",
        });
      } else {
        setError("root", {
          type: "manual",
          message: "An unexpected error occurred. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors: formState.errors,
    isLoading: formState.isSubmitting,
  };
};
