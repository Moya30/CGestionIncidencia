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
    label: "Reportes",
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