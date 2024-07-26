import BetterScrollProvider from "@/utils/provider/BetterScrollProvider";
import { BScrollConstructor } from "@better-scroll/core/dist/types/BScroll";
import Anchor from "./Anchor";
import "./index.scss";
import Puffpaw from "./Puffpaw";
import Clock from "./Clock";
import CloudLine from "./CloudLine";
import Description from "./Description";
import Tweets from "./Tweets";
import { useEffect, useState } from "react";
import Partners from "./Partners";
// import Team from "./Team";
import Roadmap from "./Roadmap";
import Top from "./Top";
import { useLocation } from "react-router-dom";
import { useDebounceFn, useSize, useToggle } from "ahooks";
import Title from "./Title";

export default function Main() {
  const { key } = useLocation();
  const [visible, setVisible] = useToggle<"hidden", "visible">(
    "hidden",
    "visible"
  );
  const size = useSize(document.querySelector("body"));
  const [innderHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, [size]);

  const { run: onload } = useDebounceFn(() => {
    if (window.bs) {
      (window.bs as BScrollConstructor).refresh();
      (window.bs as BScrollConstructor).scrollToElement(
        ".main-bottom-space",
        0,
        false,
        false
      );
      setVisible.setRight();
    }
  });

  //初次加载跳转到页面底部
  useEffect(() => {
    setTimeout(onload);
  }, [key]);

  return (
    <div
      className="main-wrapper"
      style={{
        height: innderHeight,
      }}
    >
      <BetterScrollProvider>
        <div
          className="main"
          style={{
            visibility: visible,
          }}
        >
          <div className="main-bottom-space"></div>
          <Puffpaw />
          <Clock />
          <CloudLine />
          <Description />
          <Tweets />
          <Partners />
          {/* <Team /> */}
          <Roadmap />
          <Top />
          <Title />
        </div>
      </BetterScrollProvider>
      <Anchor />
    </div>
  );
}
