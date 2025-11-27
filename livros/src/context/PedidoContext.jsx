import { createContext, useContext, useState } from "react";

const PedidoContext = createContext();

// Hook para usar o contexto
export function usePedidos() {
  return useContext(PedidoContext);
}

export function PedidoProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  // Adicionar pedido novo
  function adicionarPedido(novoPedido) {
    setPedidos((prev) => [...prev, novoPedido]);
  }

  return (
    <PedidoContext.Provider value={{ pedidos, adicionarPedido }}>
      {children}
    </PedidoContext.Provider>
  );
}
