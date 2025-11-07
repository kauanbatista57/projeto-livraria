import { ShoppingBag, User } from "lucide-react";
export default function Home() {
  const livros = [
    {
      id: 1,
      titulo: "Coração sem Medo",
      autor: "Itamar Vieira Junior",
      editora: "Todavia",
      preco: "R$ 89,90",
      imagem:
        "https://m.media-amazon.com/images/I/61qjVYJXHnL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      titulo: "Birds a Photicular Book",
      autor: "Dan Kainen",
      editora: "Workman Publishing",
      preco: "R$ 216,00",
      imagem:
        "https://m.media-amazon.com/images/I/91H8d3rO0jL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      titulo: "Diário de Um Banana 20 - Festa Insana",
      autor: "Jeff Kinney",
      editora: "Vergara & Riba",
      preco: "R$ 69,90",
      imagem:
        "https://m.media-amazon.com/images/I/81FdA2KzTtL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      titulo: "Bugs a Photicular Book",
      autor: "Dan Kainen",
      editora: "Workman Publishing",
      preco: "R$ 216,00",
      imagem:
        "https://m.media-amazon.com/images/I/91AVK2rCKmL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 5,
      titulo: "Guinness World Records 2026",
      autor: "Guinness World Records",
      editora: "Harper Kids",
      preco: "R$ 149,90",
      imagem:
        "https://m.media-amazon.com/images/I/81jM8YpgPOL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 6,
      titulo: "O Homem de Giz",
      autor: "C. J. Tudor",
      editora: "Intrínseca",
      preco: "R$ 54,90",
      imagem:
        "https://m.media-amazon.com/images/I/81D1Wc7JcrL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 7,
      titulo: "A Biblioteca da Meia-Noite",
      autor: "Matt Haig",
      editora: "Bertrand Brasil",
      preco: "R$ 62,00",
      imagem:
        "https://m.media-amazon.com/images/I/81Qx9V4uR1L._AC_UF1000,1000_QL80_.jpg",
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
        "https://m.media-amazon.com/images/I/71eWfTQmT-L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 10,
      titulo: "As Aventuras de Sherlock Holmes",
      autor: "Arthur Conan Doyle",
      editora: "Principis",
      preco: "R$ 39,90",
      imagem:
        "https://m.media-amazon.com/images/I/81X6+HbSvbL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 11,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      editora: "HarperCollins",
      preco: "R$ 29,90",
      imagem:
        "https://m.media-amazon.com/images/I/81p6YpTnCwL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 12,
      titulo: "O Código Da Vinci",
      autor: "Dan Brown",
      editora: "Arqueiro",
      preco: "R$ 74,90",
      imagem:
        "https://m.media-amazon.com/images/I/71s9Woz+FNL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 13,
      titulo: "Os Sete Maridos de Evelyn Hugo",
      autor: "Taylor Jenkins Reid",
      editora: "Paralela",
      preco: "R$ 64,90",
      imagem:
        "https://m.media-amazon.com/images/I/81IuY-2tQxL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 14,
      titulo: "Torto Arado",
      autor: "Itamar Vieira Junior",
      editora: "Todavia",
      preco: "R$ 84,90",
      imagem:
        "https://m.media-amazon.com/images/I/81CwZ1l0xvL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 15,
      titulo: "O Conto da Aia",
      autor: "Margaret Atwood",
      editora: "Rocco",
      preco: "R$ 72,00",
      imagem:
        "https://m.media-amazon.com/images/I/81w+9WmV5jL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

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

            <button className="relative">
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
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
                <button className="bg-[#A0180E] text-white py-2 rounded-lg hover:bg-[#7e130b] transition">
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-300 px-8 py-4 ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Livraria. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Desenvolvido por Kauan Batista / Pedro / Felipe
        </p>
      </div>
    </footer>
    </>
  );
}
