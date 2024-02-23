import { User, UserDto } from "./session.types";

export const mapUser = (userDto: UserDto): User => ({
  ...userDto.user,
  bio: userDto.user.bio || "",
});
