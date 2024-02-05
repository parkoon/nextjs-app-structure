import { create } from "zustand";

type LayerDebuggerEnabledStore = {
  state: boolean;
  actions: {
    toggle: () => void;
  };
};

const useLayerDebuggerEnabledStore = create<LayerDebuggerEnabledStore>(
  (set) => ({
    state: true,
    actions: {
      toggle: () => set((prevState) => ({ state: !prevState.state })),
    },
  })
);

// 안티패턴
// export const useToggle = () => {
//   const { toggleEnabled } = useLayerDebuggerStore();
//   return toggleEnabled;
// };

export const useLayerDebuggerEnabled = () =>
  useLayerDebuggerEnabledStore(({ state }) => state);

export const useLayerDebuggerEnabledActions = () =>
  useLayerDebuggerEnabledStore(({ actions }) => actions);
