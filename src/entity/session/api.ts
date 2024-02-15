import { authService } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";

export const useSignInMutation = () => {
  return useMutation({ mutationFn: authService.postLogin });
};

export const useSignUpMutation = () => {
  return useMutation({ mutationFn: authService.postUsers });
};
