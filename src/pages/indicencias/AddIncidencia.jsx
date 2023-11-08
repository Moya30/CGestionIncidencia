import React from 'react'
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from 'react-router-dom';
import Goback from '../../components/Other/Goback';
export const AddIncidencia = () => {

    const [sidebarToggle] = useOutletContext();

    const handleSumitChange = () =>{

    }

    return (
        <>

            <main className="h-full">
                <Navbar toggle={sidebarToggle} />

                {/* Main Content */}
                <div className="mainCard">

                    <Goback />

                    <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
                        <div className='m-2 mb-5'><h1 className='text-2xl'> Registrar incidencias </h1></div>
                        <form onSubmit={handleSumitChange}>
                            {/* Form Default */}
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label className="text-sm text-gray-600">
                                        Nombre incidencia
                                    </label>
                                    <input
                                        id="defaultInput"
                                        type="text"
                                        name="defaultInput"
                                        // onChange={(e) => setNombUsua(e.target.value)}
                                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                        placeholder="Nomb incidencia"
                                    />
                                </div>
                                <div>
                                    <label  className="text-sm text-gray-600">
                                        Contraseña
                                    </label>
                                    <input
                                        id="User"
                                        type="text"
                                        name="user"
                                       
                                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                        placeholder="password"
                                    />
                                </div>
                            </div>
                           
                            <div className="mt-5 flex flex-row gap-4">
                                <button
                                    className="bg-cyan-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm"

                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </main>

        </>
    )
}
