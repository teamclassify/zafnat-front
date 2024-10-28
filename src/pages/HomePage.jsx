import Hero from "../components/catalog/Hero";
import NewProductsSection from "../components/catalog/NewProductsSection";
import Footer from "../components/custom/Footer";
import Header from "../components/custom/Header";

function HomePage() {
  return (
    <>
      <Header className="w-[90%] max-w-screen-lg mx-auto" />

      <Hero />

      <main className="my-14 w-[90%] mx-auto max-w-screen-lg">
        <NewProductsSection />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
