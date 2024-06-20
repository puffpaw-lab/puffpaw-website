import { BScrollConstructor } from "@better-scroll/core/dist/types/BScroll";
import { useEffect, useRef } from "react";
import BScroll from "../bscroll";

export default function BetterScrollProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const wrapper = useRef(null);
  const wrapperBody = useRef(null);
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
      });
      window.bs = bs.current;
    }

    // 通过尺寸变化来触发refresh
    if (bs.current && wrapperBody.current) {
      const resizeObserver = new ResizeObserver(() => {
        bs.current?.refresh();
      });
      resizeObserver.observe(wrapperBody.current);
      return () => {
        resizeObserver.disconnect();
        bs.current?.destroy();
        bs.current = undefined;
        window.bs = undefined;
      };
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
      <div ref={wrapperBody}>{children}</div>
    </div>
  );
}
