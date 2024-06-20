import { Link } from "react-router-dom";
import teamJson from "./teamJson";
import TheTeamBG from "@/assets/the-team-bg.svg";

/**队伍成员 */
export default function Team() {
  return (
    <div className="main-team">
      <div className="bg">
        <img alt="" src={TheTeamBG} />
      </div>
      <div className="team">
        <div className="label">
          <div className="title">The Team</div>
          <div className="tip">
            As a leader in Web3 and vaping culture, we look forward to
            collaborating with the Korea-focused community.
          </div>
        </div>
        <div className="content">
          {teamJson.map((item, index) => (
            <div className="item" key={index}>
              <div />
              <div className="item-icon">
                <img alt="" src={item.icon} />
              </div>
              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-role">{item.role}</div>
              </div>
              <div className="item-description">{item.description}</div>
              <div className="item-links">
                {item.links.map((link, linkItem) => {
                  return (
                    <Link key={linkItem} to={link.url} target="_blank">
                      <img alt="" src={link.icon} />
                    </Link>
                  );
                })}
              </div>
              <div />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
