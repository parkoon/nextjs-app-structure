import TabBarLayout from "@/widget/layout/ui/TabBarLayout";
import { SignUpForm } from "@/widget/sign-up-form/sign-up-form.ui";

const SignUpPage = () => {
  return (
    <TabBarLayout title="회원가입">
      <SignUpForm />
    </TabBarLayout>
  );
};

export default SignUpPage;
