import { useState } from "react";
import PartnersJson from "./partnersJson";

/**合作伙伴 */
export default function Partners() {
  const [hoverIndex, setHoverIndex] = useState<number>();

  return (
    <div className="main-partners">
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
                  <div
                    className="description"
                    style={
                      item.fontSize
                        ? {
                            fontSize: item.fontSize,
                          }
                        : undefined
                    }
                  >
                    {item.companyDecription}
                  </div>
                </div>
                <div className="front">{item.companyIcon}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="info">
        <div className="title">Our partners</div>
        <div className="tip">
          As a leader in Web3 and vaping culture, we look forward to
          collaborating with the Korea-focused community.
        </div>
      </div>
    </div>
  );
}
