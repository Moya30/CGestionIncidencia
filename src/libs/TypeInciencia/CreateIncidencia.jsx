import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

async function CreateIncidencia( idTipoInci,nombTipoInci,diasTipoInci,presuTipoInci,prioridad) {
  try {
    const result = await axios.post(
      "https://incidencias-fiisi.up.railway.app/api/tipoincidencia",
      {
        idTipoInci,
        nombTipoInci,
        diasTipoInci,
        presuTipoInci,
        prioridad,
      }
    );

    return { user: result.data };
  } catch (error) {
    return { mensaje: error.response.data.mensaje };
  }
}
export default CreateIncidencia;
