import { SignInForm } from "@/widget/sign-in-form/sign-in.form.ui";
import { getServerSession } from "next-auth";

type Props = {};

const SignInPage = async (props: Props) => {
  const session = await getServerSession();

  return (
    <div>
      user...
      {JSON.stringify(session)}
      <SignInForm />
    </div>
  );
};

export default SignInPage;
