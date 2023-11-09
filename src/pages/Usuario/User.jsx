import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Index";
import { Navigate, useOutletContext } from "react-router-dom";
import UserTable from "./UserTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { show_alerta } from "../../components/Alerta/Alertas";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from "axios";
import { Spinner } from "@material-tailwind/react";


function User() {

  const [posts, setPosts] = useState([]);

  const nombre = sessionStorage.getItem('rol');
  const navigate = useNavigate();
  const [sidebarToggle] = useOutletContext();
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    getUsuario();
  }, []);

  const getUsuario = () => {
    fetch('https://incidencias-fiisi.up.railway.app/api/usuario')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  const dataHeader = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Nombres",
    },
    {
      key: "dni",
      label: "Dni",
    },
    {
      key: "telefono",
      label: "Telefono",
    },
    {
      key: "email",
      label: "email",
    },
    {
      key: "action",
      label: "Opciones",
    },
  ];
  const handleDelete = (id, title) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: ' Estas seguro que eliminar al usuario ' + title + '?',
      icon: 'question', text: 'confirma para eliminar al usuario',
      showCancelButton: true, confirmButtonText: 'si, eliminar', cancelButoonText: 'cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`https://incidencias-fiisi.up.railway.app/api/usuario/${id}`)
          .then((response) => {
            var tipo = response.status ? "success" : "error";
            console.log("tipo", tipo);
            var msj = response.data;
            show_alerta(msj, tipo)
            if (tipo === 'success') {
              getUsuario();
            }
          })
          .catch((error) => {
            console.error('Error al obtener los datos de la API', error);
          });


      } else {
        show_alerta('No fue eliminado', 'info')
      }
    });


    // <Spinner className="h-16 w-16 text-gray-900/50" />
  };

  return (
    <>
      {nombre === 'Administrador' ? <Navigate to="/Usuario/User" /> : <Navigate to="/404" />}
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />
        {/* Tabla */}
        <div className="mainCard">

          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">

            <h1 className="text-center font-semibold text-lg mb-5">
              Usuarios
            </h1>

            <hr />

            {/* Inicia boton añadir */}
            <button
              onClick={() =>
                navigate("/Usuario/DetailsUser")}
              className="bg-cyan-600 border-blue-500 text-gray-100 px-3 py-2 mt-6 mb-4 rounded-lg shadow-lg text-sm flex gap-2 items-center"
            >
              <div>
                <FontAwesomeIcon icon={faFloppyDisk} />
              </div>
              <span>Añadir usuario</span>
            </button>


            <UserTable
              loading={loading}
              dataHeader={dataHeader}
              data={posts}
              handleDelete={handleDelete}
            />

          </div>
        </div>
      </main>
    </>
  );
}

export default User;
