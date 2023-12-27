import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import Navbar from "../../../components/Navbar/Index";
import Title from "../components/Title";
import axios from "axios";
import { show_alerta } from "../../../components/Alerta/Alertas";
import Goback from "../../../components/Other/Goback";


function Solucion() {


  const [sidebarToggle] = useOutletContext();
  const [idInci, setIdInci] = useState(0);
  const [descSolu, setDescSolu] = useState("");
  const [costoSolu, setCostoSolu] = useState("");
  const [idUsua, setIdsua] = useState("");

  const incidi = 15;

  const navigate = useNavigate();

  /*Solution */
  const [solution, setSolution] = useState(null);
  const query = new URLSearchParams(window.location.search);
  const incidenciaID = query.get("incidenciaID");
  let ids;
  useEffect(() => {
    ids = localStorage.getItem('idUsua');
    setIdsua(ids);
    console.log("ID SOLUCION ", ids);

    axios
      .get(
        `https://incidencias-fiisi.up.railway.app/api/incidencia?id=${incidenciaID}`
      )
      .then((response) => {
        setSolution(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const data = {

    idInci: incidenciaID,
    descSolu,
    costoSolu,
    idUsua: idUsua
  };

  const handleSumitChange = async (e) => {
    e.preventDefault();

    axios.post(
      "https://incidencias-fiisi.up.railway.app/api/solucion", data

    )
      .then(function (response) {
        if (response.data === "YA EXISTE") {
          show_alerta("Esta incidencia ya esta resuelta ", "warning");

        } else {
          show_alerta("Solucionado", "success");
          navigate(`/incidencias`);
        }

      })
  };

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        <div className="mainCard">
          {/* BOTON REGRESAR */}
          <Goback />

          {/* TITULO */}
          <Title text={"Solución de la Incidencia"}></Title>

          {/* FORM */}
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            {solution && (
              <>
                <form onSubmit={handleSumitChange}>
                  <div className="grid gap-5 grid-cols-2">
                    {/* Incidencia numero*/}
                    <div className="mt-6">
                      <label className="text-base text-gray-600">
                        N° Incidencia
                      </label>
                      <input
                        id="defaultInput"
                        type="number"
                        name="defaultInput"
                        className="text-base placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={(solution.incidencia.idInci)}
                        onChange={(e) => setIdInci(e.target.value)}
                        readOnly
                      />
                    </div>

                    <div className="mt-6">
                      <label className="text-base text-gray-600">
                        Usuario que registro:{" "}
                      </label>
                      <input
                        id="defaultInput"
                        type="text"
                        name="defaultInput"
                        className="text-base placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={solution.incidencia.usuario.nombUsua}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 grid-cols-2">
                    <div className='mt-4'>
                      <label className="text-sm text-gray-600">
                        Nombre de la incidencia {" "}
                      </label>
                      <input
                        id="nombInci"
                        type="text"
                        name="nombInci"
                        // onChange={(e) => setNombPers(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={solution.incidencia.nombInci}
                        readOnly
                      />

                    </div>
                  </div>
                  <div className='mt-4'>
                    <label className="text-sm text-gray-600">
                      Asunto de la incidencia {" "}
                    </label>
                    <input
                      id="asuntoInci"
                      type="text"
                      name="asuntoInci"
                      // onChange={(e) => setNombPers(e.target.value)}
                      className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                      value={solution.incidencia.descInci}
                      readOnly
                    />
                  </div>

                  <div className="mt-6">
                    <label className="text-base text-gray-600">Costo</label>
                    <input
                      id="costo"
                      type="number"
                      name="costo"
                      onChange={(e) => setCostoSolu(e.target.value)}
                      className="text-base placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                      placeholder="Ingrese el costo de la solución"
                    />
                  </div>


                  <div className="mt-6">
                    <label
                      htmlFor="largeInput"
                      className="text-base text-gray-600"
                    >
                      Solución al caso:
                    </label>
                    <textarea
                      id="message"
                      detaliss="4"
                      className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                      // value={detalis.descInci}
                      onChange={(e) => setDescSolu(e.target.value)}
                      placeholder="Ingrese la solución de la incidencia"
                    ></textarea>
                  </div>
                  <div className="mt-1 flex flex-row gap-2">
                    <div className="mt-5 flex flex-row gap-4">
                      <button className="bg-sky-900 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                        Guardar
                      </button>
                    </div>
                    <div className="mt-5 flex flex-row gap-4">
                      <button
                        onClick={() =>
                          navigate("/incidencias")}
                        className="bg-slate-500 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm ">
                        Cancelar
                      </button>

                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Solucion;
