import { useState } from "react";
import { Button } from "../../../components/ui/button";
import HeaderTab from "./HeaderTab";

function ReturnsTab({ productId }) {
  const returns = [
    {
      id: 1,
      productName: "Jean Ochentero",
      price: "$102.000",
      date: "2021-08-01",
    },
  ];

  const [selectedReason, setSelectedReason] = useState("");
  const [comments, setComments] = useState("");

  console.log({
    productId,
  });

  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedReason) {
      alert("Por favor selecciona un motivo para la devolución.");
      return;
    }
    console.log("Motivo:", selectedReason);
    console.log("Comentarios:", comments);
    alert("Solicitud enviada correctamente.");
  };

  return (
    <div>
      <HeaderTab title="Devolución de Producto" />

      {returns.length > 0 ? (
        <div className="grid gap-4 dis">
          <div className="border p-4 rounded max-w-lg">
            <header className="flex gap-2 mb-2">
              <div>
                <img
                  src="/assets/product.png"
                  className="w-full max-w-[100px]"
                />
              </div>

              <div>
                <p>{returns[0].productName}</p>
                <time className="text-xs text-zinc-400">{returns[0].date}</time>
                <p>{returns[0].price}</p>
              </div>
            </header>
          </div>

          <div className="border p-4 rounded max-w-lg">
            <p>¿Tuviste un problema con tu pedido? ¡Cuéntanos!</p>
            <select
              className="border p-2 w-full mt-2"
              value={selectedReason}
              onChange={handleReasonChange}
            >
              <option value="" disabled>
                Selecciona un motivo
              </option>
              <option value="No era lo que esperaba">
                No era lo que esperaba
              </option>
              <option value="Producto defectuoso">Producto defectuoso</option>
              <option value="Error en el pedido">Error en el pedido</option>
            </select>
            <textarea
              className="border p-2 w-full mt-2"
              placeholder="Describe tu problema"
              value={comments}
              onChange={handleCommentsChange}
            ></textarea>
            <Button onClick={handleSubmit}>Enviar</Button>
          </div>
        </div>
      ) : (
        <p>No existen productos para devolver.</p>
      )}
    </div>
  );
}

export default ReturnsTab;
