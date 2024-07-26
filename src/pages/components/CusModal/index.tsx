import { Modal } from "antd";
import "./index.scss";

export default function CusModal({
    className,
    open,
    onCancel,
    children,
}: {
    className?: string;
    open: boolean;
    onCancel: () => void;
    children: React.ReactNode;
}) {
    return (
        <Modal
            closable={false}
            className={"cus-modal" + (className ? ` ${className}` : "")}
            open={open}
            styles={{
                mask: {
                    backgroundColor: "rgba(0,0,0,0.8)",
                },
            }}
            footer={null}
            maskClosable={false}
            centered={true}
            width={"35.625rem"}
        >
            <div className="close">
                <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={onCancel}
                >
                    <path
                        d="M35.5566 12L12.0002 35.5565"
                        stroke="#CECECE"
                        strokeWidth="4"
                    />
                    <path
                        d="M35.5566 35.5566L12.0002 12.0002"
                        stroke="#CECECE"
                        strokeWidth="4"
                    />
                </svg>
            </div>
            {children}
        </Modal>
    );
}
