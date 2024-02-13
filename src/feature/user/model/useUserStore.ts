import { create } from "zustand";

type State = {
  email: string;
  bio: string;
  image: string;
} | null;

type Action = {
  update: (user: State | null) => void;
};

type UserState = { state: State; actions: Action };

const useUserStore = create<UserState>((set) => ({
  state: null,
  actions: {
    update: (user) => set({ state: user }),
  },
}));

export const useUserState = () => useUserStore(({ state }) => state);
export const useUserActions = () => useUserStore(({ actions }) => actions);
