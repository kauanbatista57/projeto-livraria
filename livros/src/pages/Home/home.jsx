import React, { useState, useEffect, useMemo } from "react";
import { ShoppingBag, LogOut, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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
      "https://livrariadavila.vtexassets.com/assets/vtex.file-manager-graphql/images/ec91cd9f-5242-4159-84ab-1868b43b9e0d___2b90637e45400acf8a236fad11f2fd01.png",
      "https://livrariadavila.vtexassets.com/assets/vtex.file-manager-graphql/images/e892b456-e9e1-4eea-976e-910d4a31940a___faad66c6dbfeb323062f0fab64dab6de.png",
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  const totalItens = cartItems.reduce((acc, item) => acc + (item.qtd || 0), 0);
  const parsePreco = (preco) =>
    parseFloat(preco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0;
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parsePreco(item.preco) * (item.qtd || 0),
    0
  );

  useEffect(() => {
    // Bloqueia scroll com carrinho aberto
    document.body.style.overflow = openCart ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [openCart]);

  useEffect(() => {
    // Carrossel
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    // Recupera tema salvo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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
          text: "Você saiu da sua conta com sucesso.",
          confirmButtonColor: "#A0180E",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/login";
        });
      }
    });
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

  return (
    <>
      {/* HEADER */}
      <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10 transition-colors">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/assets/icon.png" alt="" className="w-20 h-20" />
          </div>

          <div className="flex items-center gap-4">
            {/* Botão tema */}
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
              className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <ShoppingBag className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-[#A0180E]" />
              {totalItens > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A0180E] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white dark:border-gray-900">
                  {totalItens}
                </span>
              )}
            </button>

            {/* Botão sair */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#A0180E] transition"
            >
              <LogOut size={20} />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* BANNER */}
      <div className="relative w-full h-[150px] sm:h-[250px] lg:h-[350px] overflow-hidden shadow-inner">
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

      {/* CONTEÚDO */}
      <div className="bg-gray-100 dark:bg-gray-950 min-h-screen py-10 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-10 text-center text-gray-700 dark:text-gray-100">
            Livros em Destaque
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {livros.map((livro) => (
              <div
                key={livro.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 flex flex-col justify-between transition-colors"
              >
                <div className="flex justify-center mb-4 min-h-[224px]">
                  <img
                    src={livro.imagem}
                    alt={livro.titulo}
                    className="w-full max-w-[140px] h-56 object-contain rounded-lg shadow-inner"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-base font-bold mb-1 text-gray-800 dark:text-gray-100 line-clamp-2">
                    {livro.titulo}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {livro.autor}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs mb-3">
                    {livro.editora}
                  </p>
                  <p className="text-xl font-extrabold text-[#A0180E] mb-4">
                    {livro.preco}
                  </p>
                </div>

                <button
                  onClick={() => adicionarAoCarrinho(livro)}
                  className="bg-[#A0180E] text-white py-2.5 rounded-xl font-semibold shadow-md hover:bg-[#7e130b] transition"
                >
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 dark:bg-black text-gray-300 px-8 py-4 transition-colors">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Livraria. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Protótipo desenvolvido por Kauan Batista / Pedro / Felipe
          </p>
        </div>
      </footer>
    </>
  );
}
