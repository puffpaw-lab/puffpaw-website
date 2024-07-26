import CusModal from "@/pages/components/CusModal";
import { Button } from "antd";

export default function ActionModal({
    open,
    onCancel,
}: {
    open: boolean;
    onCancel: () => void;
}) {
    return (
        <CusModal className="mint-modal" open={open} onCancel={onCancel}>
            <div className="icon">
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M74.9611 31.4263C87.2807 21.4648 101.079 34.6905 93.1687 50.7055C85.3955 63.1681 76.8767 72.1078 58.9295 59.8488C65.5852 77.9174 20.6685 77.8528 23.4617 61.8375C2.06553 76.9093 -3.66616 50.3018 12.8032 44.7491C2.81774 12.6708 33.3544 26.8643 39.5877 30.0382C40.2234 30.3618 40.9849 30.1987 41.4323 29.6432C45.6857 24.3619 66.7308 0.338065 74.6973 31.3331C74.7263 31.4459 74.8705 31.4996 74.9611 31.4263Z"
                        fill="#F3F2F2"
                        stroke="#F3F2F2"
                        strokeWidth="3.27982"
                        strokeLinecap="round"
                    />
                    <path
                        d="M69.9791 78.126C65.6477 75.0871 68.5777 66.2116 76.0834 72.3798C79.1331 68.2517 86.6862 70.4303 85.9094 74.4473C85.8832 74.5831 86.0272 74.7031 86.1574 74.6566C92.0536 72.552 89.0171 83.0065 84.0786 80.55C84.4607 81.7574 84.3828 85.2383 83.5159 85.8727C81.4917 87.3541 79.3901 86.5954 78.0393 84.7576C77.7759 84.3991 77.4481 82.8465 77.5041 82.3113C77.1414 82.9792 75.7946 85.435 75.0851 85.4954C73.4973 85.6305 72.4208 84.7188 71.166 83.8872C70.4006 83.3799 69.7482 82.653 69.6622 81.5882C69.6034 80.8602 70.0477 79.7494 70.3258 79.0799C70.5619 78.5118 70.4828 78.4794 69.9791 78.126Z"
                        fill="#F3F2F2"
                        stroke="#F3F2F2"
                        strokeWidth="1.13173"
                        strokeLinecap="round"
                    />
                    <rect
                        x="46.125"
                        y="32.0693"
                        width="6.02805"
                        height="17.0795"
                        fill="#0F0F0F"
                    />
                    <circle
                        cx="49.1384"
                        cy="55.1765"
                        r="3.51636"
                        fill="#0F0F0F"
                    />
                </svg>
            </div>
            <div className="content">
                Payment information will be verified during the payment process,
                please do not close or refresh the page
            </div>
            <div className="button">
                <Button type="primary">Got it</Button>
            </div>
        </CusModal>
    );
}
