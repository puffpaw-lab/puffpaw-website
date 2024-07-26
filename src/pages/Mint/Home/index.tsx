import Action from "./Action";
import Info from "./Info";
import "./index.scss";

export default function Home() {
    return (
        <div className="mint-home">
            <Info />
            <Action />
        </div>
    );
}
