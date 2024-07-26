/**订单状态 */
export enum Status {
    "To be Paid" = 0,
    "Canceled" = 1,
    "Paid, waiting for block confirmation" = 2,
    "Payment exceptions" = 3,
    "timeout" = 4,
    "complete" = 5,
}

export type OrderItem = {
    id: number;
    hash: string; //交易hash
    status: Status; //状态
    wrongReason: string; //错误原因
    tiers: string; //等级
    anyText: string; //描述
    price: number; //单价
    quantities: number; //数量
};

/**订单状态对应的图标 */
export const OrderIcon: { [key in Status]: JSX.Element } = {
    [Status["To be Paid"]]: (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M29 16V12H7V28H29V24"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path d="M24 19.5H31" stroke="white" strokeWidth="2" />
            <rect
                x="7"
                y="7"
                width="16"
                height="5"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
        </svg>
    ),
    [Status["Canceled"]]: (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.998 28.8504C24.7142 28.8504 29.348 24.2165 29.348 18.5004C29.348 12.7842 24.7142 8.15039 18.998 8.15039C13.2819 8.15039 8.64801 12.7842 8.64801 18.5004"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path
                d="M5.33411 13.2539L7.73804 18.9675L13.4516 16.5635"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
        </svg>
    ),
    [Status["Paid, waiting for block confirmation"]]: (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M26.5 16V6H6.5V27H17.5"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path
                d="M23.5 20V25H28.5"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path d="M9.5 11H19.5" stroke="white" strokeWidth="2" />
            <circle
                cx="24"
                cy="23.5"
                r="7.5"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
        </svg>
    ),
    [Status["Payment exceptions"]]: (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="18"
                cy="18"
                r="13"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path d="M18 11V20" stroke="white" strokeWidth="2" />
            <path d="M18 23L18 25" stroke="white" strokeWidth="2" />
        </svg>
    ),
    [Status["timeout"]]: (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 11V19H21"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path
                d="M28.1968 21.3255C28.7155 19.9835 29 18.525 29 17C29 10.3726 23.6274 5 17 5C10.3726 5 5 10.3726 5 17C5 23.6274 10.3726 29 17 29C17.6419 29 18.3323 28.9376 19 28.8299"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path
                d="M26 18L33.7942 30.75H18.2058L26 18Z"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path d="M26 23.5V26.5" stroke="white" strokeWidth="2" />
            <path d="M26 27.5L26 28.5" stroke="white" strokeWidth="2" />
        </svg>
    ),
    [Status["complete"]]: (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 6.5H29V12.5V29.5H7V12.5V6.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path
                d="M7 12.5H29V16.9348V29.5H7V16.9348V12.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path
                d="M22.9597 17.0355L16.5355 23.4597L13 19.9241"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
        </svg>
    ),
};
