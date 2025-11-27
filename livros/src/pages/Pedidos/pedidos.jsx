import React, { useEffect, useState } from "react";
import { ShoppingBag, Calendar } from "lucide-react";
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  const pegarUsuario = () => {
    try {
      return JSON.parse(localStorage.getItem("usuario"));
    } catch {
      return null;
    }
  };

  const pedidosKeyDoUsuario = (userId) => `listaPedidos_${userId}`;

  // ⭐ Função para resetar os pedidos (deve ficar FORA do useEffect)
  function resetarPedidos() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) return;

    localStorage.removeItem(`listaPedidos_${usuario.id}`);
    localStorage.removeItem(`pedidos_${usuario.id}`);

    setPedidos([]); // limpa a tela
  }

  useEffect(() => {
    const usuario = pegarUsuario();

    if (!usuario || !usuario.id) {
      setPedidos([]);
      return;
    }

    const userKey = pedidosKeyDoUsuario(usuario.id);

    const globalLista = JSON.parse(localStorage.getItem("listaPedidos")) || [];
    const userLista = JSON.parse(localStorage.getItem(userKey)) || [];

    if (globalLista.length > 0) {
      const merged = [...userLista, ...globalLista];
      localStorage.setItem(userKey, JSON.stringify(merged));
      localStorage.removeItem("listaPedidos");
      setPedidos(merged);
      return;
    }

    setPedidos(userLista);
  }, []);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2 border-r border-gray-200">
        <SidebarMenu />
      </div>

      <div className="col-span-12 md:col-span-10 bg-gray-100 flex justify-center items-start p-6">
        <div className="w-full max-w-4xl">

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <ShoppingBag className="text-[#A0180E] mr-2" size={22} />
              <h1 className="text-xl font-bold text-gray-800">MEUS PEDIDOS</h1>
            </div>

            {/* ⭐ BOTÃO DE RESET AQUI – apenas 1 vez */}
            <button
              onClick={resetarPedidos}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Resetar Pedidos
            </button>
          </div>

          <div className="bg-white rounded-md shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
              Pedidos Realizados
            </h2>

            {pedidos.length === 0 ? (
              <p className="text-center text-gray-600">Nenhum pedido encontrado.</p>
            ) : (
              pedidos.map((pedido, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b pb-4 mb-4"
                >
                  <img
                    src={pedido.livroComprado.imagem}
                    alt={pedido.livroComprado.titulo}
                    className="w-24 h-32 object-cover rounded-md"
                  />

                  <div className="text-left flex flex-col">
                    <p className="text-gray-800 font-bold text-lg">
                      {pedido.livroComprado.titulo}
                    </p>

                    <p className="text-gray-700 text-sm mt-1">
                      <span className="font-semibold">Valor Total:</span>{" "}
                      {pedido.valorFinal}
                    </p>

                    <p className="text-gray-700 text-sm mt-1 flex items-center gap-1">
                      <Calendar size={16} className="text-[#A0180E]" />
                      <span className="font-semibold">Data:</span>{" "}
                      {new Date(pedido.data).toLocaleDateString()}
                    </p>

                    {pedido.livroComprado.autor && (
                      <p className="text-gray-600 text-sm mt-1">
                        {pedido.livroComprado.autor}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
