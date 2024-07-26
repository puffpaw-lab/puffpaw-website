import { Link, useLocation } from "react-router-dom";
import { DiscordIcon, HeaderIcon, TwitterIcon } from "../Icons";
import "./index.scss";

export default function Header() {
    const { pathname } = useLocation();

    return (
        <div className="header">
            <div className="header-content">
                <div className="left">
                    <HeaderIcon />
                    <div className="menu">
                        <Link
                            className={pathname === "/mint" ? "on" : ""}
                            to="/mint"
                        >
                            Home
                        </Link>
                        <Link
                            className={pathname === "/mint/order" ? "on" : ""}
                            to="/mint/order"
                        >
                            My Order
                        </Link>
                        <Link
                            className={pathname === "/mint/nodes" ? "on" : ""}
                            to="/mint/nodes"
                        >
                            My Nodes
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <button>Connect Wallet</button>
                    <div className="links">
                        <Link to={import.meta.env.VITE_TWITTER}>
                            <TwitterIcon />
                        </Link>
                        <Link to={import.meta.env.VITE_DISCORD}>
                            <DiscordIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
