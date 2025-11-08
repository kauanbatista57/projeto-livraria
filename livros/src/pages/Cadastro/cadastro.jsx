export default function Cadastro() {
  return (
    <>
      <div className="grid grid-cols-12 min-h-screen">
        
        
      {/* LADO ESQUERDO */}
      <div className="col-span-12 md:col-span-6 bg-slate-500 flex flex-col justify-center items-center text-white px-8 py-10">
        <img
          src="/assets/icon.png"
          alt="Logo"
          className="w-40 mb-10"
        />
        <h1 className="text-5xl font-light mb-2">Editora de</h1>
        <h1 className="text-6xl font-bold">Livros</h1>
      </div>

      {/* LADO DIREITO */}
      <div className="col-span-12 md:col-span-6 bg-gray-50 flex flex-col justify-center px-10 md:px-20">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Vamos começar?
          </h2>
          <p className="text-gray-700 mb-8">
           Crie sua conta na nossa livraria agora!
          </p>

          {/* FORMULÁRIO */}
          <form className="space-y-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                placeholder="Informe seu usuário"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="text"
                placeholder="Informe seu E-mail"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Senha
              </label>
              <input
                type="password"
                placeholder="Informe sua senha"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#A0180E] text-white font-semibold rounded-full hover:bg-[#7e130b] transition"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
