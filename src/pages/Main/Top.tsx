import { useRef } from "react";
import NumChangeProvider from "../components/NumChangeProvider";
import useTimerHook from "@/utils/hooks/useTimerHook";

/**顶部时钟 */
export default function Top() {
  const ref = useRef(null); //当前组件实例
  const { d, dd, h, hh, m, mm, isTimeStart } = useTimerHook(ref);

  return (
    <div className="main-top" ref={ref}>
      <div className="top-label">
        <div className="top-title">
          We’re live in a bit. Get in the Puffpaw node pre-sale
        </div>
        <div className="top-tip">
          We’ll be minting phase one in a bit. Stay tuned, follow the twitter.
        </div>
      </div>
      <div className="top-content">
        {isTimeStart ? (
          <>
            <div className="item">
              <NumChangeProvider num={d} />
              <NumChangeProvider num={dd} />d
            </div>
            <div className="item">
              <NumChangeProvider num={h} />
              <NumChangeProvider num={hh} />h
            </div>
            <div className="item">
              <NumChangeProvider num={m} />
              <NumChangeProvider num={mm} />m
            </div>
          </>
        ) : (
          <div className="item no-clock">Coming Soon</div>
        )}
      </div>
    </div>
  );
}
