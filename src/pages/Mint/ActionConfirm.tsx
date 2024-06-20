import { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const client = {
  clientId: import.meta.env.VITE_CLIENT_ID,
  secretKey: import.meta.env.VITE_SECRETE_KEY,
};
console.log(client);
const wallets = [createWallet("io.metamask"), createWallet("app.phantom")];

export default function ActionConfirm({ theme }: { theme: string }) {
  const [total] = useState(600); //总数
  const [minted] = useState(493); //已经mint的数量

  const [quantity, setQuantity] = useState(4); //数量

  return (
    <div className="mint-confirm">
      <div className="total">
        <div className="state">live now</div>
        <div className="progress">
          <div className="title">
            <span>Total Minted</span>
            <span>
              <mark>{Math.floor((minted / total) * 100)}%</mark>({minted}/
              {total})
            </span>
          </div>
          <div className="progress-content">
            <div
              className="progress-bar"
              style={{ width: Math.floor((minted / total) * 100) + "%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="price">
        <div className="title">Price</div>
        <div className="content">
          <span>XX ETH</span>
          <small>($xx.xx)</small>
        </div>
      </div>
      <div className="fee">
        <div className="title">
          <span>Mint fee</span>
          <span>XX SOL</span>
        </div>
        <div className="tip">Priority fee (Standard)</div>
      </div>
      <div className="quantity">
        <div className="title">Quantity Field</div>
        <div className="content">
          <button
            disabled={quantity < 1}
            onClick={() => {
              setQuantity(quantity - 1);
            }}
          >
            -
          </button>
          <div>{quantity}</div>
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="text">
        <div className="title">Any Text Field</div>
        <input placeholder="Enter Email ID / Name / ETC" />
      </div>
      <label className="check">
        <input type="checkbox" />
        Terms and Conditions
      </label>
      <ConnectButton
        client={client}
        theme={theme === "light" ? "light" : "dark"}
        connectModal={{ size: "compact" }}
        wallets={wallets}
      ></ConnectButton>
    </div>
  );
}
