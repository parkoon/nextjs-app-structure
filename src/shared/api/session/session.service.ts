import { fetcher } from "@/shared/libs/fetcher/fetcher.main";
import { baseUrl } from "../api.libs";
import { mapUser } from "./session.lib";
import { UserDtoSchema } from "./session.schema";
import { CreateUserDto, LoginUserDto } from "./session.types";
import { zodContract } from "@/shared/libs/zod/zod.libs";

export const sessionService = {
  login: (user: LoginUserDto) =>
    fetcher({
      request: {
        method: "POST",
        url: baseUrl("/users/login"),
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
        url: baseUrl("/users"),
        body: JSON.stringify({ user }),
      },
      response: {
        contact: zodContract(UserDtoSchema),
        map: mapUser,
      },
    }),

  test: () => {
    fetcher({
      request: {
        method: "POST",
        url: baseUrl("/users"),
      },
      response: {
        contact: zodContract(UserDtoSchema),
        map: mapUser,
      },
    });

    fetcher({
      request: {
        method: "POST",
        url: baseUrl("/users"),
      },
      response: {
        map: mapUser,
      },
    });

    fetcher({
      request: {
        method: "POST",
        url: baseUrl("/users"),
      },
      response: {
        contact: zodContract(UserDtoSchema),
      },
    });

    fetcher({
      request: {
        method: "POST",
        url: baseUrl("/users"),
      },
    });
  },
};
