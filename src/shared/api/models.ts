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

export const updateUserDtoScheme = z
  .object({
    email: z.string().email().optional().or(z.literal("")),
    username: z.string().min(5).optional().or(z.literal("")),
    bio: z.string().optional().or(z.literal("")),
    image: z.string().optional().or(z.literal("")),
    password: z.string().min(8).optional().or(z.literal("")),
  })
  .partial()
  .refine((args) => Object.values(args).some(Boolean), {
    path: ["form"],
    message: "One of the fields must be defined",
  });

export const userScheme = z.object({
  email: z.string().email(),
  token: z.string(),
  username: z.string(),
  bio: z.string(),
  image: z.string(),
});
