import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, ShoppingBag } from "lucide-react";

export default function SidebarMenu() {
  const location = useLocation();

  const menuItems = [
    { name: "Meus dados", icon: <User size={20} />, path: "/usuario" },
    { name: "Início", icon: <Home size={20} />, path: "/" },
    { name: "Meus pedidos", icon: <ShoppingBag size={20} />, path: "/pedidos" },
  ];

  return (
    <aside className="h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto py-6">
        <div className="grid gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 w-full text-left rounded-md transition-colors duration-300
                  ${isActive
                    ? "bg-[#FEEBE7] dark:bg-[#2D1C19] text-[#A0180E] font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
              >
                <span
                  className={`${isActive ? "text-[#A0180E]" : "text-[#A0180E]"
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
