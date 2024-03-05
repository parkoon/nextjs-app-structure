import { Avatar, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";

import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

const NavigationBar = async (props: Props) => {
  const session = await getServerSession();

  console.log(session);
  return (
    <nav className="h-[48px] px-4 py-2 sticky top-0 w-full bg-white z-50">
      <div className="flex items-center h-full">
        <span>LOGO</span>

        {session ? (
          <Avatar>
            <AvatarImage src={session.user.image} alt={session.user.username} />
          </Avatar>
        ) : (
          <Button variant="outline" size="sm">
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
