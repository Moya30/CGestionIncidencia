import { Line } from 'react-chartjs-2';
import axios from 'axios';
import React, { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';



export const LinesChart = () => {

 const [procesos, setProcesos] = useState(0);
 const [resueltas, setResueltas] = useState(0)


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );

    
   
   

    axios.get('https://incidencias-fiisi.up.railway.app/api/incidencia/reporte/seguimiento')
        .then((response) => {

            setProcesos(response.data.Proceso.cantidad)
            console.log("grad", response.data.Proceso.cantidad)
            setResueltas(response.data.Resuelto.cantidad)
        })
        .catch((error) => {
            console.error('Error al obtener los datos de la API', error);
        });



    var beneficios = [0,procesos];
    var resuelt  =   [0,resueltas];
    var meses = ["en proceso", "resueltas"];

    var midata = {
        labels: meses,
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: 'Incidencias en proceso',
                data: beneficios,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132, 0.5)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 100, 132, 0.5)',
                pointBackgroundColor: 'rgba(255, 12, 132, 0.5)',
            },
            {
                label: 'Incidencias Resueltas',
                data: resuelt,
               
            },
        ],
    };

    var misoptions = {
        scales: {
            y: {
                min: 0
            },
            x: {
                ticks: { color: 'rgb(255, 99, 132)' }
            }
        }
    };



    return (
        <>
            <Line data={midata} options={misoptions} />

        </>
    )
}


