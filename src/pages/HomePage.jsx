import Hero from "../components/catalog/Hero";
import Header from "../components/custom/Header";

function HomePage() {
  return (
    <>
      <Header className="w-[90%] max-w-screen-lg mx-auto" />

      <Hero />

      <main className="py-8 mx-auto max-w-screen-lg"></main>
    </>
  );
}

export default HomePage;
