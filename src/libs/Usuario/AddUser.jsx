import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

async function AddUser (nombUsua,passUsua,nombPers,appaPers,apmaPers,dniPers,telfPers,emailPers,nombRol) {
    try {

        const result = await axios.post('https://incidencias-fiisi.up.railway.app/api/usuario',
                {
                    nombUsua,
                    passUsua,
                    nombPers,
                    appaPers,
                    apmaPers,
                    dniPers,
                    telfPers,
                    emailPers,
                    nombRol,
                }
        )
        toast.success('Usuario registrado');
        return {user:result.data};
    
        
    } catch (error) {

        return {mensaje:error.response.data.mensaje}
        
    }
}
export default AddUser;