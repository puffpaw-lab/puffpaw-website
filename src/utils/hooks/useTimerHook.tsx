import { useBoolean, useInViewport, useInterval, useMemoizedFn } from "ahooks";
import { useEffect, useState } from "react";

type params = Parameters<typeof useInViewport>;

/**倒计时
 * @param target 监听组件，移出视野停止计时
 * @param targetTime 倒计时时间 单位s
 * @param option 监听组件配置 useInViewport 配置
 */
export default function useTimerHook(
  target: params[0],
  targetTime?: number,
  option?: params[1]
) {
  const [inViewPort] = useInViewport(target, option); //添加监听器，不在可视范围内不给计时
  const [isTimeEnd, setIsTimeEnd] = useBoolean(false); //倒计时是否结束

  const [d, setD] = useState(0);
  const [dd, setDD] = useState(1);
  const [h, setH] = useState(1);
  const [hh, setHH] = useState(2);
  const [m, setM] = useState(0);
  const [mm, setMM] = useState(0);
  const [interval, setInterval] = useState<number>();

  /**没有最终时间，展示倒计时动画 */
  const caculateTimeWithOutTargetTime = useMemoizedFn(() => {
    if (mm - 1 < 0) {
      setMM(9);
      if (m - 1 < 0) {
        setM(5);
      } else {
        setM(m - 1);
      }
    } else {
      setMM(mm - 1);
    }
  });
  /**有最终时间，计算倒计时 */
  const caculateTimeWithTargetTime = useMemoizedFn(() => {
    if (!targetTime) {
      return;
    }
    const nowTime = Math.floor(new Date().getTime() / 1000);
    console.log(nowTime, targetTime);
    //倒计时结束
    if (nowTime >= targetTime) {
      setIsTimeEnd.setTrue();
      setInterval(undefined);
      setM(0);
      setMM(0);
      setH(0);
      setHH(0);
      setD(0);
      setDD(0);
      return;
    }
    //计算倒计时 --临时
    const time = targetTime - nowTime;
    const durationS = Math.floor(time % 60);
    setM(Math.floor(durationS / 10));
    setMM(durationS % 10);
  });

  /**计算当前时间 */
  const caculateTime = useMemoizedFn(() => {
    if (targetTime) {
      caculateTimeWithTargetTime();
    } else {
      caculateTimeWithOutTargetTime();
    }
  });

  //监听器控制定时器
  useEffect(() => {
    if (inViewPort && !isTimeEnd) {
      setInterval(3000);
      caculateTime();
    } else {
      setInterval(undefined);
    }
  }, [caculateTime, inViewPort, isTimeEnd]);

  useInterval(() => {
    caculateTime();
  }, interval);

  return {
    d,
    dd,
    h,
    hh,
    m,
    mm,
    isTimeEnd,
  };
}
