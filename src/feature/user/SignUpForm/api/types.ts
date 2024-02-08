import { SignUpFormScheme } from "../scheme";

export type UserService = {
  postUsers: (body?: { user: SignUpFormScheme }) => any;
};
