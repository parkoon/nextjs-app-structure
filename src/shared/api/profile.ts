import { realWorldHttp } from "../http";
import { ProfileDto } from "./types";

type ProfileService = {
  getProfile: (username: string) => Promise<{ profile: ProfileDto }>;
  followProfile: (username: string) => Promise<{ profile: ProfileDto }>;
  unfollowProfile: (username: string) => Promise<{ profile: ProfileDto }>;
};

export const profileService: ProfileService = {
  getProfile: async (username) => {
    const res = await realWorldHttp("/api/profiles/" + username, {
      method: "get",
    });

    return await res.json();
  },
  followProfile: async (username) => {
    const res = await realWorldHttp("/api/profiles/" + username + "/follow", {
      method: "post",
    });

    return await res.json();
  },
  unfollowProfile: async (username) => {
    const res = await realWorldHttp("/api/profiles/" + username + "/follow", {
      method: "delete",
    });

    return await res.json();
  },
};
