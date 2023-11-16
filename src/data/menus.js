import { faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  //faNoteSticky,
  faNotdef,
  faUser,
  faTicket,
  faFile,
  faHouse
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: faHouse,
  },
  {
    label: 'Maestro'
  },
  {
    label: "Usuario",
    path: "/Usuario/User",
    icon: faUser,
  },
 
  
  {
    label: 'Procesos'
  },
  {
    label: "Incidencias",
    path: "/incidencias",
    icon: faTicket,
  },

  {
    label: 'Reportes'
  },
  {
    label: "Reporte de incidencias",
    path: "/Reportes/ReporteUser",
    icon: faFile,
  },


  {
    label: 'Opciones'
  },
  // {
  //   label: "Login",
  //   path: "/auth/login",
  //   icon: faLock,
  // },
  // {
  //   label: "Register",
  //   path: "/auth/register",
  //   icon: faNoteSticky,
  // },
];

export default initMenu