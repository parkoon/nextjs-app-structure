import { useUnfollowProfileMutation } from "@/entity/profile/api";

type UnfollowButtonProps = {
  username: string;
};
export const UnfollowButton = ({ username }: UnfollowButtonProps) => {
  const { mutate } = useUnfollowProfileMutation();
  const handleClick = () => {
    mutate(username);
  };

  return (
    <button
      className="btn btn-sm btn-outline-secondary action-btn"
      onClick={handleClick}
    >
      <i className="ion-minus-round" />
      &nbsp; Unfollow {username}
    </button>
  );
};
