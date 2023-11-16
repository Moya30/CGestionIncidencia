import React, { useEffect, useState } from "react";
//import StatisticWidget from "../components/Widget/Statistic.jsx";
//import AchievementWidget from "../components/Widget/Achievment.jsx";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
import LinesChart from "../components/Graficos/LinesChart.jsx";
import BarsChart from "../components/Graficos/BarsChart.jsx";

function Dashboard() {

  const [data, setData] = useState([])
  const [fot, setFot] = useState("");
  const [id, setId] = useState("");

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
  let ids;
  useEffect(() => {

    ids = localStorage.getItem('idUsua');
    setId(ids);

  }, []);
  useEffect(() => {
    getFoto();

  }, []);


  const getFoto = () => {
    fetch(`https://incidencias-fiisi.up.railway.app/api/usuario/${1}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFot(data.img);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }



  const getIncidencias = () => {
    fetch('https://incidencias-fiisi.up.railway.app/api/incidencia')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const [sidebarToggle] = useOutletContext();

  const nombre = localStorage.getItem('nombre');
  const nom = sessionStorage.getItem('rol');

  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: nombre }}
          nomb={nom}
        />







        <div className="px-2 mx-auto mainCard">
          <h1 className="text-slate-500 pb-3 text-base md:text-lg">
            Incidencias Pendientes
          </h1>

          <div className="flex flex-row gap-x-4 overflow-hidden overflow-x-auto justify-between no-scrollbar">
            {dataOS?.map((data, index) => (
              <ScrolledCard key={index} data={data} />
            ))}
          </div>

          <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div>

        </div>
        <div className="px-2 mx-auto mainCard">
          <h1 className="text-slate-500 pb-3 text-base md:text-lg">
            Incidencias Resueltas
          </h1>

          <div className="flex flex-row gap-x-4 overflow-hidden overflow-x-auto justify-between no-scrollbar">
            {dataOS?.map((data, index) => (
              <ScrolledCard key={index} data={data} />
            ))}
          </div>

          <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div>

        </div>

        <div className=" mainCard ">

          <h1 className="text-slate-500 text-base md:text-lg ">
            Gráficos
          </h1>

          {/* <div className="lg:w-full w-[1024px] overflow-hidden flex flex-row justify-between text-slate-700 gap-2 lg:max-h-screen overflow-x-auto whitespace-nowrap"></div> */}
        </div>
        <div className=" grid grid-cols-2 gap-4 p-">


          <div className="relative">
            <LinesChart />
          </div >
          <div className="relative">
            <BarsChart />
          </div >

        </div>
      </main>
    </>
  );
}

export default Dashboard;
