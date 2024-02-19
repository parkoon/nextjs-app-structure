import { z } from "zod";
import {
  profileDtoScheme,
  signInDtoScheme,
  signUpDtoScheme,
  updateUserDtoScheme,
  userDtoScheme,
  userScheme,
} from "./models";

export type UserDto = z.infer<typeof userDtoScheme>;
export type SignUpDto = z.infer<typeof signUpDtoScheme>;
export type SignInDto = z.infer<typeof signInDtoScheme>;

export type UpdateUserDto = z.infer<typeof updateUserDtoScheme>;
export type ProfileDto = z.infer<typeof profileDtoScheme>;
export type User = z.infer<typeof userScheme>;
