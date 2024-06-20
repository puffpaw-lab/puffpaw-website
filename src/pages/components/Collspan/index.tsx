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
            <rect width="24" height="24" rx="8" fill="var(--primary-color)" />
            <path
              d="M7.84375 12.9531C7.36914 12.9531 6.91211 12.5195 6.91211 12.0039C6.91211 11.4883 7.36914 11.0547 7.84375 11.0547H15.5781C16.0703 11.0547 16.5098 11.4883 16.5098 12.0039C16.5098 12.5195 16.0703 12.9531 15.5781 12.9531H7.84375Z"
              fill="var(--four-primary-color)"
            />
          </svg>
        </div>
      </div>
      <div className="collspan-wrapper">
        <div className="collspan-content">{children}</div>
      </div>
    </div>
  );
}
