import { createContext, useContext, useState, useEffect } from "react";

const PedidoContext = createContext();

export function usePedidos() {
  return useContext(PedidoContext);
}

export function PedidoProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  // Carregar pedidos do usuário logado
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) return;

    const pedidosSalvos =
      JSON.parse(localStorage.getItem(`pedidos_${usuario.id}`)) || [];
    setPedidos(pedidosSalvos);
  }, []);

  // Adicionar pedido
  function adicionarPedido(novoPedido) {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) return;

    setPedidos((prev) => {
      const updated = [...prev, novoPedido];
      localStorage.setItem(`pedidos_${usuario.id}`, JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <PedidoContext.Provider value={{ pedidos, adicionarPedido }}>
      {children}
    </PedidoContext.Provider>
  );
}
