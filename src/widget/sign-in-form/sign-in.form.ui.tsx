"use client";

import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { LoginUserDtoSchema } from "@/shared/api/session/session.schema";
import { LoginUserDto } from "@/shared/api/session/session.types";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export const SignInForm = () => {
  const session = useSession();

  const form = useForm<LoginUserDto>({
    resolver: zodResolver(LoginUserDtoSchema),
    defaultValues: {
      email: "parkoon@gmail.com",
      password: "q1w2e3r4t5^",
    },
  });

  const onSubmit = async (data: LoginUserDto) => {
    console.log("###", data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    // await login();
    // console.log("###", res);
    // throw { message: "zz" };
    // TODO: 폼 에러처리를 어떻게 하는게 좋을까?
  };

  return (
    <Form {...form}>
      zzzzz
      {JSON.stringify(session.data?.user.token)}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="####" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Sign up</Button>

        <Link href="/sign-up">회원가입</Link>
      </form>
    </Form>
  );
};
