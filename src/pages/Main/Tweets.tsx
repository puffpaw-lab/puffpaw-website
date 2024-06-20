import { useSize } from "ahooks";
import { Carousel } from "antd";
import { useEffect, useRef, useState } from "react";
import tweetsJson from "./tweetsJson";
import { CarouselRef } from "antd/es/carousel";
import BGSvg from "@/assets/select-tweets-bg.svg";
import { Link } from "react-router-dom";

export default function Tweets() {
  const carousel = useRef<CarouselRef>(null);
  const tweets = useRef<HTMLDivElement>(null);

  //根据屏幕宽度展示个数
  const size = useSize(tweets);
  const [slidesToShow, setSlidesToShow] = useState(
    Math.floor((size?.width || 400) / 400)
  );
  useEffect(() => {
    setSlidesToShow(Math.floor((size?.width || 400) / 400));
  }, [size]);

  return (
    <div className="main-tweets" ref={tweets}>
      <div className="bg">
        <img alt="" src={BGSvg} />
      </div>
      <div className="title">Select Tweets</div>
      <div className="content">
        <Carousel
          ref={carousel}
          dots={false}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          infinite={true}
          centerMode={true}
          autoplay={true}
          pauseOnHover={false}
        >
          {tweetsJson.map((item, index) => {
            return (
              <div key={index} className="item">
                <div className="item-content">
                  <img alt="" src={item.icon} />
                  <div className="text">{item.text}</div>
                  <div className="name">
                    <div className="name-text">{item.name}</div>
                    <div className="name-link">
                      <Link to={item.link}>{item.linkName}</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="action">
        <button>Follow The Twitter</button>
      </div>
    </div>
  );
}
