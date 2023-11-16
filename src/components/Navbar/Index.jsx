import { faBars, faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Index({ toggle }) {
  const nombre = sessionStorage.getItem("rol");
  const [id, setId] = useState(0);
  const [fot, setFot] = useState([]);

  useEffect(() => {

    const ids = localStorage.getItem('idUsua');
    setId(ids);
    console.log(ids);
    getFoto();
}, [id])

const getFoto = () => {
  fetch(`https://incidencias-fiisi.up.railway.app/api/usuario/${id}`)
    .then((response) => response.json())
    .then((data) => {
      
      const foto = data.img
      console.log("sa", foto)
      setFot(data.img);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

  const avatar =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  return (
    <>
      <header className="">
        <div>
          <div className="px-3 sm:px-8 pt-9 pb-4 flex flex-wrap w-full justify-between items-center">
            <div className="flex flex-row gap-3">
              <p className="flex-shrink-0 rounded-full block md:hidden border border-sky-700 p-[3px] shadow-lg">
                <FontAwesomeIcon icon={faBars} onClick={toggle} />
              </p>
            </div>
            <div className="avaterSection flex items-center gap-2 sm:gap-6 text-slate-400">
              <ul className="flex flex-row gap-4 text-xl items-center">
                <li>
                  <span className="h-9 w-9 cursor-pointer gap-2 sm:gap-6 text-slate-400">
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                </li> 
                <li>
                  <span className="h-9 w-9 cursor-pointer gap-2 sm:gap-6 text-slate-400">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
               
                </li>
                <li>
                  <span>
                    <img
                      className="rounded-full h-9 w-9 border cursor-pointer"
                      src={`data:image/png;base64,${fot}`}
                      alt="Avatar"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;
