import { UserDto } from "@/entity/user/api/types";
import { fetcher } from "@/shared/libs/fetcher";
import { realWorldPath } from "../api.libs";
import { CreateUserDto } from "./session.types";

export const sessionService = {
  login: () => {},

  register: (user: CreateUserDto) =>
    fetcher({
      request: {
        method: "POST",
        url: realWorldPath("/users"),
        body: JSON.stringify({ user }),
      },
    }),
};
