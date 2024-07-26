import { useEffect, useState } from "react";
import "./index.scss";
import Empty from "./Empty";
import { OrderIcon, OrderItem, Status } from "./Config";
import { Button } from "antd";
import CusModal from "@/pages/components/CusModal";
import { useBoolean } from "ahooks";

export default function Order() {
    const [list, setList] = useState<OrderItem[]>([]);

    useEffect(() => {
        setList([
            {
                id: 111,
                hash: "xxxx",
                status: 0,
                wrongReason: "Discrepancies in payment amounts",
                tiers: "Tiers One",
                anyText: "123456",
                price: 0.25,
                quantities: 2,
            },
            {
                id: 111,
                hash: "xxxx",
                status: 1,
                wrongReason: "Discrepancies in payment amounts",
                tiers: "Tiers One",
                anyText: "123456",
                price: 0.25,
                quantities: 2,
            },
            {
                id: 111,
                hash: "xxxx",
                status: 2,
                wrongReason: "Discrepancies in payment amounts",
                tiers: "Tiers One",
                anyText: "123456",
                price: 0.25,
                quantities: 2,
            },
            {
                id: 111,
                hash: "xxxx",
                status: 3,
                wrongReason: "Discrepancies in payment amounts",
                tiers: "Tiers One",
                anyText: "123456",
                price: 0.25,
                quantities: 2,
            },
            {
                id: 111,
                hash: "xxxx",
                status: 4,
                wrongReason: "Discrepancies in payment amounts",
                tiers: "Tiers One",
                anyText: "123456",
                price: 0.25,
                quantities: 2,
            },
            {
                id: 111,
                hash: "xxxx",
                status: 5,
                wrongReason: "Discrepancies in payment amounts",
                tiers: "Tiers One",
                anyText: "123456",
                price: 0.25,
                quantities: 2,
            },
        ]);
    }, []);

    if (list.length === 0) {
        return <Empty />;
    }
    return (
        <div className="mint-order">
            {list.map((item, index) => {
                return <Item item={item} key={index} />;
            })}
        </div>
    );
}

function Item({ item }: { item: OrderItem }) {
    const [open, setOpen] = useBoolean(false);
    return (
        <div className="item">
            <div className="title">
                <div className="left">
                    {OrderIcon[item.status]}
                    <span>{Status[item.status]}</span>
                </div>
                {item.status === Status["To be Paid"] && (
                    <div className="right confirm" onClick={setOpen.setTrue}>
                        <span>I've paid, but the status hasn't changed</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="24"
                                height="24"
                                rx="12"
                                fill="#171717"
                            />
                            <path
                                d="M9 9.81525C9 8.26043 10.3431 7 12 7C13.6569 7 15 8.26043 15 9.81525C15 11.3701 13.6569 12.6305 12 12.6305V15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinejoin="bevel"
                            />
                            <path
                                d="M11 18H13"
                                stroke="white"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                )}
                {item.status === Status["Payment exceptions"] && (
                    <div className="right error">
                        <span>{item.wrongReason}</span>
                    </div>
                )}
            </div>
            <div className="content">
                <div className="content-item">
                    <div className="label">Order</div>
                    <div className="value">{item.id}</div>
                </div>
                <div className="content-item">
                    <div className="label">Tiers</div>
                    <div className="value">{item.tiers}</div>
                </div>
                <div className="content-item">
                    <div className="label">Any Text</div>
                    <div className="value">{item.anyText}</div>
                </div>
                {item.status !== Status["To be Paid"] &&
                    item.status !== Status.Canceled && (
                        <div className="content-item">
                            <div className="label">Transaction hash</div>
                            <div className="value">{item.hash}</div>
                        </div>
                    )}
                <div className="content-item">
                    <div className="label">Price</div>
                    <div className="value">{item.price} ETH</div>
                </div>
                <div className="content-item">
                    <div className="label">Quantities</div>
                    <div className="value">{item.quantities}</div>
                </div>
            </div>
            <div className="total">
                <div className="label">Total</div>
                <div className="value">${item.price * item.quantities} ETH</div>
            </div>
            {item.status === Status["To be Paid"] && (
                <div className="action">
                    <Button type="primary" ghost className="cancel">
                        Cancel Order
                    </Button>
                    <Button type="primary" className="pay">
                        <div>Pay</div>
                        <div className="time">( Time left to pay: 15:12 )</div>
                    </Button>
                </div>
            )}
            {item.status === Status["To be Paid"] && (
                <div className="tip">
                    * There is a delay in on-chain payment, please don't get
                    stuck in the last 1 minute to pay!
                </div>
            )}
            {item.status === Status["To be Paid"] && (
                <CusModal
                    open={open}
                    onCancel={setOpen.setFalse}
                    className="mint-order-modal"
                >
                    <div className="order">{item.id}</div>
                    <div className="input">
                        <input placeholder="Enter the transaction hash" />
                    </div>
                    <div className="action">
                        <Button type="primary" ghost className="cancel">
                            Cancel
                        </Button>
                        <Button type="primary">Confirm</Button>
                    </div>
                </CusModal>
            )}
        </div>
    );
}
