import "./index.scss";
import PreSaleSvg from "./PreSaleSvg";

const data = [
    {
        key: 1,
        name: "Alpha",
        count: 1,
    },
    {
        key: 2,
        name: "Alpha",
        count: 1,
    },
    {
        key: 3,
        name: "Alpha",
        count: 1,
    },
];

export default function Nodes() {
    return (
        <div className="mint-nodes">
            <div className="total">
                <div className="title">
                    <svg
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M27.9995 3.96777L48.8111 15.9834V40.0146L27.9995 52.0302L7.18783 40.0146L7.18783 15.9834L27.9995 3.96777Z"
                            stroke="white"
                            strokeWidth="3.11111"
                            strokeLinejoin="bevel"
                        />
                        <path
                            d="M20.1948 17.7285L22.7963 16.2266L27.9992 13.2227L33.2021 16.2266L35.8035 17.7285"
                            stroke="white"
                            strokeWidth="3.11111"
                            strokeLinejoin="bevel"
                        />
                        <path
                            d="M35.8035 37.2822L33.2021 38.7842L27.9992 41.7881L22.7963 38.7842L20.1948 37.2822"
                            stroke="white"
                            strokeWidth="3.11111"
                            strokeLinejoin="bevel"
                        />
                        <path
                            d="M15.1667 31.8886V24.4997L21.5834 31.4997V23.333"
                            stroke="white"
                            strokeWidth="3.11111"
                            strokeLinejoin="bevel"
                        />
                        <path
                            d="M32.6666 24.5H25.9001V29.1667M25.9001 32.0833V29.1667M25.9001 29.1667H32.6666"
                            stroke="white"
                            strokeWidth="3.11111"
                            strokeLinejoin="bevel"
                        />
                        <path
                            d="M33.4446 24.5H37.9168M42.389 24.5H37.9168M37.9168 24.5V31.85"
                            stroke="white"
                            strokeWidth="3.11111"
                            strokeLinejoin="bevel"
                        />
                    </svg>
                    <span>Total Nodes:3</span>
                </div>
                <div className="content">
                    {data.map((item) => {
                        return (
                            <div key={item.key} className="content-item">
                                <div className="item-title">
                                    <span>{item.name}</span>
                                    <div>T{item.key}</div>
                                </div>
                                <div className="item-content">
                                    <div className="value">{item.count}</div>
                                    <div className="label">Node Quantities</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="pre-sale">
                <PreSaleSvg />
                <div>When the pre-order period ends,</div>
                <div>please fill in your address information here</div>
            </div>
        </div>
    );
}
