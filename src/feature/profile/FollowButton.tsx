import { useFollowProfileMutation } from "@/entity/profile/api";

type FollowButtonProps = {
  username: string;
};
export const FollowButton = ({ username }: FollowButtonProps) => {
  const { mutate } = useFollowProfileMutation();
  const handleClick = () => {
    mutate(username);
  };

  return (
    <button
      className="btn btn-sm btn-outline-secondary action-btn"
      onClick={handleClick}
    >
      <i className="ion-plus-round" />
      &nbsp; Follow {username}
    </button>
  );
};
