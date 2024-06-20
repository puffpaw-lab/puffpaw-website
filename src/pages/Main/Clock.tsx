import { useRef } from "react";
import { PuffpawSVG } from "../Icon";
import NumChangeProvider from "../components/NumChangeProvider";
import useTimerHook from "@/utils/hooks/useTimerHook";
import { useMemoizedFn } from "ahooks";
import { useNavigate } from "react-router-dom";

// const targetTime = Math.floor(new Date().getTime() / 1000) + 20;

/**倒计时 */
export default function Clock() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { d, dd, h, hh, m, mm, isTimeEnd } = useTimerHook(ref);

  const goMint = useMemoizedFn(() => {
    if (isTimeEnd) {
      navigate("/mint");
    }
  });

  return (
    <div className="main-clock" ref={ref}>
      <div className="clock-title">
        We're live in a bit. Get in the Puffpaw node pre-sale
      </div>
      <div className="clock-content">
        <div className="item">
          {d}
          {dd}d
        </div>
        <div className="item">
          {h}
          {hh}h
        </div>
        <div className="item">
          <NumChangeProvider num={m} />
          <NumChangeProvider num={mm} />m
        </div>
      </div>
      <div className="clock-tip">
        We'll be minting phase one in a bit. Stay tuned, follow the twitter.
      </div>
      <div className="clock-action">
        <button onClick={goMint}>
          <span>{isTimeEnd ? "Mint A" : "Follow"}</span>
          <PuffpawSVG width="2.8125rem" height="2.175rem" />
          <span>{isTimeEnd ? "Puffpaw" : "Us"}</span>
        </button>
      </div>
    </div>
  );
}
