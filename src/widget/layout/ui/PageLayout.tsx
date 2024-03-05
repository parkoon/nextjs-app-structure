import React from "react";
import { layoutConfig } from "../config";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="mx-auto" style={{ maxWidth: layoutConfig.APP_MAX_WIDTH }}>
      {children}
    </main>
  );
};

export default PageLayout;
