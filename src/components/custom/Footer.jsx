import { Link } from "wouter";
import { Button } from "../ui/button";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20 relative">
      <img
        src="/assets/black-logo.png"
        className="absolute inset-0 w-full h-full object-contain opacity-5 z-0"
        alt="Logo de fondo"
      />
      <div className="relative z-10">
        <div className="mt-12 mb-32 w-[90%] mx-auto max-w-screen-lg grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] relative z-10">
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
            <Link to="/acerca-de">
              <Button variant="link" className="text-gray-300">
                Acerca de ZafNat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
