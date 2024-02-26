import { SignInForm } from "@/widget/sign-in-form/sign-in.form.ui";
import { getServerSession } from "next-auth";
import Sample from "./Sample";

type Props = {};

const SignInPage = async (props: Props) => {
  const session = await getServerSession();

  return (
    <div>
      user...
      {JSON.stringify(session)}
      <SignInForm />
      <Sample />
    </div>
  );
};

export default SignInPage;
