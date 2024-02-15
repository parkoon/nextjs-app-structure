"use client";
import { useUpdateUserMutation } from "@/entity/user/api";
import { updateUserDtoScheme } from "@/shared/api/models";
import { UpdateUserDto, UserDto } from "@/shared/api/types";
import { Form, FormField, Input, Textarea } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type UserUpdateFormProps = {
  user: UserDto;
};
export const UserUpdateForm = ({ user }: UserUpdateFormProps) => {
  const form = useForm<UpdateUserDto>({
    resolver: zodResolver(updateUserDtoScheme),
    defaultValues: { ...user, image: user.image ?? "", password: "", bio: "" },
  });
  const { mutate } = useUpdateUserMutation();
  const router = useRouter();

  const onSubmit = (formData: UpdateUserDto) => {
    mutate(
      { user: formData },
      {
        onSuccess: (res) => {
          router.push("profile/" + res.user.username);
        },
      }
    );
  };

  return (
    <Form {...form}>
      {/* <ul className="error-messages">
        <li>That name is required</li>
      </ul> */}

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset>
          <FormField
            defaultValue=""
            control={form.control}
            name="image"
            render={({ field }) => (
              <fieldset className="form-group">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  {...field}
                />
              </fieldset>
            )}
          />
          <FormField
            defaultValue=""
            control={form.control}
            name="username"
            render={({ field }) => (
              <fieldset className="form-group">
                <Input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  {...field}
                />
              </fieldset>
            )}
          />
          <FormField
            defaultValue=""
            control={form.control}
            name="bio"
            render={({ field: { value, ...rest } }) => (
              <fieldset className="form-group">
                <Textarea
                  {...rest}
                  className="form-control form-control-lg"
                  rows={8}
                  placeholder="Short bio about you"
                  defaultValue={value}
                />
              </fieldset>
            )}
          />
          <FormField
            defaultValue=""
            control={form.control}
            name="email"
            render={({ field }) => (
              <fieldset className="form-group">
                <Input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  {...field}
                />
              </fieldset>
            )}
          />
          <FormField
            defaultValue=""
            control={form.control}
            name="password"
            render={({ field }) => (
              <fieldset className="form-group">
                <Input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="New Password"
                  {...field}
                />
              </fieldset>
            )}
          />

          <button className="btn btn-lg btn-primary pull-xs-right">
            Update Settings
          </button>
        </fieldset>
      </form>
    </Form>
  );
};
