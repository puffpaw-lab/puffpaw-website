// import { useRef } from "react";
// import { PuffpawSVG } from "../Icon";
// import NumChangeProvider from "../components/NumChangeProvider";
// import useTimerHook from "@/utils/hooks/useTimerHook";
// import { useMemoizedFn } from "ahooks";
// import { useNavigate } from "react-router-dom";
// import PNG1 from "@/assets/clock/1.png";
// import PNG2 from "@/assets/clock/2.png";
// import PNG3 from "@/assets/clock/3.png";
// import PNG4 from "@/assets/clock/4.png";
// import PNG5 from "@/assets/clock/5.png";
// import PNG6 from "@/assets/clock/6.png";
// import PNG7 from "@/assets/clock/7.png";
// import ImageCarousel from "../components/ImageCarousel";

// const targetTime = Math.floor(new Date().getTime() / 1000) + 20;

// import Animation from "@/assets/clock/animation.gif";
import Animation from "@/assets/clock/animation.mp4";
export default function Clock() {
  return (
    <div className="main-clock">
      <div className="clock-label">
        <div className="clock-title">
          We’re live in a bit. Get in the Puffpaw node pre-sale
        </div>
        <div className="clock-tip">
          We'll be minting phase one in a bit. Stay tuned, follow the twitter.
        </div>
      </div>
      {/* <img alt="" src={Animation} className="clock-gif" /> */}
      <video
        src={Animation}
        autoPlay
        loop
        muted
        playsInline
        className="clock-gif"
      />
    </div>
  );
}

/**倒计时 */
// export default function Clock() {
//   const ref = useRef(null);
//   const navigate = useNavigate();
//   const { d, dd, h, hh, m, mm, isTimeEnd, isTimeStart } = useTimerHook(
//     ref,
//     undefined,
//     true
//   );

//   const goMint = useMemoizedFn(() => {
//     if (isTimeEnd) {
//       navigate("/mint");
//     }
//   });

//   return (
//     <div className="main-clock" ref={ref}>
//       <div className="clock-label">
//         <div className="clock-title">
//           We’re live in a bit. Get in the Puffpaw node pre-sale
//         </div>
//         <div className="clock-tip">
//           We'll be minting phase one in a bit. Stay tuned, follow the twitter.
//         </div>
//       </div>
//       <div className="clock-content">
//         {isTimeStart ? (
//           <>
//             <div className="item">
//               <NumChangeProvider num={d} />
//               <NumChangeProvider num={dd} />d
//             </div>
//             <div className="item">
//               <NumChangeProvider num={h} />
//               <NumChangeProvider num={hh} />h
//             </div>
//             <div className="item">
//               <NumChangeProvider num={m} />
//               <NumChangeProvider num={mm} />m
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="item no-start">
//               <ImageCarousel
//                 imageList={[PNG1, PNG2, PNG3, PNG4, PNG5, PNG6, PNG2]}
//                 flag={mm}
//               />
//             </div>
//             <div className="item no-start">
//               <ImageCarousel
//                 imageList={[PNG6, PNG2, PNG1, PNG7, PNG2, PNG5]}
//                 flag={mm}
//               />
//             </div>
//             <div className="item no-start">
//               <ImageCarousel
//                 imageList={[PNG5, PNG7, PNG2, PNG6, PNG1, PNG5, PNG3, PNG2]}
//                 flag={mm}
//               />
//             </div>
//           </>
//         )}
//         <div className="action">
//           <button onClick={goMint}>
//             <span>Mint A</span>
//             <PuffpawSVG width="2.8125rem" height="2.175rem" />
//             <span>Puffpaw</span>
//           </button>
//           <span>Coming Soon</span>
//         </div>
//       </div>
//     </div>
//   );
// }
