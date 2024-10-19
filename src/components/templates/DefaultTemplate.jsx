import Header from "../custom/Header";

function DefaultTemplate({ children }) {
  return (
    <>
      <Header />

      <main className="p-4">{children}</main>
    </>
  );
}

export default DefaultTemplate;
