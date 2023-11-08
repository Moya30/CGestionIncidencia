import React from "react";
import Navbar from "../../components/Navbar/Index";
import { useNavigate, useOutletContext } from "react-router-dom";
import Goback from "../../components/Other/Goback";
export const AddIncidencia = () => {
    const [sidebarToggle] = useOutletContext();
    const navigate = useNavigate();
    const handleSumitChange = () => { };

    return (
        <>
            <main className="h-full">
                <Navbar toggle={sidebarToggle} />

                {/* Main Content */}
                <div className="mainCard">
                    <Goback />

                    <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
                        <div className="m-2 mb-5">
                            <h2 className="font-semibold text-lg"> Registrar incidencias </h2>
                        </div>
                        <hr />
                        <form onSubmit={handleSumitChange} className="mt-8">
                            {/* Form Default */}
                            <div className="grid grid-cols-3 gap-4 mb-3">
                                <div className="mt-1">
                                    <label className="block text-sm font-medium leading-6">
                                        Area
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border focus:border-emerald-400 py-2   "
                                        value
                                    //   onChange={(e) => setNombRol(e.target.value)}
                                    >
                                        <option value="">Seleccione un area </option>
                                        {/* {options.map((option) => (
                                        <option key={option.id} value={option.value}>
                                        {option.nombRol}
                                        </option>
                                    ))} */}
                                    </select>

                                </div>
                                <div className="mt-1">
                                    <label className="block text-sm font-medium leading-6">
                                        Salon
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border focus:border-emerald-400 py-2   "
                                        value
                                    //   onChange={(e) => setNombRol(e.target.value)}
                                    >
                                        <option value="">Seleeccione un salon</option>
                                        {/* {options.map((option) => (
                                        <option key={option.id} value={option.value}>
                                        {option.nombRol}
                                        </option>
                                    ))} */}
                                    </select>

                                </div>
                                <div className="mt-1">
                                    <label className="block text-sm font-medium leading-6">
                                        Tipo de incidencia
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border focus:border-emerald-400 py-2 "
                                        value
                                    //   onChange={(e) => setNombRol(e.target.value)}
                                    >
                                        <option value="">Seleeccione el tipo de incidencia</option>
                                        {/* {options.map((option) => (
                                        <option key={option.id} value={option.value}>
                                        {option.nombRol}
                                        </option>
                                    ))} */}
                                    </select>

                                </div>
                                <div>
                                    <label className="text-sm text-gray-800">
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
                            </div>
                            <div className="grid  gap-2">
                                <div>
                                    <label className="text-sm text-gray-800 ">Descripción</label>
                                    <textarea
                                        id="User"
                                        type="text"
                                        name="user"
                                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                        placeholder="descripción de la incidencia"
                                    />
                                </div>
                            </div>

                            <div className="mt-1 flex flex-row gap-2">
                                <div className="mt-5 flex flex-row gap-4">
                                    <button className="bg-cyan-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                                        Guardar
                                    </button>
                                </div>
                                <div className="mt-5 flex flex-row gap-4">
                                    <button 
                                    onClick={() =>
                                        navigate("/incidencias")}
                                    className="bg-slate-500 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};
