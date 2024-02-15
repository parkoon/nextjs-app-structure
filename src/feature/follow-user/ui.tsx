"use client";

import { Button } from "@/shared/ui/button";
import React from "react";

type FollowUserProps = {
  username: string;
};
const FollowUser = ({ username }: FollowUserProps) => {
  const handleClick = () => {
    alert("ok");
  };
  return (
    <Button size="sm" variant="outline" onClick={handleClick}>
      + {username}
    </Button>
  );
};

export default FollowUser;
