import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Index";
import { Navigate, useOutletContext } from "react-router-dom";
import UserTable from "./UserTable";
import { useNavigate } from "react-router-dom";
import { show_alerta } from "../../components/Alerta/Alertas";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import Title from "../indicencias/components/Title";
import { ButtonAdd } from "../../components/Other/ButtonAdd";
import toast, { Toaster } from 'react-hot-toast';


function User() {
  const [posts, setPosts] = useState([]);

  const nombre = sessionStorage.getItem("rol");
  const navigate = useNavigate();
  const [sidebarToggle] = useOutletContext();
  const [loading, setIsloading] = useState(true);



  useEffect(() => {
    getUsuario();
  }, []);

  const getUsuario = () => {
    fetch("https://incidencias-fiisi.up.railway.app/api/usuario")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const dataHeader = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Nombres Completos",
    },
    {
      key: "user",
      label: "USUARIO",
    },
    {
      key: "rol",
      label: "ROL",
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
      title: " Estas seguro que eliminar al usuario " + title + "?",
      icon: "question",
      text: "confirma para eliminar al usuario",
      showCancelButton: true,
      confirmButtonText: "si, eliminar",
      cancelButoonText: "cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://incidencias-fiisi.up.railway.app/api/usuario/${id}`)
          .then((response) => {
            var tipo = response.status ? "success" : "error";
            var msj = response.data;
            show_alerta(msj, tipo);
            if (tipo === "success") {
              getUsuario();
            }
          })
          .catch((error) => {
            console.error("Error al obtener los datos de la API", error);
          });
      } else {
        show_alerta("No fue eliminado", "info");
      }
    });

    // <Spinner className="h-16 w-16 text-gray-900/50" />
  };

  return (
    <>
      {nombre === "Administrador" ? (
        <Navigate to="/Usuario/User" />
      ) : (
        <Navigate to="/404" />
      )}
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Tabla */}
        <div className="mainCard">
          <Title text={"Usuario"}></Title>
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            {/* Inicia boton añadir */}

            <ButtonAdd
              link={"/Usuario/DetailsUser"}
              name={"Registrar usuario"}
            ></ButtonAdd>

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
