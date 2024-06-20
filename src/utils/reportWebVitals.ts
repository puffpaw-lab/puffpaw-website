const printLog = (info: { name: string; value: number }) => {
  switch (info.name) {
    case "LCP":
      console.info(
        "%c 加载性能 < 2500ms",
        `color:${info.value <= 2500 ? "green" : "red"}`,
        info
      );
      break;
    case "FID":
      console.info(
        "%c 可交互性 < 100ms",
        `color:${info.value <= 100 ? "green" : "red"}`,
        info
      );
      break;
    case "CLS":
      console.info(
        "%c 视觉稳定性 < 0.1",
        `color:${info.value <= 0.1 ? "green" : "red"}`,
        info
      );
      break;
    case "FCP":
      console.info(
        "%c 首次内容绘制 < 1800ms",
        `color:${info.value <= 1800 ? "green" : "red"}`,
        info
      );
      break;
    case "TTFB":
      console.info(
        "%c 第一字节时间 < 800ms",
        `color:${info.value <= 800 ? "green" : "red"}`,
        info
      );
      break;
    default:
      break;
  }
};

const reportWebVitals = () => {
  if (import.meta.env.MODE === "development") {
    import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(printLog);
      onFID(printLog);
      onFCP(printLog);
      onLCP(printLog);
      onTTFB(printLog);
    });
  }
};

export default reportWebVitals;
