import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Circles, CirclesWithBar, ThreeDots } from "react-loader-spinner";

function UserTable({ loading, dataHeader, data, handleDelete }) {
  return (
    <>


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
                 data.map((row) => (

            <tr
              key={row.idUsua}
              className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
            >
              <TableCell dataLabel="ID" showLabel={true}>
                <span className="font-medium text-sm text-gray-900">
                  {row.usuario.idUsua}
                </span>
              </TableCell>
              <TableCell dataLabel="Nombre" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">{row.usuario.persona.nombPers + " " + row.usuario.persona.appaPers + " " + row.usuario.persona.apmaPers}</p>
              </TableCell>
              <TableCell dataLabel="Usuario" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">{row.usuario.nombUsua}</p>
              </TableCell>
              <TableCell dataLabel="Rol" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">{row.usuario.persona.rol.nombRol}</p>
              </TableCell>
              <TableCell dataLabel="Telefono" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">{row.usuario.persona.telfPers}</p>
              </TableCell>
              <TableCell dataLabel="Email" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">{row.usuario.persona.emailPers}</p>
              </TableCell>
              <TableCell>
                <Link

                  to={`/Usuario/ViewUser?userID=${row.usuario.idUsua}`}
                  className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
                >
                  <FontAwesomeIcon icon={faEye} />
                </Link>
                <Link
                  to={`/Usuario/EditUsuario?usuarioID=${row.usuario.idUsua}`}
                  className={`text-gray-500inline-flex py-2 px-2 rounded  text-sm`}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(row.usuario.idUsua, row.usuario.nombUsua);
                  }}
                  // to={`incidencias/visualizar?incidenciaID=${row.usuario.idUsua}`}
                  
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

export default UserTable;
