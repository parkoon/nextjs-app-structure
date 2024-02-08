"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/shared/ui/form";
import Typography from "@/shared/ui/typography";
import { useForm } from "react-hook-form";
import { SignUpFormScheme, signUpFormScheme } from "./scheme";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { SignUpFormState, signUpFormAction } from "./action";
import { useFormState } from "react-dom";

const initialState: SignUpFormState = {
  isSuccess: false,
};
export const SignUpForm = () => {
  const form = useForm<SignUpFormScheme>({
    resolver: zodResolver(signUpFormScheme),
  });
  const [state, formAction] = useFormState(signUpFormAction, initialState);

  return (
    <div>
      <Typography>Sign up</Typography>
      <Typography affects="small" className="text-green-500">
        Have an account?
      </Typography>
      <Form {...form}>
        <form action={formAction}>
          <FormField
            defaultValue=""
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="UserName" {...field} />
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
