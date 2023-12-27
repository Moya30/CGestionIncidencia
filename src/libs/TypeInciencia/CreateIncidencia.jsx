import axios from "axios";

async function CreateIncidencia(idTipoInci,nombTipoInci,diasTipoInci,presuTipoInci,nombPrio) {
  try {
    const result = await axios.post(
      "https://incidencias-fiisi.up.railway.app/api/tipoincidencia",
      {
        idTipoInci,
        nombTipoInci,
        diasTipoInci,
        presuTipoInci,
        nombPrio,
      }
    );

    return { incidencia: result.data };
  } catch (error) {
    return { mensaje: error.response.data.mensaje };

  }
}
export default CreateIncidencia;
