"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/shared/ui/form";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { SignUpDto } from "@/shared/api/types";
import { signUpDtoScheme } from "@/shared/api/models";
import { useSignUpMutation } from "@/entity/session/api";
import { setCookie } from "cookies-next";
import { cookieKey } from "@/shared/config";
import Link from "next/link";
import { Button, Input, Typography } from "@/shared/ui";

export const SignUpForm = () => {
  const form = useForm<SignUpDto>({
    resolver: zodResolver(signUpDtoScheme),
  });
  const router = useRouter();
  const { mutate } = useSignUpMutation();

  const onSubmit = (data: SignUpDto) => {
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
    <div className="row">
      <div className="col-md-6 offset-md-3 col-xs-12">
        <Typography variant="h1" className="text-xs-center">
          Sign up
        </Typography>
        <Typography className="text-xs-center">
          <Link href="/register">Have an account?</Link>
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
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
          <Button type="submit">Sign Up</Button>
        </form>
      </Form>
    </div>
  );
};
