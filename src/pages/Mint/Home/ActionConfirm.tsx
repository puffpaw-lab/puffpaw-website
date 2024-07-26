import { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const client = {
    clientId: import.meta.env.VITE_CLIENT_ID,
    secretKey: import.meta.env.VITE_SECRETE_KEY,
};
const wallets = [createWallet("io.metamask"), createWallet("app.phantom")];

export default function ActionConfirm() {
    const [total] = useState(600); //总数
    const [minted] = useState(493); //已经mint的数量

    const [quantity, setQuantity] = useState(4); //数量

    return (
        <div className="mint-confirm">
            <div className="total">
                <div className="state">live now</div>
                <div className="progress">
                    <div className="title">
                        <span className="left">Total Minted</span>
                        <span className="right">
                            <mark>{Math.floor((minted / total) * 100)}%</mark>(
                            {minted}/{total})
                        </span>
                    </div>
                    <div className="progress-content">
                        <div
                            className="progress-bar"
                            style={{
                                width: Math.floor((minted / total) * 100) + "%",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="price">
                <div className="title">Price</div>
                <div className="content">
                    <span>0.45 ETH</span>
                    <small>($45.33)</small>
                </div>
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
                        <svg
                            viewBox="0 0 20 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 1L5.50079e-07 1"
                                strokeWidth="2"
                                strokeLinejoin="bevel"
                            />
                        </svg>
                    </button>
                    <div>{quantity}</div>
                    <button
                        onClick={() => {
                            setQuantity(quantity + 1);
                        }}
                    >
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 10L2 10"
                                strokeWidth="2"
                                strokeLinejoin="bevel"
                            />
                            <path
                                d="M10 18L10 2"
                                strokeWidth="2"
                                strokeLinejoin="bevel"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="text">
                <div className="title">Any Text Field</div>
                <input placeholder="Enter Email ID / Name / ETC" />
            </div>
            <div className="connect">
                <label className="check">
                    <input type="checkbox" />
                    Terms and Conditions
                </label>
                <ConnectButton
                    client={client}
                    theme={"dark"}
                    connectModal={{ size: "compact" }}
                    wallets={wallets}
                ></ConnectButton>
            </div>
        </div>
    );
}
