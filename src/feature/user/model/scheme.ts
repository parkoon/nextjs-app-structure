import { z } from "zod";

export const signUpFormScheme = z.object({
  username: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignUpFormScheme = z.infer<typeof signUpFormScheme>;

export const signInFormScheme = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignInFormScheme = z.infer<typeof signInFormScheme>;
