import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import RegisterIndex from "./pages/auth/Register";
import { DetailsUser } from "./pages/Usuario/DetailsUser";
import Incidencias  from "./pages/indicencias/Incidencias";
import Visualizar from "./pages/indicencias/pages/Visualizar"
import Solucion from "./pages/indicencias/pages/Solucion";
import User from "./pages/Usuario/User";
import ViewUser from "./pages/Usuario/ViewUser";
import { useState } from "react";
import { ReporteUser } from "./pages/Reportes/ReporteUser";
import { AddIncidencia } from "./pages/indicencias/AddIncidencia";


function AppRouter() {


    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/auth" element={<GuestLayout />}>
                <Route path="/auth/register" element={<RegisterIndex />}></Route>
            </Route>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/incidencias" element={<Incidencias />}></Route>
                <Route path="/incidencias/visualizar" element={<Visualizar />}></Route>
                <Route path="/incidencias/solucion" element={<Solucion />}></Route>
                <Route path="/incidencias/AddIncidencia" element={<AddIncidencia />}></Route>
                <Route path="/Usuario/User" element={<User />}></Route>
                <Route path="/Usuario/DetailsUser" element={<DetailsUser />}></Route>
                <Route path="/Usuario/ViewUser" element={<ViewUser />}></Route>
                <Route path="/Reportes/ReporteUser" element={<ReporteUser />}></Route>
                <Route path="/404" element={<NotFound />}></Route>
                <Route path="/form" element={<Form />}></Route>
            </Route>
        </Routes>

        //   <Route path="/auth" element={<GuestLayout />}>
        //     <Route path="/auth/login" element={<Login />}></Route>
        //     <Route path="/auth/register" element={<RegisterIndex />}></Route>
        //   </Route>

    )
}

export default AppRouter;