import { useMutation } from "@tanstack/react-query";
import { sessionQueryKey } from "./session.query-key";
import { fetcher, zodContract } from "@/shared/libs/fetcher";
import { realWorldPath } from "../api.libs";
import { CreateUserDto } from "./session.types";
import { sessionService } from ".";
import { CreateUserSchema } from "./session.schema";
import { UserDto } from "@/entity/user/api/types";

export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: sessionQueryKey.register(),
    mutationFn: (data: CreateUserDto) => {
      //

      const res = sessionService.register(data);
    },
    onSuccess: (data) => {},
  });
};
