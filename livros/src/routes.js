import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Login from "./pages/Login/login";

import User from "./pages/User/user"
import Pedidos from "./pages/Pedidos/pedidos";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/usuario" element={<User />} />
         <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;