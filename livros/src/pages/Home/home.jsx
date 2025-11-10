import { useState, useEffect, useMemo } from "react";
import { ShoppingBag, User, X, Trash } from "lucide-react";
import { Link } from "react-router-dom";

// Helper to parse price string to a number (R$ 89,90 -> 89.90)
const parsePreco = (preco) =>
  parseFloat(preco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0;

// Helper to format number back to BRL currency string (89.90 -> R$ 89,90)
const formatarPreco = (valor = 0) => {
  const num = typeof valor === "number" ? valor : Number(valor) || 0;
  return num.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export default function Home() {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  // Use useMemo for static data and total calculations
  const livros = useMemo(() => [
    {
      id: 1,
      titulo: "Coração sem Medo",
      autor: "Itamar Vieira Junior",
      editora: "Todavia",
      preco: "R$ 89,90",
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
  ], []);

  const banners = useMemo(() => [
    "https://livrariadavila.vtexassets.com/assets/vtex.file-manager-graphql/images/e96c8031-a005-4eae-96d0-7f40eacc92c1___edebef67d5ff063517ef313210fc43d9.jpg",
    "https://livrariadavila.vtexassets.com/assets/vtex.file-manager-graphql/images/ec91cd9f-5242-4159-84ab-1868b43b9e0d___2b90637e45400acf8a236fad11f2fd01.png",
    "https://livrariadavila.vtexassets.com/assets/vtex.file-manager-graphql/images/e892b456-e9e1-4eea-976e-910d4a31940a___faad66c6dbfeb323062f0fab64dab6de.png",
    "https://livrariadavila.vtexassets.com/assets/vtex.file-manager-graphql/images/a8970fb6-a809-45f5-94f5-ea8fcd80dc89___a4a15dd4461bd36572fe7b83f7b8cf6a.jpg",
  ], []);
  
  const [current, setCurrent] = useState(0);


  // Derived State
  const totalItens = cartItems.reduce((acc, item) => acc + (item.qtd || 0), 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parsePreco(item.preco) * (item.qtd || 0),
    0
  );

  // --- Effects ---

  // Control scroll when the modal is open
  useEffect(() => {
    document.body.style.overflow = openCart ? "hidden" : "";
    return () => {
        document.body.style.overflow = "";
    };
  }, [openCart]);

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // --- Cart Handlers ---

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
    setOpenCart(true); // Open the modal when adding
  };

  const removerDoCarrinho = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  
  const updateQuantity = (id, change) => {
    setCartItems((prev) => {
        const existingItem = prev.find(item => item.id === id);
        if (!existingItem) return prev;

        const newQtd = existingItem.qtd + change;

        if (newQtd <= 0) {
            // Remove item if quantity is zero or less
            return prev.filter(item => item.id !== id);
        } else {
            // Update quantity
            return prev.map(item => 
                item.id === id ? { ...item, qtd: newQtd } : item
            );
        }
    });
  };

  return (
    <>
      <style>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.3s ease-out forwards;
        }
      `}</style>
      
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          {/* Left side: logo */}
          <div className="flex items-center space-x-2">
            {/* Using a placeholder image/div for the logo */}
            <div className="text-xl font-extrabold text-[#A0180E]">LIVRARIA</div>
          </div>

          {/* Right side: user + cart */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 hover:border-[#A0180E] transition">
                {/* Removed Link import, using div/a tag */}
                <div className="cursor-pointer">
                   <Link
                to="/usuario"
                className="text-white underline hover:text-gray-300 transition"
              >  <User className="w-5 h-5 text-gray-500 hover:text-[#A0180E]" /></Link>
                  
                </div>
            </div>

            <button onClick={() => setOpenCart(true)} className="relative p-2 rounded-full hover:bg-gray-100 transition">
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-[#A0180E] transition" />
              {totalItens > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A0180E] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {totalItens}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>


      {/* 🖼️ Carousel */}
      <div className="relative w-full h-[150px] sm:h-[250px] lg:h-[350px] overflow-hidden shadow-inner">
        {banners.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner promocional ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1920x350/B6D7A8/ffffff?text=Livraria+Banner+Indisponível"; }}
          />
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              aria-label={`Ir para slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? "bg-white ring-2 ring-gray-900" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold mb-10 text-center text-gray-900">
            Livros em Destaque
          </h1>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {livros.map((livro) => (
              <div
                key={livro.id}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="flex justify-center mb-4 min-h-[224px]">
                  <img
                    src={livro.imagem}
                    alt={livro.titulo}
                    className="w-full max-w-[140px] h-56 object-contain rounded-lg shadow-inner"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/140x224/A0180E/ffffff?text=Capa"; }}
                  />
                </div>

                {/* Information */}
                <div className="flex-1">
                  <h2 className="text-base font-bold mb-1 line-clamp-2 min-h-[40px]">
                    {livro.titulo}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-1">{livro.autor}</p>
                  <p className="text-gray-500 text-xs mb-3">{livro.editora}</p>
                  <p className="text-xl font-extrabold text-[#A0180E] mb-4">{livro.preco}</p>
                </div>

                {/* Button */}
                <button
                  onClick={() => adicionarAoCarrinho(livro)}
                  className="bg-[#A0180E] text-white py-2.5 rounded-xl font-semibold shadow-md hover:bg-[#7e130b] transition duration-200 active:scale-[0.98]"
                >
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 🛒 SIDE CART MODAL */}
        {openCart && (
          <div className="fixed inset-0 bg-black/50 z-[9999] flex justify-end" onClick={() => setOpenCart(false)}>
            <div
              className="w-full max-w-sm bg-[#FAF9F6] h-full shadow-2xl flex flex-col relative p-6 animate-slide-left"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenCart(false)}
                className="absolute top-4 right-4 text-gray-800 hover:text-[#A0180E] transition p-1"
                aria-label="Fechar Carrinho"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold mb-6 mt-2 border-b pb-3">Seu Carrinho ({totalItens} itens)</h2>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto pr-2">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center mt-10">
                    Seu carrinho está vazio. Adicione alguns livros!
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 mb-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                    >
                      <img
                        src={item.imagem}
                        alt={item.titulo}
                        className="w-16 h-20 object-contain rounded shadow-sm"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x80/cccccc/000000?text=Capa"; }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold truncate">{item.titulo}</h3>
                        <p className="text-gray-600 text-xs mb-1 truncate">{item.autor}</p>
                        
                        {/* Correctly calculate and format total price for item */}
                        <p className="text-sm font-bold text-gray-900">
                            {formatarPreco(parsePreco(item.preco) * item.qtd)}
                        </p>
                        <p className="text-xs text-gray-500">{item.preco} cada</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-1 border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 text-gray-600 hover:bg-gray-100 transition"
                          aria-label="Diminuir quantidade"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.qtd}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 text-gray-600 hover:bg-gray-100 transition"
                          aria-label="Aumentar quantidade"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removerDoCarrinho(item.id)}
                        className="text-gray-400 hover:text-red-600 p-1 ml-2 transition"
                        aria-label="Remover item"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* TOTAL Section */}
              {cartItems.length > 0 && (
                <div className="border-t pt-4 bg-[#FAF9F6] sticky bottom-0">
                  <div className="flex justify-between text-base mb-1">
                    <span className="text-gray-700">Subtotal</span>
                    {/* Display calculated Subtotal */}
                    <span className="font-semibold text-gray-900">{formatarPreco(subtotal)}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-xl mb-4 text-[#A0180E]">
                    <span>Total (com frete)</span>
                    {/* Display calculated Total (assuming Total = Subtotal for simplicity) */}
                    <span>{formatarPreco(subtotal)}</span>
                  </div>
                  <button className="w-full bg-[#A0180E] text-white py-3 rounded-xl font-bold shadow-lg hover:bg-[#7e130b] transition duration-200 active:scale-[0.99]">
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
            Protótipo desenvolvido por Kauan Batista / Pedro / Felipe
          </p>
        </div>
      </footer>
    </>
  );}