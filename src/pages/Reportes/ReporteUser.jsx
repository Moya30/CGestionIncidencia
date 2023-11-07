import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Iframe from 'react-iframe';
import { Document, Page } from 'react-pdf';


export const ReporteUser = () => {

    const [data, setData] = useState("")

    let pages = 1;

    useEffect(() => {
        getUsuario();
    }, []);

    const getUsuario = () => {
        axios.get('https://incidencias-fiisi.up.railway.app/api/usuario/reporte').then((response) => {
            setData(response.data);
        });
    }
    console.log(data);
    const encoder = new TextEncoder();
    const byteArray = encoder.encode(data);
    
    const file = new Blob([byteArray]);
    const fileURL = URL.createObjectURL(file);
    //window.open(fileURL, '_blank');

    return (
        <>
            <div>ReporteUser</div>

            <Document file={fileURL} >
                <Page pageNumber={pages} />
            </Document>
            <Iframe url={fileURL}
                width="640px"
                height="320px"
                id=""
                className=""
                display="block"
                position="relative" />

        </>


    )
}
