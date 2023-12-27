import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateIncidencia from "../../../libs/TypeInciencia/CreateIncidencia";

export const TypeIncidencia = () => {
  const [sidebarToggle] = useOutletContext();

  const [idTipoInci,setIdTipoInci] = useState("");
  const [nombTipoInci,setNombTipoInci] = useState("");
  const [diasTipoInci,setDiasTipoInci] = useState("");
  const [presuTipoInci,setPresuTipoInci] = useState("");
  const [prioridad,setPrioridad] = useState("");
 
  // combo
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get('https://incidencias-fiisi.up.railway.app/api/prioridad')
      .then((response) => {

        setOptions(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API', error);
      });
  }, []);


  const handleSumitChange = async (e) => {
    e.preventDefault();

    const user = await CreateIncidencia(
        idTipoInci,
        nombTipoInci,
        diasTipoInci,
        presuTipoInci,
        prioridad,
    );

    if (user.status === 401) {
      toast.error('Error')
      console.log("sas|")

    } else {
      toast.success('Usuario registrado')

      const esperarYMostrarMensaje = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate(`/Usuario/User`);
      };

      esperarYMostrarMensaje();

    }
  }

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
            <div className="shrink w-64 h-14">Tipo de incidencia</div>
          </div>
        </div>
        {/* ------- */}

        <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
          <div className="m-2 mb-5">
            <h2 className="font-semibold text-lg">Añadir tipo de incidencia</h2>
          </div>
          <hr />
          <form onSubmit={handleSumitChange} className="mt-4">
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="mt-1">
                <label className="text-sm text-gray-800">
                  Nombre de la incidencia
                </label>
                <input
                  id="defaultInput"
                  type="text"
                  name="defaultInput"
                  onChange={(e) => setNombInci(e.target.value)}
                  className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Nombre del tipo de incidencia"
                />
              </div>

              <div className="mt-1">
                <label className="text-sm text-gray-800">
                  Estimación de días a solucionar
                </label>
                <input
                  id="defaultInput"
                  type="text"
                  name="defaultInput"
                  onChange={(e) => setNombInci(e.target.value)}
                  className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Estimación de días"
                />
              </div>

              <div className="mt-1">
                <label className="text-sm text-gray-800">
                  Presupuesto estimado de la solución
                </label>
                <input
                  id="defaultInput"
                  type="text"
                  name="defaultInput"
                  onChange={(e) => setNombInci(e.target.value)}
                  className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Presupuesto estimado"
                />
              </div>

              <div className="mt-1">
                <label className="block text-sm font-medium leading-6">
                  Nivel de prioridad de la incidencia
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border focus:border-emerald-400 py-2 "
                >
                  <option value="">Seleccione el nivel de prioridad</option>
                </select>
              </div>

              <div className="mt-1 flex flex-row gap-2">
                <div className="mt-5 flex flex-row gap-4">
                  <button className="bg-sky-900 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                    Guardar
                  </button>
                </div>
                <div className="mt-5 flex flex-row gap-4">
                  <button
                    onClick={() => navigate("/incidencias")}
                    className="bg-slate-500 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* -------- */}
    </main>
  );
};
