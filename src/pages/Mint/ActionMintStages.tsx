import { useState } from "react";
import Collspan from "../components/Collspan";

const options = [
  {
    title: "Stage One",
    labels: ["mint out"],
  },
  {
    title: "Stage Two",
    labels: ["MAX 5 TOKENS• Price xx◎"],
  },
  {
    title: "Stage Three",
    labels: ["01d", "12h", "29m"],
  },
];

export default function ActionMintStages() {
  const [index, setIndex] = useState<number>(1);
  return (
    <Collspan title="Mint Stages">
      <div className="mint-stages">
        {options.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className={"item" + (index === itemIndex ? " on" : "")}
              onClick={() => setIndex(itemIndex)}
            >
              <div className="title">{item.title}</div>
              <div className="labels">
                {item.labels.map((label) => {
                  return (
                    <div key={label} className="label">
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Collspan>
  );
}
