import BetterScrollProvider from "@/utils/provider/BetterScrollProvider";
import Action from "./Action";
import Header from "./Header";
import Info from "./Info";
import "./index.scss";
import { ThirdwebProvider } from "thirdweb/react";
import { useEffect, useState } from "react";

export default function Mint() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThirdwebProvider>
      <div className="mint-wrapper">
        <Header theme={theme} setTheme={setTheme} />
        <div className="mint">
          <BetterScrollProvider>
            <div className="mint-scroll">
              <div className="mint-content">
                <Info />
                <Action theme={theme} />
              </div>
            </div>
          </BetterScrollProvider>
        </div>
      </div>
    </ThirdwebProvider>
  );
}
