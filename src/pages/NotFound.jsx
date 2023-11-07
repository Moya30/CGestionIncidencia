import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

function NotFound() {
  const [sidebarToggle] = useOutletContext();
  return (
    <main className="h-full">
      <Navbar toggle={sidebarToggle} />

      {/* Main Content */}
      <div className="mainCard">
        <h1 className="text-xl font-semibold">No tiene permisos para ver esta página</h1>
        <p className="mt-2">Ponganse en contacto con el admin.</p>
      </div>
    </main>
  );
}

export default NotFound;
