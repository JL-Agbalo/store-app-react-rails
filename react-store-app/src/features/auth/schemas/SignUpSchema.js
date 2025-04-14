import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" })
      .max(50, { message: "First name must be less than 50 characters" })
      .regex(/^[A-Za-z]+$/, {
        message: "First name must contain only letters",
      }),

    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" })
      .max(50, { message: "Last name must be less than 50 characters" })
      .regex(/^[A-Za-z]+$/, { message: "Last name must contain only letters" }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" })
      .trim()
      .toLowerCase(),

    // password: z
    //   .string()
    //   .min(8, { message: "Password must be at least 8 characters" })
    //   .regex(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //     {
    //       message:
    //         "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    //     }
    //   ),

    // confirmPassword: z
    //   .string()
    //   .min(1, { message: "Password confirmation is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
