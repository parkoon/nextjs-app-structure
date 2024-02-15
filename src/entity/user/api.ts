import { userService } from "@/shared/api/users";
import { useMutation } from "@tanstack/react-query";

export const useUpdateUserMutation = () =>
  useMutation({ mutationFn: userService.putUser });
