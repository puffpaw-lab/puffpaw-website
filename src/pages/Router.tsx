import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import MintFrame from "./Mint/Frame";
import MintHome from "./Mint/Home";
import MintOrder from "./Mint/Order";
import MintNodes from "./Mint/Nodes";

export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="mint" element={<MintFrame />}>
                    <Route index element={<MintHome />} />
                    <Route path="order" element={<MintOrder />} />
                    <Route path="nodes" element={<MintNodes />} />
                </Route>
                <Route path="*" element={<Navigate to={`/`} replace />} />
            </Routes>
        </HashRouter>
    );
}
