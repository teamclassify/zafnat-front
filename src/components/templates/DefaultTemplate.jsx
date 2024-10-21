import Header from "../custom/Header";

function DefaultTemplate({ children }) {
  return (
    <>
      <Header />

      <main className="py-8 mx-auto max-w-screen-lg">{children}</main>
    </>
  );
}

export default DefaultTemplate;
