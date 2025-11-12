import React, { useState, useEffect } from "react";
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";
import { LogOut, Moon, Sun } from "lucide-react";
import Swal from "sweetalert2";

export default function User() {
  const [usuario, setUsuario] = useState(null);
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está logado
    const userData = localStorage.getItem("usuario");
    if (userData) {
      const parsed = JSON.parse(userData);
      setUsuario(parsed);
      setNome(parsed.nome_completo || "");
      setEmail(parsed.email || "");
      setDataNascimento(parsed.data_nascimento || "");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Acesso negado",
        text: "Você precisa estar logado para acessar essa página.",
        confirmButtonColor: "#A0180E",
      }).then(() => {
        window.location.href = "/login";
      });
    }

    // Recupera preferência de tema
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSave = () => {
    Swal.fire({
      icon: "success",
      title: "Alterações salvas!",
      text: "As alterações foram salvas localmente (exemplo).",
      confirmButtonColor: "#A0180E",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Deseja realmente sair?",
      text: "Você será desconectado da sua conta.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#A0180E",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Sim, sair",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("usuario");
        Swal.fire({
          icon: "success",
          title: "Logout realizado",
          text: "Você saiu da sua conta com sucesso.",
          confirmButtonColor: "#A0180E",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/login";
        });
      }
    });
  };

  if (!usuario) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900">
        Carregando...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Coluna do menu */}
      <div className="col-span-3">
        <SidebarMenu />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="container mx-auto max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-colors duration-300">
          {/* Título */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 text-2xl">👤</span>
              <h1 className="text-2xl font-bold">MEUS DADOS</h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Botão tema */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
              >
                {darkMode ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-gray-700" />
                )}
              </button>

              {/* Botão sair */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#A0180E] transition"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </button>
            </div>
          </div>

          {/* Campos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* E-mail */}
            <div className="col-span-2">
              <label className="block text-sm mb-1">E-mail</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
                />
                <button className="absolute right-3 top-3 text-[#A0180E] font-semibold text-sm">
                  ALTERAR E-MAIL
                </button>
              </div>
            </div>

            {/* Senha */}
            <div className="col-span-2">
              <label className="block text-sm mb-1">Senha</label>
              <div className="relative">
                <input
                  type="password"
                  value="*******************"
                  disabled
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
                />
                <button className="absolute right-3 top-3 text-[#A0180E] font-semibold text-sm">
                  ALTERAR SENHA
                </button>
              </div>
            </div>

            {/* Data de nascimento */}
            <div className="col-span-2">
              <label className="block text-sm mb-1">
                Data de nascimento
              </label>
              <input
                type="text"
                value={dataNascimento}
                disabled
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
              />
            </div>

            {/* Nome completo */}
            <div className="col-span-2">
              <label className="block text-sm mb-1">
                Nome completo<span className="text-[#A0180E]">*</span>
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
