import { useState } from "react";
import Collspan from "../../components/Collspan";

const options = [
    {
        title: "Alpha",
        labels: ["Mint Out"],
    },
    {
        title: "Beta",
        labels: ["MAX 5 TOKENS•Price 0.25ETH"],
    },
    {
        title: "IDO",
        labels: ["01D", "12H", "29M"],
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
                            className={
                                "item" +
                                (index === itemIndex
                                    ? " current"
                                    : index > itemIndex
                                    ? " off"
                                    : " on")
                            }
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
