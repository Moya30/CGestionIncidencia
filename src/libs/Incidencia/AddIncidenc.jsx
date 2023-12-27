import axios from "axios";

async function AddIncidenc(idSalon, idTipoInci, nombInci, descInci, idUsua) {
  try {
    const result = await axios.post(
      "https://incidencias-fiisi.up.railway.app/api/incidencia",
      {
        salon: { idSalon },
        tipoIncidencia: { idTipoInci },
        nombInci,
        descInci,
        usuario: { idUsua },
      }
    );

    return { incidencia: result.data };
  } catch (error) {
    return { mensaje: error.response.data.mensaje };
  }
}
export default AddIncidenc;
