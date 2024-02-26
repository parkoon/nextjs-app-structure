import { fetcher } from "@/shared/libs/fetcher/fetcher.main";
import { toUser } from "../adapter/toUser";
import { UserDto } from "./types";

export const getUser = () => {
  const res: UserDto = fetcher("/");

  return toUser(res);
};
