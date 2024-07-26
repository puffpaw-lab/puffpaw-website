import { useBoolean } from "ahooks";
import "./index.scss";

export default function Collspan({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useBoolean(true);

    return (
        <div className={"collspan " + (isOpen ? "on" : "off")}>
            <div className="collspan-title">
                <span>{title}</span>
                <div onClick={setIsOpen.toggle}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="24" height="24" rx="8" fill="#171717" />
                        <path
                            d="m7.84375,12.9531c-0.47461,0 -0.93164,-0.4336 -0.93164,-0.9492c0,-0.5156 0.45703,-0.9492 0.93164,-0.9492l7.73435,0c0.4922,0 0.9317,0.4336 0.9317,0.9492c0,0.5156 -0.4395,0.9492 -0.9317,0.9492l-7.73435,0z"
                            fill="#F5F5F7"
                        />
                        {isOpen || (
                            <path
                                transform="rotate(90 12 12)"
                                d="m8.1328,12.9492c-0.47461,0 -0.93164,-0.4336 -0.93164,-0.9492c0,-0.5156 0.45703,-0.9492 0.93164,-0.9492l7.73435,0c0.4922,0 0.9317,0.4336 0.9317,0.9492c0,0.5156 -0.4395,0.9492 -0.9317,0.9492l-7.73435,0z"
                                fill="#F5F5F7"
                            />
                        )}
                    </svg>
                </div>
            </div>
            <div className="collspan-wrapper">
                <div className="collspan-content">{children}</div>
            </div>
        </div>
    );
}
