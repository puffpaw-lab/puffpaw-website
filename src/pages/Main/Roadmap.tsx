import { useEffect, useRef, useState } from "react";
import RoadmapJson from "./roadmaoJson";
import { useSize } from "ahooks";
import CloudLeft1 from "@/assets/roadmap/cl1.png";
import CloudLeft2 from "@/assets/roadmap/cl2.png";
import CloudLeft3 from "@/assets/roadmap/cl3.png";
import CloudLeft4 from "@/assets/roadmap/cl4.png";
import CloudLeft5 from "@/assets/roadmap/cl5.png";
import CloudRight1 from "@/assets/roadmap/cr1.png";
import CloudRight2 from "@/assets/roadmap/cr2.png";
import CloudRight3 from "@/assets/roadmap/cr3.png";
import CloudRight4 from "@/assets/roadmap/cr4.png";
import DynamicCloud1 from "@/assets/roadmap/dc1.png";
import DynamicCloud2 from "@/assets/roadmap/dc2.png";
import useIsPhone from "@/utils/hooks/useIsPhone";

export default function Roadmap() {
  const listRef = useRef<HTMLDivElement>(null);
  const [step] = useState(4); // 当前选中的index
  const [rodHeight, setRodHeight] = useState(0); // rod的高度
  const size = useSize(document.querySelector("body"));
  const isPhone = useIsPhone();

  useEffect(() => {
    const listRect = listRef.current?.getBoundingClientRect();
    const stepRect = document
      .querySelector(`#roadmap-item-id-${step}`)
      ?.getBoundingClientRect();
    if (listRect && stepRect) {
      setRodHeight(listRect.bottom - stepRect.bottom + stepRect.height + 30);
    }
  }, [step, size]);

  return (
    <div className="main-roadmap">
      {isPhone || (
        <div className="clouds">
          <img className="cl1" alt="" src={CloudLeft1} />
          <img className="cl2" alt="" src={CloudLeft2} />
          <img className="cl3" alt="" src={CloudLeft3} />
          <img className="cl4" alt="" src={CloudLeft4} />
          <img className="cl5" alt="" src={CloudLeft5} />
          <img className="cr1" alt="" src={CloudRight1} />
          <img className="cr2" alt="" src={CloudRight2} />
          <img className="cr3" alt="" src={CloudRight3} />
          <img className="cr4" alt="" src={CloudRight4} />
          <img className="dc1" alt="" src={DynamicCloud1} />
          <img className="dc2" alt="" src={DynamicCloud2} />
        </div>
      )}
      <div ref={listRef} className="roadmap-list">
        <div className="roadmap-rod">
          <div
            className="progress"
            style={{
              height: rodHeight,
            }}
          ></div>
        </div>
        {RoadmapJson.map((item, index) => {
          return (
            <div
              id={"roadmap-item-id-" + index}
              className={
                "roadmap-item" +
                (step === index ? " half-on" : "") +
                (step < index ? " on" : "")
              }
              key={index}
            >
              <div className="item-content">
                <div className="label">
                  <svg
                    className="label-back"
                    viewBox="0 0 223 117"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="223"
                      height="100"
                      rx="20"
                      fill={step <= index ? "#FF4C33" : "#D9DCE0"}
                    />
                    <path
                      d="M80.7632 90.6268C74.1153 85.1186 66.4838 80 57.8504 80H0V117H329V80H156.381C147.748 80 140.116 85.1186 133.468 90.6268C126.424 96.4637 117.205 100 107.116 100C97.0263 100 87.8078 96.4637 80.7632 90.6268Z"
                      fill="#F5F5F7"
                    />
                  </svg>
                  <div className="label-content">
                    <div className="icon">{item.icon}</div>
                    <div className={"time" + (step > index ? " off" : "")}>
                      {item.time}
                    </div>
                  </div>
                </div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="info">
        <div className="title">Our Roadmap</div>
        <div className="tip">
          The thought behind the work
          <br /> and the work behind the thought.
        </div>
      </div>
    </div>
  );
}
