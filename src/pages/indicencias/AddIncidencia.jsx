import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Index";
import { useNavigate, useOutletContext } from "react-router-dom";
import Goback from "../../components/Other/Goback";
import AddIncidenc from "../../libs/Incidencia/AddIncidenc";
import { show_alerta } from "../../components/Alerta/Alertas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ButtonGen } from "../../components/Other/ButtonGen";
export const AddIncidencia = () => {
  const [sidebarToggle] = useOutletContext();
  const navigate = useNavigate();

  const [nombInci, setNombInci] = useState("");
  const [descInci, setDescInci] = useState("");

  //area
  const [area, setArea] = useState("");
  const [options, setOptions] = useState([]);
  // capturarIdArea
  const [idare, setIdare] = useState(0);

  //salon
  const [salon, setSalon] = useState("");
  const [optionSalon, setOptionSalon] = useState([]);
  const [idSalon, setIdSalon] = useState(0);
  //console.log(salon.idSalon);

  //Tipo incidencia
  const [tipoincidencia, setTipoincidencia] = useState("");
  const [optionTipoIncidencia, setOptionTipoIncidencia] = useState([]);
  const [idTipoInci, setIdTipoInci] = useState(0);

  // idUser
  const [idUsuario, setIdUsuario] = useState(0);

  const handleSumitChange = async (e) => {
    e.preventDefault();

    const incidencia = await AddIncidenc(
      idSalon,
      idTipoInci,
      nombInci,
      descInci,
      idUsuario
    );
    show_alerta("Incidencia Registrada", "success");
    if (incidencia.message) {
      console.log("error en grabado");
      return;
    }
    navigate(`/incidencias`);
  };

  useEffect(() => {
    const ids = localStorage.getItem("idUsua");
    setIdUsuario(ids);
    console.log(ids);
  }, []);

  useEffect(() => {
    getUsuario();
  }, [options]);

  const getUsuario = () => {
    fetch("https://incidencias-fiisi.up.railway.app/api/area")
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setIdare("");
  };

  useEffect(() => {
    getTipoIncidencia();
  }, []);

  const getTipoIncidencia = () => {
    fetch("https://incidencias-fiisi.up.railway.app/api/tipoincidencia")
      .then((response) => response.json())
      .then((data) => {
        setOptionTipoIncidencia(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setIdare("");
  };

  const handleSeleccionChange = (event) => {
    //setArea(event.target.value)
    const opcion = event.target.value; // Valor de la opción seleccionada
    setArea(opcion); // Actualiza el estado con la opción seleccionada
    const opcionId = options.find((item) => item.nombArea === opcion).idArea; // Busca el ID de la opción seleccionada
    setIdare(opcionId); // Actualiza el estado con el ID
    console.log("ids", opcionId);
  };

  //capturar id de salon

  const handleIdSalon = (event) => {
    //setArea(event.target.value)
    const opcion = event.target.value; // Valor de la opción seleccionada
    setSalon(opcion); // Actualiza el estado con la opción seleccionada
    const opcionId = optionSalon.find(
      (item) => item.nombSalon === opcion
    ).idSalon; // Busca el ID de la opción seleccionada
    setIdSalon(opcionId); // Actualiza el estado con el ID
    console.log("ids SALON", opcionId);
  };

  const handleIdTipoIncidencia = (event) => {
    //setArea(event.target.value)
    const opcion = event.target.value; // Valor de la opción seleccionada
    setTipoincidencia(opcion); // Actualiza el estado con la opción seleccionada
    const opcionId = optionTipoIncidencia.find(
      (item) => item.nombTipoInci === opcion
    ).idTipoInci; // Busca el ID de la opción seleccionada
    setIdTipoInci(opcionId); // Actualiza el estado con el ID
    console.log("ids incidentipo: ", opcionId);
  };

  const getSalon = () => {
    fetch(`https://incidencias-fiisi.up.railway.app/api/salon/area/${idare}`)
      .then((response) => response.json())
      .then((data) => {
        setOptionSalon(data);
        console.log("info salon", data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (idare) {
      getSalon();
      setIdare("");
    }
  }, [idare]);

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <Goback />

          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <div className="m-2 mb-5">
              <h2 className="font-semibold text-lg"> Registrar incidencias </h2>
            </div>
            <hr />
            <form onSubmit={handleSumitChange} className="mt-8">
              {/* Form Default */}
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="mt-1">
                  <label className="block text-sm font-medium leading-6">
                    Área
                  </label>

                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border focus:border-emerald-400 py-2"
                    value={area}
                    onChange={handleSeleccionChange}
                  >
                    <option value="">Seleccione un área </option>
                    {options.map((option) => (
                      <option key={option.idArea} value={option.nombArea}>
                        {option.nombArea}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-1">
                  <label className="block text-sm font-medium leading-6">
                    Salón
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border focus:border-emerald-400 py-2   "
                    value={salon}
                    onChange={handleIdSalon}
                  >
                    <option value="">Seleccione un salon</option>

                    {optionSalon.map((option) => (
                      <option key={option.idSalon} value={option.value}>
                        {option.nombSalon}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-1">
                  <label className="block text-sm font-medium leading-6">
                    Tipo de incidencia
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border focus:border-emerald-400 py-2 "
                    value={tipoincidencia}
                    onChange={handleIdTipoIncidencia}
                  >
                    <option value="">Seleccione el tipo de incidencia</option>
                    {optionTipoIncidencia.map((option) => (
                      <option key={option.idTipoInci} value={option.value}>
                        {option.nombTipoInci}
                      </option>
                    ))}
                  </select>

                  <ButtonGen
                    link={"/incidencias/AddIncidencia/TypeIncidencia"}
                    name={faPlus}
                  ></ButtonGen>
                </div>
                <div>
                  <label className="text-sm text-gray-800">
                    Nombre incidencia
                  </label>
                  <input
                    id="defaultInput"
                    type="text"
                    name="defaultInput"
                    onChange={(e) => setNombInci(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="Nomb incidencia"
                  />
                </div>
              </div>
              <div className="grid  gap-2">
                <div>
                  <label className="text-sm text-gray-800 ">Descripción</label>
                  <textarea
                    id="User"
                    type="text"
                    name="user"
                    onChange={(e) => setDescInci(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="descripción de la incidencia"
                  />
                </div>
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
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
