import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../schemas/SignInSchema";
import { useAuth } from "./useAuth";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { login, setLoading, setError: setAuthError } = useAuth();

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
      setLoading(true);
      setAuthError(null);
      await login(data.email, data.password);
      console.log("Sign in successful");
      navigate("/"); // Home page
    } catch (error) {
      console.error("Sign in error:", error);
      setError("root", {
        message: error.message || "An unexpected error occurred",
      });
      setAuthError(error.message);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
