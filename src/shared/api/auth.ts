import { realWorldHttp } from "../http";
import { SignInDto, SignUpDto, UserDto } from "./types";

export type AuthService = {
  postUsers: (body?: { user: SignUpDto }) => Promise<{ user: UserDto }>;
  postLogin: (body?: { user: SignInDto }) => Promise<{ user: UserDto }>;
};

export const authService: AuthService = {
  postUsers: async (body) => {
    const res = await realWorldHttp("/api/users", {
      method: "post",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  },
  postLogin: async (body) => {
    const res = await realWorldHttp("/api/users/login", {
      method: "post",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  },
};
