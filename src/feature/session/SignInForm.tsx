"use client";
import { useSignInMutation } from "@/entity/session/api";
import { signInDtoScheme } from "@/shared/api/models";
import { SignInDto } from "@/shared/api/types";
import { cookieKey } from "@/shared/config";
import {
  FormField,
  FormItem,
  FormControl,
  Input,
  Button,
  Typography,
  Form,
} from "@/shared/ui";

import { zodResolver } from "@hookform/resolvers/zod";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

export const SignInForm = () => {
  const form = useForm<SignInDto>({
    resolver: zodResolver(signInDtoScheme),
  });
  const router = useRouter();
  const { mutate } = useSignInMutation();

  const onSubmit = (data: SignInDto) => {
    mutate(
      { user: data },
      {
        onSuccess: (res) => {
          setCookie(cookieKey.token, res.user.token);
          router.push("/");
          router.refresh();
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 items-center">
        <Typography>Sign In</Typography>
        <Typography affects="small" className="text-green-500">
          Need an account?
        </Typography>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 items-center"
        >
          <FormField
            defaultValue=""
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            defaultValue=""
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Sign In</Button>
        </form>
      </Form>
    </div>
  );
};
