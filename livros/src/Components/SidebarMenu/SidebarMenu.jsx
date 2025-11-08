import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, ShoppingBag } from "lucide-react";

export default function SidebarMenu() {
  const [active, setActive] = useState("Meus dados");

  const menuItems = [
    { name: "Meus dados", icon: <User size={20} />, path: "/usuario"},
    { name: "Início", icon: <Home size={20} />, path: "/" },
    { name: "Meus pedidos", icon: <ShoppingBag size={20} />, path: "/pedidos" },
  ];

  return (
    <aside className="h-screen bg-white border-r border-gray-200">
      <div className="container mx-auto py-6">
        <div className="grid gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 px-6 py-3 text-gray-700 w-full text-left rounded-md transition
                ${
                  active === item.name
                    ? "bg-orange-50 text-[#A0180E] font-medium"
                    : "hover:bg-gray-50"
                }`}
            >
              <span
                className={`${
                  active === item.name ? "text-[#A0180E]" : "text-[#A0180E]"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
