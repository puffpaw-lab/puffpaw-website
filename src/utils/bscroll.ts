import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import NestedScroll from "@better-scroll/nested-scroll";

//注册插件
BScroll.use(MouseWheel).use(ScrollBar).use(NestedScroll);

export default BScroll;
