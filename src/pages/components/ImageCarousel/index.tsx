import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useEffect, useRef } from "react";

/**图片循环播放 */
export default function ImageCarousel({
  imageList,
  flag,
}: {
  imageList: string[];
  flag: number;
}) {
  const ref = useRef<CarouselRef>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.prev();
    }
  }, [flag]);
  return (
    <Carousel ref={ref} vertical={true} dots={false} infinite={true}>
      {imageList.map((item) => {
        return (
          <div key={item}>
            <img
              alt=""
              src={item}
              style={{
                margin: "0 auto",
                width: "9.375rem",
                height: "9.375rem",
              }}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
