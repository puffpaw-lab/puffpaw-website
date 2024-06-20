import { useEffect, useRef, useState } from "react";
import RoadmapJson from "./roadmaoJson";

export default function Roadmap() {
  const listRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(3); // 当前选中的index
  const [rodHeight, setRodHeight] = useState(0); // rod的高度

  useEffect(() => {
    const listRect = listRef.current?.getBoundingClientRect();
    const stepRect = document
      .querySelector(`#roadmap-item-id-${step}`)
      ?.getBoundingClientRect();
    if (listRect && stepRect) {
      setRodHeight(listRect.bottom - stepRect.bottom + stepRect.height / 2);
    }
  }, [step]);

  return (
    <div className="main-roadmap">
      <div
        ref={listRef}
        className="roadmap-list"
        style={{
          gridTemplateRows: `repeat(${
            RoadmapJson.length - 2
          }, 1fr) 12.5rem 15.625rem`,
        }}
      >
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
              className={"roadmap-item" + (step === index ? " on" : "")}
              key={index}
              onClick={() => {
                setStep(index);
              }}
            >
              <div className="item-content">
                <div className={"icon" + (step === index ? " on" : "")}></div>
                <div className="time">{item.time}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="info">
        <div className="title">Our Roadmap</div>
        <div className="tip">
          The thought behind the work and the work behind the thought.
        </div>
      </div>
    </div>
  );
}
