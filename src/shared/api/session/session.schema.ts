import { z } from "zod";

export const CreateUserDtoSchema = z.object({
  username: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(8),
});

export const UserSchema = z.object({
  email: z.string(),
  token: z.string(),
  username: z.string(),
  bio: z.string(),
  image: z.string(),
});

export const LoginUserDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const UserDtoSchema = z.object({
  user: z.object({
    email: z.string(),
    token: z.string(),
    username: z.string(),
    bio: z.nullable(z.string()),
    image: z.string(),
  }),
});
