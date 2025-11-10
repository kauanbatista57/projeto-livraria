import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, ShoppingBag } from "lucide-react";

export default function SidebarMenu() {
  const location = useLocation(); // pega a rota atual

  const menuItems = [
    { name: "Meus dados", icon: <User size={20} />, path: "/usuario" },
    { name: "Início", icon: <Home size={20} />, path: "/" },
    { name: "Meus pedidos", icon: <ShoppingBag size={20} />, path: "/pedidos" },
  ];

  return (
    <aside className="h-screen bg-white border-r border-gray-200">
      <div className="container mx-auto py-6">
        <div className="grid gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 text-gray-700 w-full text-left rounded-md transition
                  ${
                    isActive
                      ? "bg-[#FEEBE7] text-[#A0180E] font-medium"
                      : "hover:bg-gray-50"
                  }`}
              >
                <span
                  className={`${
                    isActive ? "text-[#A0180E]" : "text-[#A0180E]"
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
