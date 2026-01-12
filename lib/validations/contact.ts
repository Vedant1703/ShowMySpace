import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  countryCode: z.string().min(1),
  phone: z.string().min(6, "Invalid phone number"),
  company: z.string().optional(),
  profession: z.string().min(1),
  requirement: z.string().min(5, "Please describe your requirement"),
});
