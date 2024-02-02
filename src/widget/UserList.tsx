import { getUser } from "@/entity/user/api/index";
import UserCard from "@/entity/user/ui/UserCard";
import React from "react";

type UserListProps = {};

const UserList = (props: UserListProps) => {
  const user = getUser();

  return (
    <div>
      <UserCard user={user} />
    </div>
  );
};

export default UserList;
