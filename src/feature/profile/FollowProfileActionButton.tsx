"use client";

import { useProfileQuery } from "@/entity/profile/api";
import { FollowButton } from "./FollowButton";
import { UnfollowButton } from "./UnfollowButton";

type FollowProfileActionButtonProps = {
  username: string;
};
export const FollowProfileActionButton = ({
  username,
}: FollowProfileActionButtonProps) => {
  const { data } = useProfileQuery(username);

  return data?.profile.following ? (
    <UnfollowButton username={username} />
  ) : (
    <FollowButton username={username} />
  );
};
