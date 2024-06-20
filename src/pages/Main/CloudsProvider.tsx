import { useInViewport, useInterval, useMemoizedFn } from "ahooks";
import Cloud from "./Cloud";
import { useEffect, useRef, useState } from "react";

/**背景云 */
export default function CloudsProvider({
  cloudNum = 8,
  cloudColor = "#E6EBEC1A",
  cloudInvterval = 6500,
  children,
}: {
  cloudNum?: number; //云朵数量
  cloudColor?: `#${string}`; //云朵颜色
  cloudInvterval?: number; //云朵刷新时间
  children: JSX.Element;
}) {
  const ref = useRef(null);
  const [inViewPort] = useInViewport(ref);
  const [interval, setInterval] = useState<number>();

  const [clouds, setClouds] = useState<{ index: number; value: JSX.Element }[]>(
    []
  ); //背景云朵动画

  const generalClouds = useMemoizedFn(() => {
    //生成云朵 删除最早的部分云朵，新增部分云朵，实现云朵位置变换
    const max = cloudNum; //最大云朵数
    const delNum = (cloudNum >> 1) - 1 < 1 ? 1 : (cloudNum >> 1) - 1; //删除的云朵数
    const addNum = cloudNum >> 1; //新增的云朵数
    const newClouds = clouds.slice(delNum); //删除最早的云朵，实现云朵位置变换
    if (newClouds.length < max) {
      const length = newClouds.length;
      const lastKey = Number(newClouds[length - 1]?.index || 0);
      for (let i = 0; i < addNum; i++) {
        const positionX =
          Math.random() < 0.5
            ? { left: `${Math.random() * 15}vw` }
            : { right: `${Math.random() * 15}vw` };
        newClouds.push({
          index: lastKey + i + 1,
          value: (
            <div
              key={new Date().getTime() + "-" + i}
              className="bg-cloud"
              style={{
                top: `${Math.random() * 100}%`,
                ...positionX,
              }}
            >
              <Cloud color={cloudColor} />
            </div>
          ),
        });
      }
    }
    setClouds(newClouds);
  });

  /**监听可视化 */
  useEffect(() => {
    if (inViewPort) {
      setInterval(cloudInvterval);
      generalClouds();
    } else {
      setInterval(undefined);
    }
  }, [inViewPort, generalClouds, cloudInvterval]);

  /**动态生成背景云朵 */
  useInterval(() => {
    generalClouds();
  }, interval);

  return (
    <div className="main-clouds" ref={ref}>
      {clouds.map((item) => item.value)}
      {children}
    </div>
  );
}
