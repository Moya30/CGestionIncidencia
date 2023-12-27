import { faPaperclip, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import initMenus from "../../data/menus.js";
import "./sidebar.css";
import SidebarLogo from "./SidebarLogo.jsx";
import SidebarSearch from "./SidebarSearch.jsx";
import MenuList from "./MenuList.jsx";
import { useNavigate } from "react-router-dom";
import { Sidebaruser } from "./Sidebaruser.jsx";

// aqui para configurar lo del meu lateral

function Sidebar({ ...props }) {
  const navigate = useNavigate();
  const [menus, setMenus] = useState(initMenus);
  const [scButton, setScButton] = useState(false);
  const search = useRef("");
  const [fot, setFot] = useState("");
  const [id, setId] = useState(0);


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

        const foto = data.img.urlImg
        console.log("sa", foto)
        setFot(foto);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }



  const handleChange = (e) => {
    if (e.target.value) {
      setScButton(true);
      setMenus(
        menus.filter((el) => {
          return el.label.toLowerCase().includes(e.target.value.toLowerCase());
        })
      );
    } else {
      setScButton(false);
      setMenus(initMenus);
    }
  };

  const clearSearch = () => {
    search.current.value = "";
    setMenus(initMenus);
    setScButton(false);
  };

  const logout = () => {
    navigate("/");
  };

  const nombre = localStorage.getItem('nombre');
  const nom = sessionStorage.getItem('rol');
  return (
    <>
      <aside
        id="sidebar"
        className={`sidebarWrapper md:translate-x-0 -translate-x-full md:z-0 z-50 no-scrollbar ${props.className}`}
      >
        {/* Sidebar wrapper */}
        <div className="md:w-64 border-r-2 border-gray-100 h-full flex-col flex flex-shrink-0">
          {/* Logo */}
          {/* <SidebarLogo toggle={props.toggle} icon={faPaperclip} text="Sistema de incidencias" /> */}

          <Sidebaruser user={{ name: nombre }} nomb={nom} fot={fot}></Sidebaruser>


          {/* Search Menu */}
          <SidebarSearch
            clearSearch={clearSearch}
            handleChange={handleChange}
            scButton={scButton}
            search={search}
          />

          {/* Menu */}
          <MenuList menus={menus} toggle={props.toggle} />

          {/* Profile */}
          <div className="pt-2 border-t border-gray-300">
            <div className="py-2 px-4">
              {/* Logout Button */}
              <button
                className="py-2 px-4 border border-sky-950 bg-sky-950 w-full rounded-full text-gray-200  hover:border-emerald-600 justify-end text-sm"
                onClick={() => logout()}
              >
                <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> Salir
              </button>
            </div>
          </div>
        </div>
      </aside>

      {props.className === "mobile" && (
        <div
          id="overlaySidebar"
          onClick={props.toggle}
          className="hidden absolute w-full h-screen bg-black z-10 inset-0 opacity-60"
        >
          <div></div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
