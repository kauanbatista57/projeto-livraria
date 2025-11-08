import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import User from "./pages/User/user"

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/usuario" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;