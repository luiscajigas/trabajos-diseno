export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white rounded-2xl shadow-xl overflow-hidden relative w-300 h-200">
        
        {/* texto recuperar cuenta */}
        <div className="absolute top-4 right-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="text-black font-semibold hover:underline">Sign up</a>
        </div>

        <article className="grid grid-cols-1 md:grid-cols-2 pr-20 h-full">
          
          {/* regtangulo de la imagen */}
          <figure className="bg-gray-300 flex items-center justify-center rounded-2xl mt-2 ml-2 h-195 w-120">
            <img src="/imaPrincipal.png" className="h-150 object-cover translate-x-3" />
          </figure>

          {/* apartado de daos de usuario */}
          <section className="flex flex-col justify-center p-10">
            
            {/* texto de abrir cuenta */}
            <h3 className="text-4xl font-bold text-black mb-6">Sign in</h3>
            <span className="font-semibold text-black mr-2">Sign in with Open account</span>

            {/* opciones de cuenta */}
            <div className="flex gap-4 mb-8 mt-6">
              {/* G */}
              <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 border-gray-200 text-black hover:bg-gray-50">
                <img src="/Google.png" alt="Google" className="w-5 h-5" />
                Google
              </button>

              {/* A */}
              <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 border-gray-200 text-black hover:bg-gray-100">
                <img src="/aple.svg" alt="Apple" className="w-5 h-5" />
                Apple ID
              </button>
            </div>

            {/* texto separdor */}
            <p className="mb-10 px-1 text-sm font-semibold text-black">
              Or continue with email address
            </p>

            {/* aparatdo escribir datos*/}
            <form className="flex flex-col gap-4">

              {/* C */}
              <label className="flex items-center bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 gap-2">
                <img src="/correo.png" alt="Email" className="w-5 h-5" />
                <input className="flex-1 text-gray-500 outline-none bg-gray-100" />
              </label>

              {/* Con */}
              <label className="flex items-center bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 gap-2">
                <img src="/contra.png" alt="Password" className="w-5 h-5" />
                <input type="password" className="flex-1 text-gray-500 outline-none bg-gray-100" />
              </label>

              {/* INICIAR*/}
              <button type="submit" className="bg-blue-700 text-white rounded-4xl py-3 font-semibold hover:bg-blue-700">
                Start trading
              </button>
            </form>
          </section>
        </article>
      </section>
    </main>
  );
}
