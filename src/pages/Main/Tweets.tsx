import { memo, useRef } from "react";
import tweetsJson from "./tweetsJson";
import BGSvg from "@/assets/select-tweets-bg.svg";
import { Link } from "react-router-dom";
import { useBoolean } from "ahooks";

function Tweets() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [onTouch, setOnTouch] = useBoolean(false);

  return (
    <div className="main-tweets">
      <div className="bg">
        <img alt="" src={BGSvg} />
      </div>
      <div
        className="content-wrapper"
        ref={wrapper}
        style={{
          touchAction: "pan-y",
        }}
      >
        <div
          className={"content" + (onTouch ? " hover" : "")}
          onTouchStart={setOnTouch.setTrue}
          onTouchEnd={setOnTouch.setFalse}
        >
          {[...tweetsJson, ...tweetsJson].map((item, index) => {
            return (
              <Link
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="item"
              >
                <div className="item-content">
                  <div className="top">
                    <img alt="" src={item.icon} />
                    <div className="name">
                      <div className="name-text">
                        <span>{item.name}</span>
                        {item.marked && (
                          <svg
                            viewBox="0 0 29 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M26.7501 14C26.7272 13.1778 26.4765 12.3773 26.0246 11.6887C25.5741 11.0015 24.9403 10.4517 24.1945 10.1029C24.4783 9.33038 24.5381 8.4942 24.3726 7.68856C24.2059 6.88165 23.8165 6.13838 23.2501 5.54147C22.6519 4.97511 21.9099 4.58693 21.103 4.41893C20.2974 4.25347 19.4612 4.31329 18.6886 4.59711C18.3412 3.85002 17.7926 3.21493 17.1041 2.76438C16.4156 2.31384 15.615 2.06184 14.7916 2.04147C13.9694 2.06311 13.1714 2.31256 12.4841 2.76438C11.7968 3.2162 11.2508 3.85129 10.9059 4.59711C10.1321 4.31329 9.29337 4.25093 8.48519 4.41893C7.67701 4.58438 6.93246 4.97384 6.33428 5.54147C5.76792 6.13966 5.38101 6.8842 5.21683 7.68984C5.05137 8.49547 5.11501 9.33166 5.4001 10.1029C4.65301 10.4517 4.01664 11.0002 3.56355 11.6875C3.11046 12.3747 2.85719 13.1766 2.83301 14C2.85846 14.8235 3.11046 15.624 3.56355 16.3126C4.01664 16.9998 4.65301 17.5497 5.4001 17.8971C5.11501 18.6684 5.05137 19.5046 5.21683 20.3102C5.38228 21.1171 5.76792 21.8604 6.33301 22.4586C6.93119 23.0224 7.67446 23.4093 8.4801 23.576C9.28573 23.744 10.1219 23.6829 10.8945 23.4029C11.2432 24.1487 11.7917 24.7826 12.4803 25.2344C13.1676 25.6849 13.9694 25.9357 14.7916 25.9586C15.615 25.9382 16.4156 25.6875 17.1041 25.2369C17.7926 24.7864 18.3412 24.15 18.6886 23.4042C19.4574 23.7084 20.2999 23.7809 21.1106 23.6129C21.9201 23.4449 22.6634 23.044 23.2488 22.4586C23.8343 21.8731 24.2365 21.1298 24.4045 20.3191C24.5725 19.5084 24.4999 18.6658 24.1945 17.8971C24.9403 17.5484 25.5741 16.9998 26.0259 16.3113C26.4765 15.624 26.7272 14.8222 26.7501 14ZM13.0886 18.9L8.72446 14.5371L10.3701 12.88L13.0072 15.5171L18.6072 9.41565L20.3216 11.0015L13.0886 18.9Z"
                              fill="#198CD8"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="name-link">
                        <span>{item.linkName}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="title">Select Tweets</div>
    </div>
  );
}

const TweetsMemo = memo(Tweets);
export default TweetsMemo;
