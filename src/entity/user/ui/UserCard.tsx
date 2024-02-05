import React from "react";
import { UserModel } from "../model";
import { generateLayerDebugProps } from "@/feature/debug/lib/generate-layer-debug-props";

type UserCardProps = {
  user: UserModel;
};

const UserCard = async (props: UserCardProps) => {
  const layerDebugProps = await generateLayerDebugProps("entity/UserCard");
  return <div {...layerDebugProps}>User Card</div>;
};

export default UserCard;
