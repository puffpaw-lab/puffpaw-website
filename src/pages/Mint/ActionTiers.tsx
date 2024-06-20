import { useState } from "react";
import Collspan from "../components/Collspan";

const options = [
  {
    name: "tier one",
    value: 0.25,
    symbol: "ETH",
  },
  {
    name: "tier two",
    value: 0.45,
    symbol: "ETH",
  },
  {
    name: "tier three",
    value: 0.5,
    symbol: "ETH",
  },
  {
    name: "tier five",
    value: 0.6,
    symbol: "ETH",
  },
  {
    name: "tier six",
    value: 0.65,
    symbol: "ETH",
  },
  {
    name: "tier seven",
    value: 1,
    symbol: "ETH",
  },
];

export default function ActionTiers() {
  const [index, setIndex] = useState(1);

  return (
    <Collspan title="Tiers">
      <div className="mint-tiers">
        {options.map((item, itemIndex) => {
          return (
            <div
              key={item.name}
              className={"item" + (index === itemIndex ? " on" : "")}
              onClick={() => {
                setIndex(itemIndex);
              }}
            >
              <span>{item.name}</span>
              <span>
                {/* {item.value} {item.symbol} */}
                xx {item.symbol}
              </span>
            </div>
          );
        })}
      </div>
    </Collspan>
  );
}
