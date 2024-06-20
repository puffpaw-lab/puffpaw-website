//部分代码来源于 amfe-flexible 代码
// 大致调整核心为：原始设计图字体大小 100%，如非特别要求，适配之后最小字体大小不低于 8px
// 介于大部分网页标准字体大小为 16px 或 14px，选择 62.5% 为最小值
import { MediaWidth } from "../theme/themeConfig";

/**
 * 页面断点，一个自适应的区间，区间中大小保持100%恒定，区间之外则按比例缩放
 * 最终比例最小值 62.5%
 * [最小值，最大值]
 */
type BreakPoint = [number, number];
/**
 * 多个断点会按顺序依次排序，
 */
type BreakPoints = BreakPoint[];

const docEl = window.document.documentElement;
const breakPoints: BreakPoints = [
  [MediaWidth.xs, MediaWidth.sm],
  [MediaWidth.mxl, MediaWidth.maxl],
];

// 调整全局字体大小
// 此函数需要自己根据项目需求进行调整
// 大致调整核心为：原始设计图字体大小100%，如非特别要求，适配之后最小字体大小不低于8px
function setRemUnit() {
  let rem = 100;
  for (let i = breakPoints.length - 1; i >= 0; i--) {
    if (docEl.clientWidth > breakPoints[i][1]) {
      // 放大
      rem = (docEl.clientWidth * 100) / breakPoints[i][1];
      break;
    } else if (
      docEl.clientWidth <= breakPoints[i][1] &&
      docEl.clientWidth >= breakPoints[i][0]
    ) {
      // 保持比例
      rem = 100;
      break;
    } else {
      //判断是否存在下一阶段
      if (breakPoints[i - 1] && docEl.clientWidth <= breakPoints[i - 1][1]) {
        rem = 100;
        continue;
      }
      // 缩小
      rem = (docEl.clientWidth * 100) / breakPoints[i][0];
      // 小于预设直接进入下一阶段
      if (rem < 62.5) {
        rem = 62.5;
        continue;
      }
      break;
    }
  }
  docEl.style.fontSize = rem + "%";
}

// 执行自适应
export default function flexible() {
  //入参判断
  if (
    !Array.isArray(breakPoints) ||
    !breakPoints.every(
      (item) =>
        Array.isArray(item) && item.length === 2 && item.every(Number.isFinite)
    )
  ) {
    console.error("断点格式错误 breakPoints：", breakPoints);
    return;
  }
  if (breakPoints.length === 0) {
    console.error("断点不能为空数组");
    return;
  }

  // init
  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", function () {
    setRemUnit();
  });
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  const dpr = window.devicePixelRatio || 1;
  if (dpr >= 2) {
    const fakeBody = document.createElement("body");
    const testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
}
