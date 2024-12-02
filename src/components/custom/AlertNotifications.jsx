export default function AlertNotification({ alerts }) {
  if (alerts.length === 0) return null;

  return (
    <div className="mt-6 p-5 bg-red-100 border border-red-300 rounded-md">
      <h3 className="font-semibold text-red-800">⚠️ Productos con bajo stock:</h3>
      <ul className="mt-3">
        {alerts.map((alert) => (
          <li key={alert.id} className="flex justify-between py-1">
            <span>{alert.name}</span>
            <span className="font-bold text-red-700">
              Existencias: {alert.quantity}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
