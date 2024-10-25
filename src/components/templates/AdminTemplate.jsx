import useUser from "../../hooks/useUser";
import Header from "../custom/Header";

function AdminTemplate({ children }) {
  const { loading } = useUser();

  // TODO: Implementar un loader
  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <Header />

      <main className="py-8 mx-auto max-w-screen-lg px-4">{children}</main>
    </>
  );
}

export default AdminTemplate;
