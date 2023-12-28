import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import { useOutletContext } from "react-router-dom";
import {LinesChart} from "../components/Graficos/LinesChart.jsx";
import {BarsChart} from "../components/Graficos/BarsChart.jsx";
import Title from "../components/Title/Title.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const [data, setData] = useState([]);
  const [fot, setFot] = useState("");
  const [id, setId] = useState(0);

  const descargarSolucion = async () => {
    try {
      const respuesta = await axios.get(
        "https://incidencias-fiisi.up.railway.app/api/reporte/solucion",
        {
          responseType: "blob", // Especificamos que esperamos un archivo binario
        }
      );

      // Crear un enlace temporal para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([respuesta.data]));
      const enlace = document.createElement("a");
      enlace.href = url;
      enlace.setAttribute("download", "resportesoluciones.pdf"); // Puedes cambiar el nombre del archivo según la extensión esperada
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

  const descargarArchivo = async () => {
    try {
      const respuesta = await axios.get(
        "https://incidencias-fiisi.up.railway.app/api/usuario/reporte",
        {
          responseType: "blob", // Especificamos que esperamos un archivo binario
        }
      );

      // Crear un enlace temporal para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([respuesta.data]));
      const enlace = document.createElement("a");
      enlace.href = url;
      enlace.setAttribute("download", "usuariosregistrados.pdf"); // Puedes cambiar el nombre del archivo según la extensión esperada
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

  const descargarIncidencias = async () => {
    try {
      const respuesta = await axios.get(
        "https://incidencias-fiisi.up.railway.app/api/incidencia/reporte",
        {
          responseType: "blob", // Especificamos que esperamos un archivo binario
        }
      );

      // Crear un enlace temporal para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([respuesta.data]));
      const enlace = document.createElement("a");
      enlace.href = url;
      enlace.setAttribute("download", "incidencias.pdf"); // Puedes cambiar el nombre del archivo según la extensión esperada
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

  useEffect(() => {
    const ids = localStorage.getItem("idUsua");
    setId(ids);
    console.log(ids);
    getFoto();
  }, [id]);

  const avatar =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  useEffect(() => {
    getIncidencias();
  }, []);

  const getFoto = () => {
    fetch(`https://incidencias-fiisi.up.railway.app/api/usuario/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const foto = data.img.urlImg;
        console.log("sa", foto);
        setFot(foto);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getIncidencias = () => {
    fetch("https://incidencias-fiisi.up.railway.app/api/incidencia")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [sidebarToggle] = useOutletContext();

  const nombre = localStorage.getItem("nombre");
  const nom = sessionStorage.getItem("rol");

  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={fot}
          user={{ name: nombre }}
          nomb={nom}
        />

        <div className="mainCard">
          <Title text={"Informe de los reportes"}></Title>

          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <p>Decarga de documentos: </p>
            <div class="flex justify-center">
              <div className="pr-4">
                {/* -----USUARIOS------*/}
                <button
                  onClick={descargarArchivo}
                  className="bg-sky-900 border-sky-900 text-gray-100 px-3 py-2 mt-5 mb-4 rounded-lg  text-sm flex gap-2 items-center"
                >
                  <div>
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                  <span>Reporte de usuarios</span>
                </button>
                {/* -----------*/}
              </div>

              <div className="pr-4">
                {/* -----USUARIOS------*/}
                <button
                  onClick={descargarIncidencias}
                  className="bg-sky-900 border-sky-900 text-gray-100 px-3 py-2 mt-5 mb-4 rounded-lg  text-sm flex gap-2 items-center"
                >
                  <div>
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                  <span>Reporte de incidencias</span>
                </button>
                {/* -----------*/}
              </div>

              <div className="pr-4">
                {/* -----USUARIOS------*/}
                <button
                  onClick={descargarSolucion}
                  className="bg-sky-900 border-sky-900 text-gray-100 px-3 py-2 mt-5 mb-4 rounded-lg  text-sm flex gap-2 items-center"
                >
                  <div>
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                  <span>Reporte de soluciones</span>
                </button>
                {/* -----------*/}
              </div>
            </div>
          </div>
        </div>

        <div className=" mainCard ">
          <h1 className="text-slate-500 text-base md:text-lg ">Gráficos</h1>

          {/* <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div> */}
        </div>
        <div className=" grid grid-cols-2 gap-4 p-">
          <div className="relative">
            <LinesChart />
          </div>
          <div className="relative">
            <BarsChart />
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
