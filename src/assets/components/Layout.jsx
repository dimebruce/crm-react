import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-neutral-800 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>

        {/* Creando la navegación optimizada con link */}
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === "/" ? 'text-blue-300' : 'text-white'
            }
              text-2xl block mt-2 hover:text-gray-300`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === "/cliente/nuevo"
                ? "text-blue-300"
                : "text-white"
            }
              text-2xl block mt-2 hover:text-gray-300`}
            to="/cliente/nuevo"
          >
            Nuevo cliente
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
