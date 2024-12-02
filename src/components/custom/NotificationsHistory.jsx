import { FaRegBell } from "react-icons/fa";
import { useState } from "react";

export function NotificationsHistory({ history, setHistory }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHistory = () => {
    setIsOpen(!isOpen);
  };

  const clearAllNotifications = () => {
    setHistory([]);
    localStorage.removeItem("notifications");
  };
  
  return (
    <div className="relative">
      <button onClick={toggleHistory} className="p-2">
        <FaRegBell size={24} />
      </button>

      {history.length > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {history.length}
        </div>
      )}

      {isOpen && (
        <div className="absolute top-10 right-0 bg-white shadow-lg p-4 rounded-md w-64">
          <h3 className="font-bold text-sm">Historial de Notificaciones</h3>
          <button
            onClick={clearAllNotifications}
            className="bg-red-500 text-white py-1 px-3 rounded mt-3"
          >
            Eliminar todas
          </button>
          <ul className="space-y-2 mt-2">
            {history.map((item, index) => (
              <li key={index} className="text-sm">
                {item.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
