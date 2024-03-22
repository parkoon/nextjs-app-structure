import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import TabBarLayout from "@/widget/layout/ui/TabBarLayout";
import { SignInForm } from "@/widget/sign-in-form/sign-in.form.ui";
import { getServerSession } from "next-auth";

type Props = {};

const SignInPage = async (props: Props) => {
  const session = await getServerSession(nextAuthOptions);

  return (
    <TabBarLayout title="로그인">
      <SignInForm />
    </TabBarLayout>
  );
};

export default SignInPage;
