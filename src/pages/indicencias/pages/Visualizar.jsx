import axios from "axios";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../components/Navbar/Index";
import Title from "../components/Title";

import { useEffect, useState } from "react";
import Goback from "../../../components/Other/Goback";

function Visualizar() {
  const [sidebarToggle] = useOutletContext();

  const [detalis, setDetalis] = useState(null);

  const query = new URLSearchParams(window.location.search);

  const incidenciaID = query.get("incidenciaID");

  useEffect(() => {
    const endPonit = `https://incidencias-fiisi.up.railway.app/api/incidencia?id=${incidenciaID}`;

    console.log("Error", endPonit);

    axios
      .get(endPonit)
      .then((response) => {
        const apiData = response.data;

        console.log("CONSOLA", apiData);

        setDetalis(apiData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        <div className="mainCard">
          {/* BOTON REGRESAR */}
          <Goback />

          {/* TITULO */}
          <Title text={"Visualizar incidencia"}></Title>

          {/* FORM */}
          <div className="border w-full border-gray-200 bg-white py-3 px-16 rounded-md">
            {detalis && (
              <>
                <form>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">

                    
                    {/* ------------------- */}
                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Área:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.incidencia.salon.area.nombArea}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Salón:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.incidencia.salon.nombSalon}
                      />
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Tipo de incidencia:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.incidencia.tipoIncidencia.nombTipoInci}
                      />
                    </div>
                  </div>
                  {/* ------------------------- */}


                  <div className="grid gap-4 grid-cols-2">
                    {/* incidencia */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Creación:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.incidencia.fechaInci}
                      />
                    </div>

                    {/* Asunto */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Usuario:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.incidencia.usuario.nombUsua}
                      />
                    </div>

                    {/* Usuario */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        N° Incidencia:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.incidencia.idInci}
                      />
                    </div>

                    {/* Tipo de seguimiento */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Asunto:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.incidencia.nombInci}
                      />
                    </div>

                    {/* ------------------------- */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Dias transcurridos:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.diasSolucion}
                      />
                    </div>

                    
                    {/* ------------------------- */}


                  </div>
                  {/* Solución al caso:  */}
                  <div className="mt-6">
                    <label
                      htmlFor="largeInput"
                      className="text-base text-gray-600"
                    >
                      Descripción del caso:
                    </label>
                    <textarea
                      id="message"
                      detaliss="4"
                      className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                      value={detalis.incidencia.descInci}
                    ></textarea>
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

export default Visualizar;
