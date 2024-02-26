"use client";

import {
  useLoginMutation,
  useRegisterMutation,
} from "@/shared/api/session/session.query";
import { isHttpError } from "@/shared/libs/fetcher/fetcher.exceptions";
import { mutationErrorHandler } from "@/shared/libs/react-query/query.exceptions";
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
import { toast } from "@/shared/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signIn, useSession } from "next-auth/react";
import { LoginUserDto } from "@/shared/api/session/session.types";
import { LoginUserDtoSchema } from "@/shared/api/session/session.schema";

export const SignInForm = () => {
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

    console.log("###", res);
    // throw { message: "zz" };
    // TODO: 폼 에러처리를 어떻게 하는게 좋을까?
  };

  return (
    <Form {...form}>
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
      </form>
    </Form>
  );
};
