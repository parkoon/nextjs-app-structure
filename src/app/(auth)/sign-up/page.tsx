import { SignUpForm } from "@/widget/sign-up-form/sign-up-form.ui";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import React from "react";

const SignUpPage = () => {
  return (
    <div>
      {/* <ErrorBoundary
        errorComponent={({ error }) => {
          return <div>zzz{JSON.stringify(error)}</div>;
        }}
      > */}
      <SignUpForm />
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default SignUpPage;
