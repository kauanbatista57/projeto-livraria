import React, { useState } from "react";
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";
export default function User() {
  const [nome, setNome] = useState("Digite seu nome");
  const [telefone, setTelefone] = useState("(11) 9 7710–8153");
  const [ofertas, setOfertas] = useState(true);
  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          {/* Coluna do menu */}
          <div className="col-span-3">
            <SidebarMenu />
          </div>
          <div className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
            {/* Título */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-orange-500 text-2xl">👤</span>
              <h1 className="text-2xl font-bold text-gray-800">MEUS DADOS</h1>
            </div>

            {/* Grid dos campos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* E-mail */}
              <div className="col-span-2">
                <label className="block text-gray-600 text-sm mb-1">
                  E-mail
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value="kauanbsantos309@gmail.com"
                    disabled
                    className="w-full border border-gray-300 rounded-md p-3 bg-gray-100 text-gray-500"
                  />
                  <button className="absolute right-3 top-3 text-[#A0180E] font-semibold text-sm">
                    ALTERAR E-MAIL
                  </button>
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-gray-600 text-sm mb-1">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value="*******************"
                    disabled
                    className="w-full border border-gray-300 rounded-md p-3 bg-gray-100 text-gray-500"
                  />
                  <button className="absolute right-3 top-3 text-[#A0180E] font-semibold text-sm">
                    ALTERAR SENHA
                  </button>
                </div>
              </div>

              {/* Data de nascimento */}
              <div className="col-span-2">
                <label className="block text-gray-600 text-sm mb-1">
                  Data de nascimento
                </label>
                <input
                  type="text"
                  value="28/05/2004"
                  disabled
                  className="w-full border border-gray-300 rounded-md p-3 bg-gray-100 text-gray-500"
                />
              </div>

              {/* Nome completo */}
              <div className="col-span-2">
                <label className="block text-gray-600 text-sm mb-1">
                  Nome completo<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col items-center justify-between mt-8 gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md">
                SALVAR ALTERAÇÕES
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
