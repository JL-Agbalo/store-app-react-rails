import { z } from "zod";

export const userInformationSchema = z.object({
  first_name: z.string().min(1, "First name is required."),
  last_name: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  //   Email and Phone can be edit in the Update Contact Info section
});
