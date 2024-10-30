function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20">
      <div className="mt-12 mb-32 w-[90%] mx-auto max-w-screen-lg grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        <div>
          <h4 className="text-2xl font-bold mb-2">Ayuda</h4>
          <p className="text-gray-300">Envios</p>
          <p className="text-gray-300">Preguntas frecuentes</p>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-2">Contacto</h4>
          <p className="text-gray-300">+57 301 400 32 32</p>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-2">Quienese somos</h4>
          <p className="text-gray-300">Acerca de ZafNat</p>
        </div>
      </div>

      <div className="w-[90%] mx-auto max-w-screen-lg text-center font-bold">
        <p>© 2024 ZAF NAT.S.A.S </p>
      </div>
    </footer>
  );
}

export default Footer;
