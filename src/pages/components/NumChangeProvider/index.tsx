import { useEffect, useRef, useState } from "react";
import "./index.scss";
import { useBoolean, useDebounceEffect } from "ahooks";

/**数字切换动画 */
export default function NumChangeProvider({ num }: { num: string | number }) {
  const animationDuration = useRef(500); //动画时长 ms
  const [current, setCurrent] = useState(num); //当前数字
  const [next, setNext] = useState(num); //后一个数字

  const [startChange, setStartChange] = useBoolean(false); //开始动画

  useEffect(() => {
    if (current !== next) {
      setStartChange.setTrue();
      setTimeout(() => {
        setCurrent(next);
        setStartChange.setFalse();
      }, animationDuration.current);
    }
  }, [current, next, setStartChange]);

  useDebounceEffect(
    () => {
      setNext(num);
    },
    [num, setNext],
    {
      wait: animationDuration.current,
    }
  );

  return (
    <div className={"num-change-provider" + (startChange ? " start" : "")}>
      <div
        className="next"
        style={{
          animationDuration: (animationDuration.current >> 1) + "ms",
          animationDelay: (animationDuration.current >> 1) + "ms",
        }}
      >
        {next}
      </div>
      <div
        className="current"
        style={{
          animationDuration: (animationDuration.current >> 1) + "ms",
        }}
      >
        {current}
      </div>
    </div>
  );
}
