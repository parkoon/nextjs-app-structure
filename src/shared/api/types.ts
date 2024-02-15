import { z } from "zod";
import {
  signInDtoScheme,
  signUpDtoScheme,
  userDtoScheme,
  userScheme,
} from "./models";

export type UserDto = z.infer<typeof userDtoScheme>;
export type SignUpDto = z.infer<typeof signUpDtoScheme>;
export type SignInDto = z.infer<typeof signInDtoScheme>;

export type User = z.infer<typeof userScheme>;
