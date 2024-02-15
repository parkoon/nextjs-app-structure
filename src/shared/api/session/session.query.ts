import { useMutation } from "@tanstack/react-query";
import { sessionQueryKey } from "./session.query-key";
import { fetcher } from "@/shared/libs/fetcher";
import { realWorldPath } from "../api.libs";
import { CreateUserDto } from "./session.types";
import { sessionService } from ".";

export const useRegisterMutation = () =>
  useMutation({
    mutationKey: sessionQueryKey.register(),
    mutationFn: (data: CreateUserDto) => sessionService.register(data),
  });
