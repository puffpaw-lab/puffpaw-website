import { BScrollConstructor } from "@better-scroll/core/dist/types/BScroll";
import { useEffect, useRef } from "react";
import BScroll from "../bscroll";
import { MediaWidth } from "@/theme/themeConfig";

export default function BetterScrollProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const wrapper = useRef(null);
  const bs = useRef<BScrollConstructor>();

  useEffect(() => {
    if (wrapper.current && !bs.current) {
      bs.current = new BScroll(wrapper.current, {
        bounce: false,
        mouseWheel: true,
        scrollX: false,
        scrollY: true,
        scrollbar: true,
        nestedScroll: {
          groupId: "all",
        },
        observeDOM: true,
        observeImage: true,
        click: true,
        useTransition: window.screen.width > MediaWidth.xl,
      });
      window.bs = bs.current;
    }
  }, []);

  return (
    <div
      ref={wrapper}
      style={{
        height: "inherit",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div>{children}</div>
    </div>
  );
}
