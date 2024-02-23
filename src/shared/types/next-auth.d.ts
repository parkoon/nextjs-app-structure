import { DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

declare module "next-auth" {
  interface User extends IUser {}

  interface Session {
    user: IUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
