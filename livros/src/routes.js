import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Logout from "./pages/Logout/logout"

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;