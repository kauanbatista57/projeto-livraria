import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !email || !senha || !dataNascimento) {
      Swal.fire({
        icon: "warning",
        title: "Campos obrigatórios",
        text: "Preencha todos os campos!",
        confirmButtonColor: "#A0180E",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost/projeto-de-apresenta-o/livros/api/index.php?action=create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome_completo: nome,
            email,
            senha,
            data_nascimento: dataNascimento,
          }),
        }
      );

      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Retorno inválido do servidor: " + text);
      }

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Cadastro realizado!",
          text: "Usuário cadastrado com sucesso!",
          confirmButtonColor: "#A0180E",
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => (window.location.href = "/login"), 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro no cadastro",
          text: data.message || "Não foi possível cadastrar.",
          confirmButtonColor: "#A0180E",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro no servidor",
        text: error.message,
        confirmButtonColor: "#A0180E",
      });
      console.error("Erro no cadastro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* LADO ESQUERDO */}
      <div className="col-span-12 md:col-span-6 bg-slate-500 flex flex-col justify-center items-center text-white px-8 py-10">
        <img src="/assets/icon.png" alt="Logo" className="w-40 mb-10" />
        <h1 className="text-5xl font-light mb-2">Editora de</h1>
        <h1 className="text-6xl font-bold">Livros</h1>
      </div>

      {/* LADO DIREITO */}
      <div className="col-span-12 md:col-span-6 bg-gray-50 flex flex-col justify-center px-10 md:px-20">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Vamos começar?
          </h2>
          <p className="text-gray-700 mb-8">
            Crie sua conta na nossa livraria agora!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Nome completo
              </label>
              <input
                type="text"
                placeholder="Informe seu nome completo"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Informe seu e-mail"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Senha
              </label>
              <input
                type="password"
                placeholder="Informe sua senha"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Data de nascimento
              </label>
              <input
                type="date"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-semibold rounded-full transition ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#A0180E] hover:bg-[#7e130b] text-white"
                }`}
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
