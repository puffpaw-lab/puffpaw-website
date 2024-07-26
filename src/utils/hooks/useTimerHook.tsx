import { useBoolean, useInViewport, useInterval, useMemoizedFn } from "ahooks";
import { useEffect, useState } from "react";

type params = Parameters<typeof useInViewport>;

const targetTime = 0; //倒计时目标时间戳 单位s
const isTimeStart = false; //倒计时是否开始

/**倒计时
 * @param target 监听组件，移出视野停止计时
 * @param targetTime 倒计时时间 单位s
 * @param option 监听组件配置 useInViewport 配置
 * @param forceStart 是否强制开始倒计时
 */
export default function useTimerHook(
  target: params[0],
  option?: params[1],
  forceStart: boolean = false
) {
  const [inViewPort] = useInViewport(target, option); //添加监听器，不在可视范围内不给计时
  const [isTimeEnd, setIsTimeEnd] = useBoolean(false); //倒计时是否结束

  const [d, setD] = useState(0);
  const [dd, setDD] = useState(0);
  const [h, setH] = useState(0);
  const [hh, setHH] = useState(0);
  const [m, setM] = useState(0);
  const [mm, setMM] = useState(0);
  const [s, setS] = useState(0);
  const [ss, setSS] = useState(0);
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
      setS(0);
      setSS(0);
      setM(0);
      setMM(0);
      setH(0);
      setHH(0);
      setD(0);
      setDD(0);
      return;
    }
    //计算倒计时
    const durationTime = targetTime - nowTime;
    const day = (durationTime / 86400) | 0;
    const hourTime = durationTime % 86400;
    const hour = (hourTime / 3600) | 0;
    const minuteTime = hourTime % 3600;
    const minute = (minuteTime / 60) | 0;
    const secondTime = minuteTime % 60;
    const second = secondTime | 0;
    //赋值
    setD((day / 10) | 0);
    setDD(day % 10);
    setH((hour / 10) | 0);
    setHH(hour % 10);
    setM((minute / 10) | 0);
    setMM(minute % 10);
    setS((second / 10) | 0);
    setSS(second % 10);
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
    //倒计时未开始，定时器关闭
    if (!forceStart && !isTimeStart) {
      setInterval(undefined);
      return;
    }
    //倒计时开始，根据视窗开关定时器
    if (inViewPort && !isTimeEnd) {
      setInterval(3000);
      caculateTime();
    } else {
      setInterval(undefined);
    }
  }, [caculateTime, inViewPort, isTimeEnd, forceStart]);

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
    s,
    ss,
    isTimeEnd,
    isTimeStart,
  };
}
