import { FiArrowRight } from "react-icons/fi";
import { Link } from "wouter";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-76px)] flex items-center relative">
      <img
        src="/assets/hero.png"
        className="w-full h-full absolute object-cover"
      />
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute z-10"></div>
      <div className="mx-auto w-[90%] max-w-screen-lg flex items-center justify-center text-center gap-8 md:text-left md:justify-between flex-col relative z-20 text-white md:flex-row">
        <h1 className="text-6xl uppercase font-bold">
          Preparate <br /> para lo nuevo
        </h1>

        <Link to="/catalogo">
          <Button
            variant="ghost"
            className="bg-white text-black rounded-full w-20 h-20 text-6xl"
          >
            <FiArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
