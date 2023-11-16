import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import TableCell from "../../components/Datatables/TableCell";


import axios from "axios";
import moment from "moment/moment";
import { ThreeDots } from "react-loader-spinner";

function UserTableIncidencias({ loading, dataHeader, data, handleDelete }) {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://incidencias-fiisi.up.railway.app/api/incidencia")
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [tipoSeguimiento, setTipoSeguimiento] = useState("");
  console.log("aaa", tipoSeguimiento);

  return (
    <>
      {/* TABLA DE LOS DATOS */}
      <Datatables loading={loading} dataHeader={dataHeader}>

        {
          loading && (<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />)
        }

        {data &&
          data.length > 0 &&
          data.map((row, index) => (

            <tr key={row.idInci}
            className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
            >
              <TableCell dataLabel="ID" showLabel={true}>
                <span className="font-medium text-sm text-gray-900">
                  {row.idInci}
                </span>
              </TableCell>
              <TableCell dataLabel="AREA" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.salon.area.nombArea}
                </p>
              </TableCell>
              <TableCell dataLabel="INCIDENCIA" showLabel={true}>
                <p
                  className="font-normal text-sm text-gray-500">
                  {row.tipoIncidencia.nombTipoInci}
                </p>
              </TableCell>
              <TableCell dataLabel="PRIORIDAD" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.tipoIncidencia.prioridad.nombPrio}
                </p>
              </TableCell>
              <TableCell dataLabel="SEGUIMIENTO" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.tipoSeguimiento.nombTipoSegui}
                </p>
              </TableCell>
              <TableCell dataLabel="FECHA" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {moment(row.fechaInci).format('MMMM D, YYYY')}
                </p>
              </TableCell>
              <TableCell dataLabel="USUARIO" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.usuario.nombUsua}
                </p>
              </TableCell>

              <TableCell>
 

                <Link
                  to={`/incidencias/visualizar?incidenciaID=${row.idInci}`}
                  className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
                >
                  {  row.tipoSeguimiento.nombTipoSegui === 'Proceso' ?
                    (<FontAwesomeIcon icon={faEye} style={{ color: "#10b2ee", }} />) 
                    : row.tipoSeguimiento.nombTipoSegui === 'Resuelto' ? (<FontAwesomeIcon icon={faEye} style={{ color: "#10b2ee", }}/>) 
                    : row.tipoSeguimiento.nombTipoSegui === 'Registrado' ? (<FontAwesomeIcon icon={faEye}/>)
                    : (<FontAwesomeIcon icon={faEye} />)
                  }
                  
                </Link>

                <Link
                  to={`/incidencias/solucion?incidenciaID=${row.idInci}`}
                  className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
                >
                  {/* {row.tipoSeguimiento.nombTipoSegui === 'Proceso' ?
                    (<FontAwesomeIcon icon={faLightbulb} style={{ color: "#10b2ee", }} />) : (<FontAwesomeIcon icon={faLightbulb} />)
                  } */}
                  {  row.tipoSeguimiento.nombTipoSegui === 'Proceso' ?
                    (<FontAwesomeIcon icon={faLightbulb} />) 
                    : row.tipoSeguimiento.nombTipoSegui === 'Resuelto' ? (<FontAwesomeIcon icon={faLightbulb} style={{color: "#f4cc06",}}/>) 
                    : row.tipoSeguimiento.nombTipoSegui === 'Registrado' ? (<FontAwesomeIcon icon={faLightbulb}/>)
                    : (<FontAwesomeIcon icon={faLightbulb} />)
                  }
                  

                </Link>

                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(row.idInci, row.usuario.nombUsua);
                  }}
                  to={"/incidencias"}
                  className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </TableCell>
            </tr>


          ))}
      </Datatables>
    </>
  );
}

export default UserTableIncidencias;
