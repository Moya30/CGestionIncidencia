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
      .get("https://incidencias-fiisi.up.railway.app/api/incidencia/BD?search=false")
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

            <tr key={row.incidencia.idInci}
            className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
            >
              <TableCell dataLabel="ID" showLabel={true}>
                <p className="font-medium text-sm text-gray-900">
                  {row.incidencia.idInci}
                </p>
              </TableCell>
              <TableCell dataLabel="AREA" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.incidencia.salon.area.nombArea}
                </p>
              </TableCell>
              <TableCell dataLabel="INCIDENCIA" showLabel={true}>
                <p
                  className="font-normal text-sm text-gray-500">
                  {row.incidencia.tipoIncidencia.nombTipoInci}
                </p>
              </TableCell>
              <TableCell dataLabel="PRIORIDAD" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.incidencia.tipoIncidencia.prioridad.nombPrio}
                </p>
              </TableCell>
              <TableCell dataLabel="SEGUIMIENTO" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.incidencia.tipoSeguimiento.nombTipoSegui}
                </p>
              </TableCell>
              <TableCell dataLabel="FECHA" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {moment(row.incidencia.fechaInci).format('MMMM D, YYYY')}
                </p>
              </TableCell>

              <TableCell dataLabel="DIAS SOLUCIÓN" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                
                {row.diasSolucion.substring(2, 16)}
                </p>
              </TableCell>

              <TableCell dataLabel="USUARIO" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.incidencia.usuario.nombUsua}
                </p>
              </TableCell>

              <TableCell>
 

                <Link
                  to={`/incidencias/visualizar?incidenciaID=${row.incidencia.idInci}`}
                  className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
                >
                  {  row.incidencia.tipoSeguimiento.nombTipoSegui === 'Proceso' ?
                    (<FontAwesomeIcon icon={faEye} style={{ color: "#10b2ee", }} />) 
                    : row.incidencia.tipoSeguimiento.nombTipoSegui === 'Resuelto' ? (<FontAwesomeIcon icon={faEye} style={{ color: "#10b2ee", }}/>) 
                    : row.incidencia.tipoSeguimiento.nombTipoSegui === 'Registrado' ? (<FontAwesomeIcon icon={faEye}/>)
                    : (<FontAwesomeIcon icon={faEye} />)
                  }
                  
                </Link>

                <Link
                  to={`/incidencias/solucion?incidenciaID=${row.incidencia.idInci}`}
                  className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
                >
                  {/* {row.tipoSeguimiento.nombTipoSegui === 'Proceso' ?
                    (<FontAwesomeIcon icon={faLightbulb} style={{ color: "#10b2ee", }} />) : (<FontAwesomeIcon icon={faLightbulb} />)
                  } */}
                  {  row.incidencia.tipoSeguimiento.nombTipoSegui === 'Proceso' ?
                    (<FontAwesomeIcon icon={faLightbulb} />) 
                    : row.incidencia.tipoSeguimiento.nombTipoSegui === 'Resuelto' ? (<FontAwesomeIcon icon={faLightbulb} style={{color: "#f4cc06",}}/>) 
                    : row.incidencia.tipoSeguimiento.nombTipoSegui === 'Registrado' ? (<FontAwesomeIcon icon={faLightbulb}/>)
                    : (<FontAwesomeIcon icon={faLightbulb} />)
                  }
                  

                </Link>

                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(row.incidencia.idInci, row.incidencia.usuario.nombUsua);
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
