import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <main className="max-w-[]">{children}</main>
    </div>
  );
};

export default PageLayout;
