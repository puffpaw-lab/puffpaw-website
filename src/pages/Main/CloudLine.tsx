import CloudLineSvg from "@/assets/cloud-line.svg";
import SmokePng from "@/assets/smoke.png";

/**云朵分割线 */
export default function CloudLine() {
  return (
    <div className="main-cloud-line">
      <div className="content">
        <img className="bg" alt="" src={CloudLineSvg} />
        <img className="bg" alt="" src={CloudLineSvg} />
        <img className="bg" alt="" src={CloudLineSvg} />
      </div>
      <img className="smoke" alt="" src={SmokePng} />
    </div>
  );
}
