"use server";

import { userService } from "../../api/service";
import { cookies } from "next/headers";
import { cookieKey } from "@/shared/config";
import { signInFormScheme } from "../../model/scheme";

type SignInFormSuccessState = {
  isSuccess: true;
  data: any;
};

type SignInFormFailState = {
  isSuccess: false;
  reason?: string;
};

export type SignInFormState = SignInFormSuccessState | SignInFormFailState;

export const signInFormAction = async (
  prevState: SignInFormState,
  formData: FormData
): Promise<SignInFormState> => {
  const validatedFields = signInFormScheme.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (validatedFields.success) {
    try {
      const response = await userService.postLogin({
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
      return { isSuccess: false, reason: "fail" };
    }
  } else {
    return { isSuccess: false, reason: "parse Error" };
  }
};
