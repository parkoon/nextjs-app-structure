import { z } from "zod";
import {
  CreateUserDtoSchema,
  LoginUserDtoSchema,
  UserDtoSchema,
  UserSchema,
} from "./session.schema";

export type CreateUserDto = z.infer<typeof CreateUserDtoSchema>;
export type User = z.infer<typeof UserSchema>;
export type UserDto = z.infer<typeof UserDtoSchema>;
export type LoginUserDto = z.infer<typeof LoginUserDtoSchema>;
