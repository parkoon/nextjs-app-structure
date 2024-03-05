import useScrollDownDetect from "@/shared/hooks/useScrollDownDetect";
import { useRef, useState } from "react";
import { layoutConfig } from "../config";

const defaultStyle: React.CSSProperties = {
  background: "#fff",
  position: "fixed",
  bottom: 0,
  margin: "0 auto",
  left: 0,
  right: 0,
  display: "flex",
  width: "100%",
  transition: "all .2s",
  maxWidth: layoutConfig.APP_MAX_WIDTH,
  height: layoutConfig.TAB_BAR_HEIGHT,
};

const useInteractiveTabBarStyle = () => {
  const [style, setStyle] = useState(defaultStyle);

  useScrollDownDetect((isDown) => {
    setStyle((prev) => ({
      ...prev,
      bottom: isDown ? `-${layoutConfig.TAB_BAR_HEIGHT}px` : "0px",
    }));
  });

  return style;
};

export default useInteractiveTabBarStyle;
