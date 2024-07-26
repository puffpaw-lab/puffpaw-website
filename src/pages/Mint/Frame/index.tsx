import BetterScrollProvider from "@/utils/provider/BetterScrollProvider";
import Header from "../Header";
import "./index.scss";
import { ThirdwebProvider } from "thirdweb/react";
import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";

export default function Mint() {
    return (
        <ThirdwebProvider>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#ff4c33",
                        colorPrimaryText: "#f5f5f7",
                    },
                }}
            >
                <div className="mint-wrapper">
                    <Header />
                    <div className="mint">
                        <BetterScrollProvider>
                            <div className="mint-wraper">
                                <Outlet />
                            </div>
                        </BetterScrollProvider>
                    </div>
                </div>
            </ConfigProvider>
        </ThirdwebProvider>
    );
}
