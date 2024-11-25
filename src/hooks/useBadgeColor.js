export default function getBadgeColor(status) {
  switch (status) {
    case "Completado":
      return "bg-green-700";
    case "Pendiente":
      return "bg-yellow-600";
    case "En proceso":
      return "bg-blue-700";
    case "Rechazado":
      return "bg-red-700";
    default:
      return "bg-gray-500";
  }
}
