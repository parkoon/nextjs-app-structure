"use client";

import { useRegisterMutation } from "@/shared/api/session/session.query";
import { CreateUserSchema } from "@/shared/api/session/session.schema";
import { CreateUserDto } from "@/shared/api/session/session.types";
import { isHttpError } from "@/shared/libs/fetcher/fetch.exceptions";
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

export const SignUpForm = () => {
  const { mutate, isError, error } = useRegisterMutation();
  const form = useForm<CreateUserDto>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      email: "parkoon@gmail.com",
      password: "q1w2e3r4t5^",
      username: "parkoon",
    },
  });

  const onSubmit = (data: CreateUserDto) => {
    // throw { message: "zz" };
    mutate(data, {
      onError: mutationErrorHandler({
        onHttpError(err) {},
      }),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* TODO: mutation 에러 처리를 더 깔끔하게 할 수 있을까? */}
        {JSON.stringify(error)}
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
