import RoutesApp from "./routes";
import { PedidoProvider } from "./context/PedidoContext";
function App() {
  return (
   <>
    <PedidoProvider>
   <RoutesApp />
   </PedidoProvider>
   </>
  );
}

export default App;
