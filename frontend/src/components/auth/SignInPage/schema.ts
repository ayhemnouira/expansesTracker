import z from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Please enter a valid email (e.g., yourname@gmail.com)" }),
    password: z.string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must have at least 8 characters" }),
});
export type SignInFormData = z.infer<typeof signInSchema>;