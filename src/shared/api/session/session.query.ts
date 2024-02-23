"use client";

import { useMutation } from "@tanstack/react-query";
import { sessionService } from "./session.service";
import { sessionQueryKey } from "./session.query-key";
import { CreateUserDto, LoginUserDto } from "./session.types";

export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: sessionQueryKey.register(),
    mutationFn: (data: CreateUserDto) => sessionService.register(data),
  });
};

export const useLoginMutation = () =>
  useMutation({
    mutationKey: sessionQueryKey.login(),
    mutationFn: (data: LoginUserDto) => sessionService.login(data),
  });
