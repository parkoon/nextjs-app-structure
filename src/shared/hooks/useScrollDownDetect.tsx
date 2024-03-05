import { useEffect, useRef, useState } from "react";

const useScrollDownDetect = (callback: (isDown: boolean) => void) => {
  const [scrollDown, setScrollDown] = useState(false);

  const prevY = useRef<number>(0);
  useEffect(() => {
    if (typeof window === "undefined") return;

    prevY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const isScrollAtBottom = currentY + viewportHeight === documentHeight;

      const isScrollAtTop = window.scrollY === 0;

      const isScrollDown =
        (!isScrollAtTop && prevY.current < currentY) ||
        (!isScrollAtTop && isScrollAtBottom);

      setScrollDown(isScrollDown);
      callback?.(isScrollDown);

      prevY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scrollDown;
};

export default useScrollDownDetect;
