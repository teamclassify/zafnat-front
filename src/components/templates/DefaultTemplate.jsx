import Header from "../custom/Header";

function DefaultTemplate({ children }) {
  return (
    <>
      <Header className="w-full max-w-screen-lg mx-auto" />

      <main className="py-8 mx-auto max-w-screen-lg">{children}</main>
    </>
  );
}

export default DefaultTemplate;
