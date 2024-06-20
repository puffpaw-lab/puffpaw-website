import { useState } from "react";
import PartnersJson from "./partnersJson";

/**合作伙伴 */
export default function Partners() {
  const [hoverIndex, setHoverIndex] = useState<number>();

  return (
    <div className="main-partners">
      <div className="title">Our partners</div>
      <div className="tip">
        As a leader in Web3 and vaping culture, we look forward to collaborating
        with the Korea-focused community.
      </div>
      <div className="content">
        {PartnersJson.map((item, index) => {
          return (
            <div
              key={index}
              className="item-content"
              onMouseOver={() => {
                setHoverIndex(index);
              }}
              onMouseLeave={() => {
                setHoverIndex(undefined);
              }}
            >
              <div
                key={index}
                className={"item" + (hoverIndex === index ? " hover" : "")}
              >
                <div className="back">
                  <div className="description">{item.companyDecription}</div>
                </div>
                <div className="front">
                  <div className="name">{item.companyName}</div>
                  <img className="icon" alt="" src={item.companyIcon} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
