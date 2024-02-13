import {
  SignInFormScheme,
  SignUpFormScheme,
} from "../model/scheme";

export type UserService = {
  postUsers: (body?: { user: SignUpFormScheme }) => any;
  postLogin: (body?: { user: SignInFormScheme }) => any;
};
