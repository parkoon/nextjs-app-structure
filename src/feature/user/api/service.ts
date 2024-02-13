import { realWorldHttp } from "@/shared/http";
import { UserService } from "./types";
import { UserScheme, userScheme } from "../model/scheme";

const ENDPOINT = "/api/users";
export const userService: UserService = {
  postUsers: async (query) => {
    const res = await realWorldHttp(ENDPOINT, {
      method: "post",
      body: { user: query?.user },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  },
  postLogin: async (query) => {
    const res = await realWorldHttp(ENDPOINT + "/login", {
      method: "post",
      body: { user: query?.user },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  },
  getUser: async () => {
    const res = await realWorldHttp("/api/user", {
      method: "get",
    });
    const data = (await res.json()) as { user: UserScheme };
    return data;
  },
};
