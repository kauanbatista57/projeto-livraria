import React, { useState } from "react";
import { Eye, Landmark, CreditCardIcon, CircleDot, Circle } from "lucide-react";
export default function Pagamento() {
  const [metodo, setMetodo] = useState("pix");

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="text-orange-600" size={20} />
            <h2 className="text-lg font-bold text-gray-800 uppercase">
              Forma de Pagamento
            </h2>
          </div>

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

            {/* Descrição */}
            <p className="mt-2 text-sm text-gray-600">
              Até <span className="font-bold">22% de desconto</span> com{" "}
              <span className="font-bold">aprovação imediata</span> que torna a{" "}
              <span className="font-bold">expedição mais rápida</span> do
              pedido.
            </p>

            {/* QR Code */}
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

          {/* CARTÃO DE CRÉDITO */}
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
                    placeholder="123"
                    className="w-1/3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-orange-600"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

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
              <span className="font-semibold text-gray-800">R$ 505,25</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Descontos:</span>
              <span className="text-green-600 font-semibold">- R$ 25,26</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Frete:</span>
              <span className="font-semibold text-gray-800">R$ 0,00</span>
            </div>

            <div className="bg-green-100 text-gray-800 rounded-md p-3 mt-4">
              <div className="flex justify-between font-semibold">
                <span>Valor à vista no PIX:</span>
                <span className="text-green-700">R$ 479,99</span>
              </div>
              <p className="text-xs text-gray-700">(Economize: R$ 25,26)</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <button className="w-full bg-[#A0180E] text-white font-semibold py-3 rounded-md hover:bg-[#7e130b]  transition">
              Continuar
            </button>
            <button className="w-full border border-[#A0180E] text-[#7e130b] font-semibold py-3 rounded-md mt-3 hover:bg-orange-50 transition">
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
