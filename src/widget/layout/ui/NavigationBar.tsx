import { Avatar, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";

import { getServerSession } from "next-auth";
import React from "react";

export type NavigationBarProps = {
  left?: string | React.ReactNode;
  title?: string;
  right?: string | React.ReactNode;
};

const NavigationBar = async ({ left, title, right }: NavigationBarProps) => {
  const session = await getServerSession();

  return (
    <header className="h-[48px] py-2 sticky top-0 w-full bg-white z-50">
      <div className="flex items-center h-full relative">
        <div className="absolute left-0">{left}</div>
        <div className="absolute -translate-x-1/2 left-1/2">
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="absolute right-0">{right}</div>
      </div>
    </header>
  );
};

export default NavigationBar;
