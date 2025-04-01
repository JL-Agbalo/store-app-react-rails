import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../schemas/SignInSchema";
import { useAuth } from "./useAuth";
import { signInUser } from "../services/auth";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { setUser, setIsLoading, setError: setAuthError } = useAuth();

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
      console.log("Form submitted with data:", data);
      setIsLoading(true);
      setAuthError(null);
      const user = await signInUser(data.email, data.password);
      console.log("Sign in successful:", user);
      setUser(user);
      navigate("/"); // Home page
    } catch (error) {
      console.log("Sign in failed:", error);
      console.error("Sign in error:", error);
      setError("root", {
        message: error.message || "An unexpected error occurred",
      });
      setAuthError(error.message);
    } finally {
      setIsLoading(false);
      console.log("Sign in process completed");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
