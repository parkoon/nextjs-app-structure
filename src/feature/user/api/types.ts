import {
  SignInFormScheme,
  SignUpFormScheme,
  UserScheme,
} from "../model/scheme";

export type UserService = {
  postUsers: (body?: { user: SignUpFormScheme }) => any;
  postLogin: (body?: { user: SignInFormScheme }) => any;
  getUser: () => Promise<{ user: UserScheme }>;
};
