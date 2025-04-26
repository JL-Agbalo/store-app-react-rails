import { z } from "zod";

export const signUpSchema = z
  .object({
    first_name: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" })
      .max(128, { message: "First name must be less than 128 characters" })
      .regex(/^[A-Za-z]+$/, {
        message: "First name must contain only letters",
      }),

    last_name: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" })
      .max(128, { message: "Last name must be less than 128 characters" })
      .regex(/^[A-Za-z]+$/, { message: "Last name must contain only letters" }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" })
      .trim()
      .toLowerCase(),

    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Password confirmation is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });