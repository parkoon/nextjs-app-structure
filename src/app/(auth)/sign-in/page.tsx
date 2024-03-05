import { SignInForm } from "@/widget/sign-in-form/sign-in.form.ui";
import { getServerSession } from "next-auth";
import PageLayout from "@/widget/layout/ui/PageLayout";
import TabBarLayout from "@/widget/layout/ui/TabBarLayout";

type Props = {};

const SignInPage = async (props: Props) => {
  const session = await getServerSession();

  return (
    <TabBarLayout title="로그인">
      <SignInForm />
    </TabBarLayout>
  );
};

export default SignInPage;
