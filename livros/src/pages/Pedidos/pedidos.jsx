import React from "react";
import { ShoppingBag, Calendar } from "lucide-react";
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";
import { useLocation } from "react-router-dom";

export default function Pedidos() {
  const location = useLocation();

  const { livroComprado, valorFinal, data } = location.state || {};

  return (
    <>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2 border-r border-gray-200">
          <SidebarMenu />
        </div>

        <div className="col-span-12 md:col-span-10 bg-gray-100 flex justify-center items-start p-6">
          <div className="w-full max-w-4xl">
            <div className="flex items-center mb-4">
              <ShoppingBag className="text-[#A0180E] mr-2" size={22} />
              <h1 className="text-xl font-bold text-gray-800">MEUS PEDIDOS</h1>
            </div>

            <div className="bg-white rounded-md shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
                Pedido Realizado
              </h2>

              {livroComprado ? (
                <div className="flex items-start gap-4 border-b pb-4">
                  <img
                    src={livroComprado.imagem}
                    alt={livroComprado.titulo}
                    className="w-24 h-32 object-cover rounded-md"
                  />

                  <div className="text-left flex flex-col">
                    <p className="text-gray-800 font-bold text-lg">
                      {livroComprado.titulo}
                    </p>

                    <p className="text-gray-700 text-sm mt-1">
                      <span className="font-semibold">Valor Total:</span>{" "}
                      {valorFinal || "R$ 0,00"}
                    </p>

                    <p className="text-gray-700 text-sm mt-1 flex items-center gap-1">
                      <Calendar size={16} className="text-[#A0180E]" />
                      <span className="font-semibold">Data:</span>{" "}
                      {data ? new Date(data).toLocaleDateString() : "—"}
                    </p>

                    {livroComprado.autor && (
                      <p className="text-gray-600 text-sm mt-1">
                        {livroComprado.autor}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-600">
                  Nenhum item encontrado.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
