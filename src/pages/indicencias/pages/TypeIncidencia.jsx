import React from "react";
import Navbar from "../../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TypeIncidencia = () => {
  const [sidebarToggle] = useOutletContext();
  return (
    <main className="h-full">
      <Navbar toggle={sidebarToggle} />

      <div className="mainCard">
        {/* ------- */}
        <div className={`text-cyan-900 inline-flex py-2 px-2  text-sm`}>
          <div className="flex ">
            <div className="shrink w-8 h-14">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <div className="shrink w-24 h-14">
              <Link to={"/incidencias/"}>Incidencia</Link>
            </div>

            <div className="shrink w-8 h-14">/</div>
            <div className="shrink w-40 h-14">
              <Link to={"/incidencias/AddIncidencia"}>Reportar incidencia</Link>
            </div>
            <div className="shrink w-8 h-14">/</div>
            <div className="shrink w-64 h-14">
              Tipo de incidencia
            </div>
          </div>
        </div>
        {/* ------- */}

        <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
          <div className="m-2 mb-5">
            <h2 className="font-semibold text-lg">
              Añadir tipo de incidencia
            </h2>
          </div>
          <hr />
          <form className="mt-8">{/* Form Default */}</form>
        </div>
      </div>
      {/* -------- */}
    </main>
  );
};
