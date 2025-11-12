import { Link } from "react-router-dom";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      Swal.fire({
        icon: "warning",
        title: "Atenção!",
        text: "⚠️ Preencha todos os campos antes de continuar.",
        confirmButtonColor: "#A0180E",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost/projeto-de-apresenta-o/livros/api/index.php?action=login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, senha }),
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
          title: "Login realizado!",
          text: "✅ Bem-vindo de volta!",
          confirmButtonColor: "#A0180E",
          timer: 1500,
          showConfirmButton: false,
        });

        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        setTimeout(() => (window.location.href = "/"), 1500);
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro no login",
          text: data.message || "E-mail ou senha incorretos.",
          confirmButtonColor: "#A0180E",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Falha na conexão",
        text: error.message,
        confirmButtonColor: "#A0180E",
      });
      console.error("Erro no login:", error);
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
            Entre com sua conta em nosso site de livros
          </p>

          {/* FORMULÁRIO */}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="text"
                placeholder="Informe seu Email"
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

              <div className="text-right mt-2">
                <Link
                  to="/cadastro"
                  className="text-[#A0180E] hover:underline text-sm font-medium"
                >
                  Cadastrar conta
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-semibold rounded-full transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#A0180E] hover:bg-[#7e130b] text-white"
              }`}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
