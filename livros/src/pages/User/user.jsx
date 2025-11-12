import React, { useState, useEffect } from "react";
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";
import { LogOut } from "lucide-react";

export default function User() {
  const [usuario, setUsuario] = useState(null);
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("usuario");
    if (userData) {
      const parsed = JSON.parse(userData);
      setUsuario(parsed);
      setNome(parsed.nome_completo || "");
      setEmail(parsed.email || "");
      setDataNascimento(parsed.data_nascimento || "");
    } else {
      alert("⚠️ Nenhum usuário logado!");
      window.location.href = "/login";
    }
  }, []);

  const handleSave = () => {
    alert("🔒 Alterações salvas localmente (exemplo).");
  };

  if (!usuario) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Carregando...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Coluna do menu */}
      <div className="col-span-3">
        <SidebarMenu />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
          {/* Título */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 text-2xl">👤</span>
              <h1 className="text-2xl font-bold text-gray-800">MEUS DADOS</h1>
            </div>

            <button className="flex items-center gap-2">
              <LogOut size={20} />
            </button>
          </div>

          {/* Campos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* E-mail */}
            <div className="col-span-2">
              <label className="block text-gray-600 text-sm mb-1">E-mail</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full border border-gray-300 rounded-md p-3 bg-gray-100 text-gray-500"
                />
                <button className="absolute right-3 top-3 text-[#A0180E] font-semibold text-sm">
                  ALTERAR E-MAIL
                </button>
              </div>
            </div>

            {/* Senha */}
            <div className="col-span-2">
              <label className="block text-gray-600 text-sm mb-1">Senha</label>
              <div className="relative">
                <input
                  type="password"
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
                value={dataNascimento}
                disabled
                className="w-full border border-gray-300 rounded-md p-3 bg-gray-100 text-gray-500"
              />
            </div>

            {/* Nome completo */}
            <div className="col-span-2">
              <label className="block text-gray-600 text-sm mb-1">
                Nome completo<span className="text-[#A0180E]">*</span>
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Botão salvar */}
          <div className="flex flex-col items-center justify-between mt-8 gap-4">
            <button
              onClick={handleSave}
              className="bg-[#A0180E] hover:bg-[#7e130b] text-white font-semibold py-3 px-6 rounded-md"
            >
              SALVAR ALTERAÇÕES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
