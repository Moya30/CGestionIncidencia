import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import { useOutletContext } from "react-router-dom";
import LinesChart from "../components/Graficos/LinesChart.jsx";
import BarsChart from "../components/Graficos/BarsChart.jsx";
import Title from "../components/Title/Title.jsx";

function Dashboard() {
  const [data, setData] = useState([]);
  const [fot, setFot] = useState([]);
  const [id, setId] = useState(0);

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
      enlace.setAttribute("download", "reporte.pdf"); // Puedes cambiar el nombre del archivo según la extensión esperada
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

  const dataOS = [
    {
      title: "Kredit Konsumer",
      date: "12/Mei/2023",
      os: "23,938",
      gs: "20,900",
      percentage: 200.01,
      color: "cardInfo",
    },
    {
      title: "Kredit Ritel",
      date: "12/Mei/2023",
      os: "3,938",
      gs: "2,900",
      percentage: 190.01,
      color: "cardWarning",
    },
    {
      title: "Kredit KPR & KKB",
      date: "12/Mei/2023",
      os: "190,938",
      gs: "192,900",
      percentage: 99.01,
      color: "cardDanger",
    },
    {
      title: "Kredit UMKM",
      date: "12/Mei/2023",
      os: "2,938",
      gs: "2,900",
      percentage: 100.01,
      color: "cardSuccess",
    },
    {
      title: "Kredit Komersial",
      date: "12/Mei/2023",
      os: "23,938",
      gs: "20,900",
      percentage: 200.01,
      color: "cardLime",
    },
    {
      title: "Kredit BPR & LKM",
      date: "12/Mei/2023",
      os: "3,938",
      gs: "10,900",
      percentage: 210.01,
      color: "cardDanger",
    },
  ];

  useEffect(() => {
    getIncidencias();
  }, []);

  const getFoto = () => {
    fetch(`https://incidencias-fiisi.up.railway.app/api/usuario/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const foto = data.img;
        console.log("sa", foto);
        setFot(data.img);
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

        <Title text={"Informe de los reportes"}></Title>

        <button
          onClick={descargarArchivo}
          class="bg-blue-950 text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Reporte de usuarios</span>
        </button>

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
