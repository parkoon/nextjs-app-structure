"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/shared/ui/form";
import Typography from "@/shared/ui/typography";
import { useForm } from "react-hook-form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useFormState } from "react-dom";
import { signInFormScheme, SignInFormScheme } from "../../model/scheme";
import { SignInFormState, signInFormAction } from "./action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const initialState: SignInFormState = {
  isSuccess: false,
};
export const SignInForm = () => {
  const form = useForm<SignInFormScheme>({
    resolver: zodResolver(signInFormScheme),
  });
  const [state, formAction] = useFormState(signInFormAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.isSuccess) {
      router.replace("/");
    }
  }, [router, state.isSuccess]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 items-center">
        <Typography>Sign In</Typography>
        <Typography affects="small" className="text-green-500">
          Need an account?
        </Typography>
      </div>

      <Form {...form}>
        <form action={formAction} className="flex flex-col gap-2 items-center">
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
