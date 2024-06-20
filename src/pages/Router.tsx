import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Mint from "./Mint";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="*" element={<Navigate to={`/`} replace />} />
      </Routes>
    </HashRouter>
  );
}
