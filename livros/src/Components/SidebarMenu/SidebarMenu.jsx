import React, { useState } from "react";
import { Home, User, ShoppingBag } from "lucide-react";

export default function SidebarMenu() {
  const [active, setActive] = useState("Início");

  const menuItems = [
    { name: "Meus dados", icon: <User size={20} /> },
    { name: "Início", icon: <Home size={20} /> },
    { name: "Meus pedidos", icon: <ShoppingBag size={20} /> },
  ];

  return (
    <aside className="h-screen bg-white border-r border-gray-200">
      <div className="container mx-auto py-6">
        <div className="grid gap-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 px-6 py-3 text-gray-700 w-full text-left rounded-md transition
                ${
                  active === item.name
                    ? "bg-orange-50 text-orange-600 font-medium"
                    : "hover:bg-gray-50"
                }`}
            >
              <span
                className={`${
                  active === item.name ? "text-orange-500" : "text-orange-400"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
