import { profileService } from "@/shared/api/profile";
import { ProfileDto } from "@/shared/api/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFollowProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: profileService.followProfile,
    onMutate: (username) => {
      queryClient.setQueriesData<{ profile: ProfileDto }>(
        { queryKey: ["profile", username] },
        (prev) => {
          if (!prev) return;
          console.log("hi");

          return {
            profile: { ...prev.profile, following: !prev.profile.following },
          };
        }
      );
    },
  });
};

export const useUnfollowProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: profileService.unfollowProfile,
    onMutate: (username) => {
      queryClient.setQueriesData<{ profile: ProfileDto }>(
        { queryKey: ["profile", username] },
        (prev) => {
          if (!prev) return;

          return {
            profile: { ...prev.profile, following: !prev.profile.following },
          };
        }
      );
    },
  });
};

export const useProfileQuery = (username: string) =>
  useQuery({
    queryKey: ["profile", username],
    queryFn: () => profileService.getProfile(username),
  });
