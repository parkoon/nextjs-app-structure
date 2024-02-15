import { z } from "zod";

export const userDtoScheme = z.object({
  email: z.string().email(),
  token: z.string(),
  username: z.string(),
  bio: z.string(),
  image: z.string().nullable(),
});

export const signUpDtoScheme = z.object({
  username: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(8),
});

export const signInDtoScheme = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const userScheme = z.object({
  email: z.string().email(),
  token: z.string(),
  username: z.string(),
  bio: z.string(),
  image: z.string(),
});
