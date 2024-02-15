import { realWorldHttp } from "../http";
import { UserDto } from "./types";

export type UserService = {
  getUser: () => Promise<{ user: UserDto }>;
};

export const userService: UserService = {
  getUser: async () => {
    const res = await realWorldHttp("/api/user", {
      method: "get",
    });
    const data = (await res.json()) as { user: UserDto };
    return data;
  },
};
