"use client";

import React from "react";
import useInteractiveTabBarStyle from "../hooks/useInteractiveTabBarStyle";

type TabBarWrapperProps = {
  children: React.ReactNode;
};

const TabBarWrapper = ({ children }: TabBarWrapperProps) => {
  const style = useInteractiveTabBarStyle();
  return (
    <div style={style} className="px-4">
      {children}
    </div>
  );
};

export default TabBarWrapper;
