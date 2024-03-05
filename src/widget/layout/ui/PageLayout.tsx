import React from "react";
import { layoutConfig } from "../config";
import TabBar from "./TabBar";
import NavigationBar, { NavigationBarProps } from "./NavigationBar";

export type PageLayoutProps = {
  children: React.ReactNode;
} & NavigationBarProps;

const PageLayout = ({ children, left, right, title }: PageLayoutProps) => {
  return (
    <main className="mx-auto" style={{ maxWidth: layoutConfig.APP_MAX_WIDTH }}>
      <NavigationBar left={left} right={right} title={title} />
      {children}
    </main>
  );
};

export default PageLayout;
