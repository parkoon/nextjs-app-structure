import TabBarLayout from "@/widget/layout/ui/TabBarLayout";
import { SignInForm } from "@/widget/sign-in-form/sign-in.form.ui";

type Props = {};

const SignInPage = async (props: Props) => {
  return (
    <TabBarLayout title="로그인">
      <SignInForm />
    </TabBarLayout>
  );
};

export default SignInPage;
