import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';



import { Line } from 'react-chartjs-2';
import axios from 'axios';
import React, { useState } from 'react'



export const BarsChart = () => {

 const [procesos, setProcesos] = useState(0);
 const [resueltas, setResueltas] = useState(0)

 ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
    
   
   

    axios.get('https://incidencias-fiisi.up.railway.app/api/incidencia/reporte/seguimiento')
        .then((response) => {

            setProcesos(response.data.Registrado.cantidad)
         
        })
        .catch((error) => {
            console.error('Error al obtener los datos de la API', error);
        });



        
        
        var beneficios = [procesos, 20];
        var meses = ["Incidencias registradas"];
        
        var misoptions = {
            responsive : true,
            animation : false,
            plugins : {
                legend : {
                    display : false
                }
            },
            scales : {
                y : {
                    min : -25,
                    max : 100
                },
                x: {
                    ticks: { color: 'rgba(0, 220, 195)'}
                }
            }
        };
        
        var midata = {
            labels: meses,
            datasets: [
                {
                    label: 'Incidencias Registradas',
                    data: beneficios,
                    backgroundColor: 'rgba(0, 220, 195, 0.5)'
                }
            ]
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
         <Bar data={midata} options={misoptions} />

        </>
    )
}


