import { UserDto } from "@/entity/user/api/types";
import { fetcher, zodContract } from "@/shared/libs/fetcher";
import { realWorldPath } from "../api.libs";
import { CreateUserDto } from "./session.types";
import { CreateUserSchema } from "./session.schema";

export const sessionService = {
  login: () => {},

  register: async (user: CreateUserDto) => {
    const res = await fetcher({
      request: {
        method: "POST",
        url: realWorldPath("/users"),
        body: JSON.stringify({ user }),
      },
      response: {
        contact: CreateUserSchema,
      },
    });

    return res;
  },
};

//
