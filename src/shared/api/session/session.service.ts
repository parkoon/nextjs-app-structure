import { fetcher, zodContract } from "@/shared/libs/fetcher";
import { realWorldPath } from "../api.libs";
import { mapUser } from "./session.lib";
import { UserDtoSchema } from "./session.schema";
import { CreateUserDto, LoginUserDto } from "./session.types";

export const sessionService = {
  login: (user: LoginUserDto) =>
    fetcher({
      request: {
        method: "POST",
        url: realWorldPath("/users/login"),
        body: JSON.stringify({ user }),
      },
      response: {
        contact: zodContract(UserDtoSchema),
        map: mapUser,
      },
    }),
  register: async (user: CreateUserDto) =>
    fetcher({
      request: {
        method: "POST",
        url: realWorldPath("/users"),
        body: JSON.stringify({ user }),
      },
      response: {
        contact: zodContract(UserDtoSchema),
        map: mapUser,
      },
    }),
};
