import { useState, useEffect } from "react";
import { ShoppingBag, User, X, Trash } from "lucide-react";
export default function Home() {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const totalItens = cartItems.reduce((acc, item) => acc + item.qtd, 0);
  const livros = [
    {
      id: 1,
      titulo: "Coração sem Medo",
      autor: "Itamar Vieira Junior",
      editora: "Todavia",
      preco: "R$ 89,900",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8051402-800-800?v=638981328522400000&width=800&height=800&aspect=true",
    },
    {
      id: 2,
      titulo: "Birds a Photicular Book",
      autor: "Dan Kainen",
      editora: "Workman Publishing",
      preco: "R$ 216,00",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8051154-300-400?v=638981302813330000&width=300&height=400&aspect=true",
    },
    {
      id: 3,
      titulo: "Diário de Um Banana 20 - Festa Insana",
      autor: "Jeff Kinney",
      editora: "Vergara & Riba",
      preco: "R$ 69,90",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8046548-300-400?v=638980727081170000&width=300&height=400&aspect=true",
    },
    {
      id: 4,
      titulo: "Bugs a Photicular Book",
      autor: "Dan Kainen",
      editora: "Workman Publishing",
      preco: "R$ 216,00",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8043032-300-400?v=638980275563770000&width=300&height=400&aspect=true",
    },
    {
      id: 5,
      titulo: "Guinness World Records 2026",
      autor: "Guinness World Records",
      editora: "Harper Kids",
      preco: "R$ 149,90",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8045974-300-400?v=638980643688030000&width=300&height=400&aspect=true",
    },
    {
      id: 6,
      titulo: "O Homem de Giz",
      autor: "C. J. Tudor",
      editora: "Intrínseca",
      preco: "R$ 54,90",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8018361-300-400?v=638977128209830000&width=300&height=400&aspect=true",
    },
    {
      id: 7,
      titulo: "A Biblioteca da Meia-Noite",
      autor: "Matt Haig",
      editora: "Bertrand Brasil",
      preco: "R$ 62,00",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8020864-300-400?v=638977484381130000&width=300&height=400&aspect=true",
    },
    {
      id: 8,
      titulo: "É Assim Que Acaba",
      autor: "Colleen Hoover",
      editora: "Galera",
      preco: "R$ 59,90",
      imagem:
        "https://m.media-amazon.com/images/I/81s0B6NYXML._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 9,
      titulo: "A Paciente Silenciosa",
      autor: "Alex Michaelides",
      editora: "Record",
      preco: "R$ 69,90",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8050681-300-400?v=638981252946170000&width=300&height=400&aspect=true",
    },
    {
      id: 10,
      titulo: "As Aventuras de Sherlock Holmes",
      autor: "Arthur Conan Doyle",
      editora: "Principis",
      preco: "R$ 39,90",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8007184-300-400?v=638975711541030000&width=300&height=400&aspect=true",
    },
    {
      id: 11,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      editora: "HarperCollins",
      preco: "R$ 29,90",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/7864032-300-400?v=638955963730900000&width=300&height=400&aspect=true",
    },
    {
      id: 12,
      titulo: "O Código Da Vinci",
      autor: "Dan Brown",
      editora: "Arqueiro",
      preco: "R$ 74,90",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8032493-800-800?v=638978960833600000&width=800&height=800&aspect=tr",
    },
    {
      id: 13,
      titulo: "Os Sete Maridos de Evelyn Hugo",
      autor: "Taylor Jenkins Reid",
      editora: "Paralela",
      preco: "R$ 64,90",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8051694-300-400?v=638981376436700000&width=300&height=400&aspect=true",
    },
    {
      id: 14,
      titulo: "Torto Arado",
      autor: "Itamar Vieira Junior",
      editora: "Todavia",
      preco: "R$ 84,90",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8044837-300-400?v=638980520138430000&width=300&height=400&aspect=true",
    },
    {
      id: 15,
      titulo: "O Conto da Aia",
      autor: "Margaret Atwood",
      editora: "Rocco",
      preco: "R$ 72,00",
      imagem:
        "https://livrariadavila.vtexassets.com/arquivos/ids/8025644-300-400?v=638978083608430000&width=300&height=400&aspect=true",
    },
  ];

  // impede o scroll quando o modal abre
  useEffect(() => {
    document.body.style.overflow = openCart ? "hidden" : "";
  }, [openCart]);

  const adicionarAoCarrinho = (livro) => {
    setCartItems((prev) => {
      const existente = prev.find((item) => item.id === livro.id);
      if (existente) {
        return prev.map((item) =>
          item.id === livro.id ? { ...item, qtd: item.qtd + 1 } : item
        );
      }
      return [...prev, { ...livro, qtd: 1 }];
    });
    setOpenCart(true); // abre o modal ao adicionar
  };

  const removerDoCarrinho = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.preco * item.qtd,
    0
  );

  return (
    <>
      <header className="bg-white shadow-md ">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          {/* Lado esquerdo: logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/assets/icon.png"
              alt="Logo"
              className="h-24 object-contain"
            />
          </div>

          {/* Lado direito: login + sacola */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 hover:border-blue-500 transition">
              <User className="w-5 h-5 text-gray-500 cursor-pointer" />
            </div>

            <button onClick={() => setOpenCart(true)} className="relative">
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
              {totalItens > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItens}
                </span>
              )}
            </button>
          </div>
          {/* MODAL LATERAL */}
          {openCart && (
            <div className="fixed inset-0 bg-black/40  z-40 flex justify-end">
              {/* Painel lateral */}
              <div className="w-80  bg-gray-50 h-full shadow-xl flex flex-col p-6 relative animate-slide-left">
                {/* Fechar */}
                <button
                  onClick={() => setOpenCart(false)}
                  className="absolute top-4 right-4"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>

                <h2 className="text-2xl font-bold mb-6 mt-8">Carrinho</h2>

                {/* Conteúdo do carrinho */}
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  Seu carrinho está vazio.
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="bg-[#FAF9F6] min-h-screen py-10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-8 text-center">
            Livros em Destaque
          </h1>

          {/* GRID DE 12 COLUNAS */}
          <div className="grid grid-cols-12 p-2 gap-6 justify-center">
            {livros.map((livro) => (
              <div
                key={livro.id}
                className="col-span-12 lg:col-span-3 bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition"
              >
                {/* IMAGEM */}
                <div className="flex justify-center mb-4">
                  <img
                    src={livro.imagem}
                    alt={livro.titulo}
                    className="w-40 h-56 object-contain rounded"
                  />
                </div>

                {/* INFORMAÇÕES */}
                <div>
                  <h2 className="text-base font-semibold mb-1">
                    {livro.titulo}
                  </h2>
                  <p className="text-gray-600 text-sm">{livro.autor}</p>
                  <p className="text-gray-500 text-sm mb-3">{livro.editora}</p>
                  <p className="text-lg font-bold mb-3">{livro.preco}</p>
                </div>

                {/* BOTÃO */}
                <button
                  onClick={() => adicionarAoCarrinho(livro)}
                  className="bg-[#A0180E] text-white py-2 rounded-lg hover:bg-[#7e130b] transition"
                >
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* MODAL LATERAL */}
        {openCart && (
          <div className="fixed inset-0 bg-black/50 z-[9999] flex justify-end">
            <div className="w-80 sm:w-96 bg-[#FAF9F6] h-full shadow-xl flex flex-col relative p-6 animate-slide-left">
              <button
                onClick={() => setOpenCart(false)}
                className="absolute top-4 right-4"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              <h2 className="text-2xl font-bold mb-6 mt-8">Carrinho</h2>

              <div className="flex-1 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center mt-10">
                    Seu carrinho está vazio.
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 mb-4 border-b pb-4"
                    >
                      <img
                        src={item.imagem}
                        alt={item.titulo}
                        className="w-16 h-20 object-contain rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold">{item.titulo}</h3>
                        <p className="text-gray-600 text-xs mb-2">
                          {item.autor}
                        </p>
                        <p className="text-sm font-bold">R$ {item.preco}</p>
                      </div>
                      <button
                        onClick={() => removerDoCarrinho(item.id)}
                        className="text-gray-500 hover:text-red-600"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* TOTAL */}
              {cartItems.length > 0 && (
                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Subtotal</span>
                    <span>R$ {livros.preco}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Total</span>
                    <span>R$ {livros.preco}</span>
                  </div>
                  <button className="w-full bg-[#A0180E] text-white py-3 rounded-lg font-semibold hover:bg-[#7e130b] transition">
                    Finalizar Compra
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <footer className="bg-gray-900 text-gray-300 px-8 py-4 ">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Livraria. Todos os direitos
            reservados.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Desenvolvido por Kauan Batista / Pedro / Felipe
          </p>
        </div>
      </footer>
    </>
  );
}
