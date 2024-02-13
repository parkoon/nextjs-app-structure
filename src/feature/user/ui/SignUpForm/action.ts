"use server";

import { userService } from "../../api/service";
import { cookies } from "next/headers";
import { cookieKey } from "@/shared/config";
import { signUpFormScheme } from "../../model/scheme";

type SignUpFormSuccessState = {
  isSuccess: true;
  data: any;
};

type SignUpFormFailState = {
  isSuccess: false;
  reason?: string;
};

export type SignUpFormState = SignUpFormSuccessState | SignUpFormFailState;

export const signUpFormAction = async (
  prevState: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> => {
  const validatedFields = signUpFormScheme.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (validatedFields.success) {
    try {
      const response = await userService.postUsers({
        user: validatedFields.data,
      });
      const { user } = response;
      const { token, ...userWithoutToken } = user;
      cookies().set(cookieKey.token, token);

      return {
        isSuccess: true,
        data: { ...response, user: { ...userWithoutToken } },
      };
    } catch (e) {
      console.log(e);
      return { isSuccess: false, reason: "fail" };
    }
  } else {
    return { isSuccess: false, reason: "parse Error" };
  }
};
