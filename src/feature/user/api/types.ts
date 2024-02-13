import {
  SignUpFormScheme,
} from "../model/scheme";

export type UserService = {
  postUsers: (body?: { user: SignUpFormScheme }) => any;
};
