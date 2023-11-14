import axios from "axios";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../components/Navbar/Index";
import Title from "../../components/Title/Title";
import Goback from "../../components/Title/Goback";
import { useEffect, useState } from "react";

function ViewUser() {
  const [sidebarToggle] = useOutletContext();
  const [detalis, setDetalis] = useState(null);
  const query = new URLSearchParams(window.location.search);
  const userID = query.get("userID");

  const fetchData = () => {
    return axios
      .get(`https://incidencias-fiisi.up.railway.app/api/usuario/${userID}`)
      .then((response) => {
        const apiData = response.data;
        console.log("eeorr", apiData);
        setDetalis(apiData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        <div className="mainCard">
          {/* BOTON REGRESAR */}
          <Goback rule={"/Usuario/User"}></Goback>

          {/* TITULO */}
          <Title text={"Datos del usuario"}></Title>

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
                        Id User:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.usuario.idUsua}
                      />
                      
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Nombre del Usuario:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.usuario.nombUsua}
                      />
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Nombre completo del usuario:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={
                          detalis.usuario.persona.nombPers +
                          " " +
                          detalis.usuario.persona.appaPers +
                          " " +
                          detalis.usuario.persona.apmaPers
                        }
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
                        Documento de Identidad:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.usuario.persona.dniPers}
                      />
                    </div>

                    {/* Asunto */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Número de telefono:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.usuario.persona.telfPers}
                      />
                    </div>

                    {/* Usuario */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Dirección de correo electronico:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.usuario.persona.emailPers}
                      />
                    </div>

                    {/* Tipo de seguimiento */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Rol:
                      </label>

                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.usuario.persona.rol.nombRol}
                      />
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
export default ViewUser;
