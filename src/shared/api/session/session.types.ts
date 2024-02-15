import { z } from "zod";
import { CreateUserSchema } from "./session.schema";

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
