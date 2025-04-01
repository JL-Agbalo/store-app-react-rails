import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schemas/SignUpSchema";
import { useAuth } from "./useAuth";
import { authService } from "../services/auth";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { setUser, setIsLoading, setError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError(null);
      const user = await authService.signUpUser(data);
      setUser(user);
      navigate("/signin"); // Redirect to signin page after successful registration
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
