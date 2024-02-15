import { realWorldHttp } from "../http";
import { UpdateUserDto, UserDto } from "./types";

export type UserService = {
  getUser: () => Promise<{ user: UserDto }>;
  putUser: (user: { user: UpdateUserDto }) => Promise<{ user: UserDto }>;
};

export const userService: UserService = {
  getUser: async () => {
    const res = await realWorldHttp("/api/user", {
      method: "get",
    });
    const data = (await res.json()) as { user: UserDto };
    return data;
  },
  putUser: async (body) => {
    const res = await realWorldHttp("/api/user", {
      method: "put",
      body,
    });
    const data = (await res.json()) as { user: UserDto };
    return data;
  },
};
