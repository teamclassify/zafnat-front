import Header from "../custom/Header";

function AdminTemplate({ children }) {
  return (
    <>
      <Header />

      <main className="py-8 mx-auto max-w-screen-lg px-4">{children}</main>
    </>
  );
}

export default AdminTemplate;
