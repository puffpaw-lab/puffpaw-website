import BetterScrollProvider from "@/utils/provider/BetterScrollProvider";
import { BScrollConstructor } from "@better-scroll/core/dist/types/BScroll";
import Anchor from "./Anchor";
import "./index.scss";
import Puffpaw from "./Puffpaw";
import Clock from "./Clock";
import CloudLine from "./CloudLine";
import Description from "./Description";
import Tweets from "./Tweets";
import { useEffect } from "react";
import Partners from "./Partners";
import Team from "./Team";
import Roadmap from "./Roadmap";
import Top from "./Top";
import CloudsProvider from "./CloudsProvider";
import { useLocation } from "react-router-dom";

export default function Main() {
  const { key } = useLocation();

  //初次加载跳转到页面底部
  useEffect(() => {
    const onload = () => {
      if (window.bs) {
        (window.bs as BScrollConstructor).scrollToElement(
          ".main-bottom-space",
          0,
          false,
          false
        );
      }
    };
    setTimeout(onload, 0);
  }, [key]);

  return (
    <div className="main-wrapper">
      <BetterScrollProvider>
        <div className="main">
          <div className="main-bottom-space"></div>
          <Puffpaw />
          <Clock />
          <CloudLine />
          <CloudsProvider>
            <Description />
          </CloudsProvider>
          <Tweets />
          <CloudsProvider cloudNum={3}>
            <Partners />
          </CloudsProvider>
          <Team />
          <CloudsProvider>
            <CloudsProvider
              cloudNum={2}
              cloudColor="#F5F5F7"
              cloudInvterval={9500}
            >
              <Roadmap />
            </CloudsProvider>
          </CloudsProvider>
          <Top />
        </div>
      </BetterScrollProvider>
      <Anchor />
    </div>
  );
}
