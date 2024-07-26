import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import NestedScroll from "@better-scroll/nested-scroll";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";

//注册插件
BScroll.use(MouseWheel)
  .use(ScrollBar)
  .use(NestedScroll)
  .use(ObserveDOM)
  .use(ObserveImage);

export default BScroll;
