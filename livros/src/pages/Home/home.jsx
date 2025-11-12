import { useState, useEffect, useMemo } from "react";
import { ShoppingBag, User, X, Trash, LogOut, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const parsePreco = (preco) =>
  parseFloat(preco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0;

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
  const [darkMode, setDarkMode] = useState(false);

  // Lista de livros
  const livros = useMemo(
    () => [
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
          "https://livrariadavila.vtexassets.com/arquivos/ids/8076506-300-400?v=638984301796600000&width=300&height=400&aspect=true",
      },
      {
        id: 4,
        titulo: "A Biblioteca da Meia-Noite",
        autor: "Matt Haig",
        editora: "Bertrand Brasil",
        preco: "R$ 62,00",
        imagem:
          "https://livrariadavila.vtexassets.com/arquivos/ids/8020864-300-400?v=638977484381130000&width=300&height=400&aspect=true",
      },
       {
        id: 5,
        titulo: "Guinness World Records 2026",
        autor: "Guinness World Records",
        editora: "Harper Kids",
        preco: "R$ 149,90",
        imagem:
          "https://livrariadavila.vtexassets.com/arquivos/ids/8067202-300-400?v=638983127869000000&width=300&height=400&aspect=true",
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
          "https://livrariadavila.vtexassets.com/arquivos/ids/8075392-300-400?v=638984162819330000&width=300&height=400&aspect=true",
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
    ],
    []
  );

  const banners = useMemo(
    () => [
      "https://livrariadavila.vtexassets.com/assets/vtex.file-manager-graphql/images/e96c8031-a005-4eae-96d0-7f40eacc92c1___edebef67d5ff063517ef313210fc43d9.jpg",
      "https://livrariadavila.vtexassets.com/assets/vtex.file-manager-graphql/images/e892b456-e9e1-4eea-976e-910d4a31940a___faad66c6dbfeb323062f0fab64dab6de.png",
      "https://livrariadavila.vtexassets.com/assets/vtex.file-manager-graphql/images/a8970fb6-a809-45f5-94f5-ea8fcd80dc89___a4a15dd4461bd36572fe7b83f7b8cf6a.jpg",
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const totalItens = cartItems.reduce((acc, item) => acc + (item.qtd || 0), 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parsePreco(item.preco) * (item.qtd || 0),
    0
  );

  // Efeitos
  useEffect(() => {
    document.body.style.overflow = openCart ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openCart]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handlers
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
    setOpenCart(true);
  };

  const removerDoCarrinho = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (!existingItem) return prev;
      const newQtd = existingItem.qtd + change;
      if (newQtd <= 0) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) =>
          item.id === id ? { ...item, qtd: newQtd } : item
        );
      }
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
          text: "Você saiu da sua conta.",
          confirmButtonColor: "#A0180E",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/login";
        });
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

      {/* HEADER */}
      <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <img src="/assets/icon.png" alt="" className="w-20 h-20" />
          <div className="flex items-center gap-6">
            {/* Perfil */}
            <Link
              to="/usuario"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
            >
              <User className="text-gray-700 dark:text-gray-200" />
            </Link>

            {/* Tema */}
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

            {/* Carrinho */}
            <button
              onClick={() => setOpenCart(true)}
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-[#A0180E] transition" />
              {totalItens > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A0180E] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {totalItens}
                </span>
              )}
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#A0180E] transition"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden shadow-inner">
        {banners.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Livros */}
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-10 text-center text-gray-700 dark:text-gray-200">
            Livros em Destaque
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {livros.map((livro) => (
              <div
                key={livro.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 flex flex-col justify-between"
              >
                <img
                  src={livro.imagem}
                  alt={livro.titulo}
                  className="w-full h-56 object-contain mb-4"
                />
                <h2 className="text-base font-bold mb-1">{livro.titulo}</h2>
                <p className="text-gray-500 text-sm mb-2">{livro.autor}</p>
                <p className="text-xl font-extrabold text-[#A0180E] mb-4">
                  {livro.preco}
                </p>
                <button
                  onClick={() => adicionarAoCarrinho(livro)}
                  className="bg-[#A0180E] text-white py-2.5 rounded-xl font-semibold shadow-md hover:bg-[#7e130b] transition duration-200"
                >
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carrinho */}
      {openCart && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999] flex justify-end"
          onClick={() => setOpenCart(false)}
        >
          <div
            className="w-full max-w-sm bg-[#FAF9F6] h-full shadow-2xl flex flex-col relative p-6 animate-slide-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenCart(false)}
              className="absolute top-4 right-4 text-gray-800 hover:text-[#A0180E]"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 mt-2 border-b pb-3">
              Seu Carrinho ({totalItens} itens)
            </h2>

            <div className="flex-1 overflow-y-auto pr-2">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">
                  Seu carrinho está vazio.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 mb-4 border-b border-gray-200 pb-4"
                  >
                    <img
                      src={item.imagem}
                      alt={item.titulo}
                      className="w-16 h-20 object-contain"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold">{item.titulo}</h3>
                      <p className="text-xs text-gray-600">{item.autor}</p>
                      <p className="text-sm font-bold">
                        {formatarPreco(parsePreco(item.preco) * item.qtd)}
                      </p>
                    </div>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-2">{item.qtd}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removerDoCarrinho(item.id)}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t pt-4 bg-[#FAF9F6] sticky bottom-0">
                <div className="flex justify-between text-base mb-1">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    {formatarPreco(subtotal)}
                  </span>
                </div>
                <Link
                  to="/pagamento"
                  className="block w-full text-center bg-[#A0180E] text-white py-3 rounded-xl font-bold hover:bg-[#7e130b]"
                >
                  Finalizar Compra
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
