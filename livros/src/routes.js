import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home/home";

import Cadastro from "./pages/Cadastro/cadastro";
import Login from "./pages/Login/login";

import User from "./pages/User/user"
import Pedidos from "./pages/Pedidos/pedidos";

import Pagamentos from "./pages/Pagamento/pagemento";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

         <Route path="/login" element={<Login />} />
         <Route path="/cadastro" element={<Cadastro />} />
         
         <Route path="/usuario" element={<User />} />
         <Route path="/pedidos" element={<Pedidos />} />

         <Route path="/pagamento" element={<Pagamentos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;