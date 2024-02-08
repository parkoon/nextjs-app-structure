"use server";

import { userService } from "./api/service";
import { cookies } from "next/headers";
import { signUpFormScheme } from "./scheme";
import { cookieKey } from "@/shared/config";

type SignUpFormSuccessState = {
  isSuccess: true;
  data: any;
};

type SignUpFormFailState = {
  isSuccess: false;
  reason?: string;
};

export type SignUpFormState = SignUpFormSuccessState | SignUpFormFailState;
export const signUpFormAction = (
  prevState: SignUpFormState,
  formData: FormData
): SignUpFormState => {
  const validatedFields = signUpFormScheme.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (validatedFields.success) {
    try {
      const response = userService.postUsers({ user: validatedFields.data });
      cookies().set(cookieKey.token, response.token);
      return { isSuccess: true, data: response };
    } catch (e) {
      console.log(e);
      return { isSuccess: false, reason: "fail" };
    }
  } else {
    return { isSuccess: false, reason: "parse Error" };
  }
};
