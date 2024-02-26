"use client";

import { useRegisterMutation } from "@/shared/api/session/session.query";
import { CreateUserDtoSchema } from "@/shared/api/session/session.schema";
import { CreateUserDto } from "@/shared/api/session/session.types";
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

export const SignUpForm = () => {
  const { mutate, isError, error } = useRegisterMutation();

  const { update } = useSession();
  const form = useForm<CreateUserDto>({
    resolver: zodResolver(CreateUserDtoSchema),
    defaultValues: {
      email: "parkoon@gmail.com",
      password: "q1w2e3r4t5^",
      username: "parkoon",
    },
  });

  const onSubmit = (data: CreateUserDto) => {
    // throw { message: "zz" };
    // TODO: 폼 에러처리를 어떻게 하는게 좋을까?
    mutate(data, {
      onError: mutationErrorHandler({
        onHttpError(err) {},
      }),
      onSuccess: (values) => {
        signIn("credentials");
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="parkoon" {...field} />
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
