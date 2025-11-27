import React, { useState } from "react";
import Swal from "sweetalert2";
import { Eye, Landmark, CreditCardIcon, CircleDot, Circle } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function Pagamento() {
  const location = useLocation();
  const navigate = useNavigate();

  const { valorFinal, livro } = location.state || {};

  const [metodo, setMetodo] = useState("pix");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cvc, setCvc] = useState("");

  // pega usuario do mesmo localStorage que seu login usa
  const pegarUsuario = () => {
    try {
      return JSON.parse(localStorage.getItem("usuario"));
    } catch {
      return null;
    }
  };

  // chave por usuário para armazenar pedidos
  const pedidosKeyDoUsuario = (userId) => `listaPedidos_${userId}`;

  // Função para atualizar estoque no backend (usa 'usuario' salvo no localStorage)
  async function atualizarEstoque(qtd) {
    const usuario = pegarUsuario();
    if (!usuario || !usuario.id) return;

    try {
await fetch("http://localhost/projeto-de-apresenta-o/livros/api/index.php?action=addEstoque", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: usuario.id,
         quantidade: 1
        }),
      });
    } catch (err) {
      console.error("Erro ao atualizar estoque:", err);
      // não interrompe o fluxo de compra por causa do estoque, mas logamos o erro
    }
  }

  const finalizarCompra = async () => {
    const usuario = pegarUsuario();
    if (!usuario || !usuario.id) {
      Swal.fire({
        icon: "warning",
        title: "Atenção",
        text: "Você precisa estar logado para finalizar a compra.",
        confirmButtonColor: "#A0180E",
      });
      return;
    }

    // quantidade comprada (se existir qtd no item) — se não, 1
    const quantidadeComprada = livro?.qtd ?? 1;

    // tentar atualizar estoque no servidor (não bloqueamos demais)
    await atualizarEstoque(quantidadeComprada);

    // cria o pedido
    const novoPedido = {
      livroComprado: livro,
      valorFinal: valorFinal,
      data: new Date().toISOString(),
    };

    // pega lista específica do usuário
    const chave = pedidosKeyDoUsuario(usuario.id);
    const pedidosExistentes = JSON.parse(localStorage.getItem(chave)) || [];

    pedidosExistentes.push(novoPedido);
    localStorage.setItem(chave, JSON.stringify(pedidosExistentes));

    Swal.fire({
      icon: "success",
      title: "Compra realizada!",
      text: "🎉 Seu pedido foi concluído com sucesso.",
      confirmButtonColor: "#A0180E",
      timer: 1500,
      showConfirmButton: false,
    });

    setTimeout(() => {
      navigate("/pedidos");
    }, 1200);
  };

  const validarPagamento = () => {
    if (metodo === "pix") {
      finalizarCompra();
      return;
    }

    if (numeroCartao.trim() === "" || cvc.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Campos obrigatórios!",
        text: "Preencha o número do cartão e o CVC para finalizar a compra.",
        confirmButtonColor: "#A0180E",
      });
      return;
    }

    if (numeroCartao.replace(/\s/g, "").length < 12) {
      Swal.fire({
        icon: "error",
        title: "Número inválido!",
        text: "O número do cartão deve conter pelo menos 12 dígitos.",
        confirmButtonColor: "#A0180E",
      });
      return;
    }

    if (cvc.length < 3) {
      Swal.fire({
        icon: "error",
        title: "CVC inválido!",
        text: "O CVC deve ter pelo menos 3 dígitos.",
        confirmButtonColor: "#A0180E",
      });
      return;
    }

    finalizarCompra();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* LADO ESQUERDO */}
        <div className="col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="text-orange-600" size={20} />
            <h2 className="text-lg font-bold text-gray-800 uppercase">
              Forma de Pagamento
            </h2>
          </div>

          {/* PIX */}
          <div
            onClick={() => setMetodo("pix")}
            className={`border rounded-md p-4 mb-4 cursor-pointer transition ${
              metodo === "pix" ? "border-orange-600" : "border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {metodo === "pix" ? (
                  <CircleDot className="text-orange-600" />
                ) : (
                  <Circle className="text-gray-400" />
                )}
                <span className="font-semibold text-gray-800">PIX</span>
              </div>
              <Landmark
                className={`${
                  metodo === "pix" ? "text-orange-600" : "text-gray-400"
                }`}
              />
            </div>

            {metodo === "pix" && (
              <div className="mt-4 flex flex-col items-center">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PagamentoPix"
                  alt="QR Code Pix"
                  className="w-40 h-40 border border-gray-300 rounded-md"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Escaneie o QR Code para realizar o pagamento
                </p>
              </div>
            )}
          </div>

          {/* CARTÃO */}
          <div
            onClick={() => setMetodo("cartao")}
            className={`border rounded-md p-4 mb-4 cursor-pointer transition ${
              metodo === "cartao" ? "border-orange-600" : "border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {metodo === "cartao" ? (
                  <CircleDot className="text-orange-600" />
                ) : (
                  <Circle className="text-gray-400" />
                )}
                <span className="font-semibold text-gray-800">
                  Cartão de Crédito
                </span>
              </div>
              <CreditCardIcon
                className={`${
                  metodo === "cartao" ? "text-orange-600" : "text-gray-400"
                }`}
              />
            </div>

            {metodo === "cartao" && (
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Número do Cartão
                  </label>
                  <input
                    type="text"
                    value={numeroCartao}
                    onChange={(e) => setNumeroCartao(e.target.value)}
                    placeholder="0000 0000 0000 0000"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-orange-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="123"
                    className="w-1/3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-orange-600"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="text-orange-600" size={20} />
              <h2 className="text-lg font-bold text-gray-800 uppercase">
                Resumo
              </h2>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Valor dos Produtos:</span>
              <span className="font-semibold text-gray-800">
                {valorFinal || "R$ 0,00"}
              </span>
            </div>

            <div className="bg-green-100 text-gray-800 rounded-md p-3 mt-4">
              <div className="flex justify-between font-semibold">
                <span>Valor à vista no PIX:</span>
                <span className="text-green-700">
                  {valorFinal || "R$ 0,00"}
                </span>
              </div>
            </div>
          </div>

          {/* BOTÕES */}
          <div className="bg-white rounded-lg shadow p-6">
            <button
              onClick={validarPagamento}
              className="w-full bg-[#A0180E] text-white font-semibold py-3 rounded-md hover:bg-[#7e130b] transition"
            >
              Finalizar Compra
            </button>

            <Link to="/">
              <button className="w-full border border-[#A0180E] text-[#7e130b] font-semibold py-3 rounded-md mt-3 hover:bg-orange-50 transition">
                Voltar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
