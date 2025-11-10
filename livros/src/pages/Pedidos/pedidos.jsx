import React from "react";  
import { ShoppingBag, Calendar, SlidersHorizontal } from "lucide-react";
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";
export default function Pedidos () {
    return(
       <>
  <div className="grid grid-cols-12 min-h-screen">
    {/* Sidebar */}
    <div className="col-span-2 border-r border-gray-200">
      <SidebarMenu />
    </div>

    {/* Conteúdo principal */}
    <div className="col-span-12 md:col-span-10 bg-gray-100 flex justify-center items-start p-6">
      <div className="w-full max-w-4xl">
        {/* Cabeçalho */}
        <div className="flex items-center mb-4">
          <ShoppingBag className="text-[#A0180E] mr-2" size={22} />
          <h1 className="text-xl font-bold text-gray-800">MEUS PEDIDOS</h1>
        </div>

        {/* Conteúdo principal */}
        <div className="bg-white rounded-md shadow-sm py-10 text-center">
          <p className="text-gray-700 font-medium">
            Altere os filtros para ver mais.
          </p>
        </div>
      </div>
    </div>
  </div>
</>

    );
};