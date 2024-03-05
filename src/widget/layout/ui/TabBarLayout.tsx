import React from "react";
import PageLayout, { PageLayoutProps } from "./PageLayout";
import TabBar from "./TabBar";

type TabBarLayoutProps = PageLayoutProps;

const TabBarLayout = ({ children, ...props }: TabBarLayoutProps) => {
  return (
    <PageLayout {...props}>
      {children}
      <TabBar />
    </PageLayout>
  );
};

export default TabBarLayout;
