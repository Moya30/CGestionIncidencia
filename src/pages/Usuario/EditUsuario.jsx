
import React, { useEffect, useState } from 'react'
import { sidebarToggle } from '../../utils/toggler';
import Goback from '../../components/Other/Goback';
import Navbar from "../../components/Navbar/Index";
import { faEnvelope, faFeather, faFileSignature, faIndent, faLock, faPhone, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useOutletContext } from 'react-router';
import axios from 'axios';

export const EditUsuario = () => {
    const navigate = useNavigate();
    const [sidebarToggle] = useOutletContext();

    const [detalis, setDetalis] = useState(null);

    const [nombUsua, setNombUsua] = useState("");
  const [passUsua, setPassUsua] = useState("");
  const [nombPers, setNombPers] = useState("");
  const [appaPers, setAppaPers] = useState("");
  const [apmaPers, setApmaPers] = useState("");
  const [dniPers, setDniPers] = useState("");
  const [telfPers, setTelfPers] = useState("");
  const [emailPers, setEmailPers] = useState("");
  const [nombRol, setNombRol] = useState("");

    const query = new URLSearchParams(window.location.search);
    const incidenciaID = query.get("usuarioID");


    const handleSumitChange = (e) => {

    }

    useEffect(() => {
        const endPonit = `https://incidencias-fiisi.up.railway.app/api/usuario/${incidenciaID}`;

        console.log("Error", endPonit);

        axios
            .get(endPonit)
            .then((response) => {
                const apiData = response.data;

                console.log("CONSOLA", apiData);

                setDetalis(apiData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    return (
        <>
            <main className="h-full">
                <Navbar toggle={sidebarToggle} />

                <div className="mainCard">

                    <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">

                        <div className="m-2 mb-5">
                            <h2 className="font-semibold text-lg"> Editar Usuario </h2>
                        </div>
                        <hr />

                        {detalis && (
                            <form onSubmit={handleSumitChange} className="mt-6">
                                {/* Form Default */}
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='relative mt-4'>
                                        <label className="text-sm text-gray-600">
                                            Usuario
                                        </label>
                                        <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                                            <FontAwesomeIcon icon={faUserSecret} />
                                        </div>
                                        <input
                                            id="defaultInput"
                                            type="text"
                                            name="defaultInput"
                                            className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                            value={detalis.usuario.nombUsua}
                                            onChange={(e) => setNombUsua(e.target.value)}
                                        />
                                    </div>
                                    <div className='relative mt-4'>
                                        <label htmlFor="password" className="text-sm text-gray-600">
                                            Contraseña
                                        </label>
                                        <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                                            <FontAwesomeIcon icon={faLock} />
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            name="lbpassword"
                                            
                                            className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                            value={detalis.usuario.passUsua}
                                            onChange={(e) => setPassUsua(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='relative mt-4'>
                                    <label className="text-sm text-gray-600">
                                        Nombres
                                    </label>
                                    <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                                        <FontAwesomeIcon icon={faFileSignature} />
                                    </div>
                                    <input
                                        id="nombres"
                                        type="text"
                                        name="nombres"
                                        onChange={(e) => setNombPers(e.target.value)}
                                        className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                        value={detalis.usuario.persona.nombPers}
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-4 mt-4'>
                                    <div className='relative mt-4'>
                                        <label className="text-sm text-gray-600">
                                            Apellido Paterno
                                        </label>
                                        <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                                            <FontAwesomeIcon icon={faFeather} />
                                        </div>
                                        <input
                                            id="apPaterno"
                                            type="text"
                                            name="nameApPaterno"
                                            onChange={(e) => setAppaPers(e.target.value)}
                                            className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                            value={detalis.usuario.persona.appaPers}
                                        />
                                    </div>
                                    <div className='relative mt-4'>
                                        <label htmlFor="password" className="text-sm text-gray-600">
                                            Apellido Materno
                                        </label>
                                        <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                                            <FontAwesomeIcon icon={faFeather} />
                                        </div>
                                        <input
                                            id="ApMaterno"
                                            type="text"
                                            name="ApMaterno"
                                            onChange={(e) => setApmaPers(e.target.value)}
                                            className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                            value={detalis.usuario.persona.apmaPers}
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4 mt-2'>
                                    <div className='relative mt-4'>
                                        <label className="text-sm text-gray-600">
                                            Dni
                                        </label>
                                        <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                                            <FontAwesomeIcon icon={faIndent} />
                                        </div>
                                        <input
                                            id="dni"
                                            type="text"
                                            name="dni"
                                            onChange={(e) => setDniPers(e.target.value)}
                                            className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                            value={detalis.usuario.persona.dniPers}
                                        />
                                    </div>
                                    <div className='relative mt-4'>
                                        <label htmlFor="password" className="text-sm text-gray-600">
                                            Telefono
                                        </label>
                                        <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <input
                                            id="telefono"
                                            type="text"
                                            name="telefono"
                                            onChange={(e) => setTelfPers(e.target.value)}
                                            className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                            value={detalis.usuario.persona.telfPers}
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4 mt-4'>

                                    <div className='relative mt-4'>
                                        <label className="text-sm text-gray-600">
                                            Email
                                        </label>
                                        <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            onChange={(e) => setEmailPers(e.target.value)}
                                            className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                            value={detalis.usuario.persona.emailPers}
                                        />
                                    </div>

                                    <div className='relative mt-4'>
                                        <label className="block text-sm font-medium leading-6">
                                            Rol
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border focus:border-emerald-400 py-2 "

                                                onChange={(e) => setNombRol(e.target.value)}
                                            >
                                                <option value="">Seleecciona un rol</option>
                                                {/* {options.map((option) => (
                                    <option key={option.id} value={option.value}>
                                    {option.nombRol}
                                    </option>
                                ))} */}
                                            </select>
                                        </div>
                                    </div>


                                </div>
                                <div className="mt-1 flex flex-row gap-2">
                                    <div className="mt-5 flex flex-row gap-4">
                                        <button
                                            className="bg-sky-900 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm"
                                        >
                                            Guardar
                                        </button>
                                    </div>
                                    <div className="mt-5 flex flex-row gap-4">
                                        <button
                                            onClick={() =>
                                                navigate("/Usuario/User")}
                                            className="bg-slate-500 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm ">
                                            Cancelar
                                        </button>

                                    </div>
                                </div>
                            </form>
                        )}




                    </div>
                </div>
            </main>
        </>
    );
}
