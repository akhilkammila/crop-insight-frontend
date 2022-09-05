import React, {useEffect, useState, useRef} from 'react';
import './Item.css';
import BarContainer from './BarContainer.js'
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Scale,
} from 'chart.js';
import { blue, green, red} from '@mui/material/colors';
import { color, fontSize, lineHeight, lineWidth } from '@mui/system';
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Item({country, setCrop}) {
    const labels = ['Maize', 'Sweet Potatoes', 'Wheat', 'Cassava', 'Potatoes', 'Rice', 'Sorghum','Soybeans',"Yams","Other"];

    const [array, setArray] = useState(null)
    const [data, setData] = useState({
        labels,
        datasets: [
            {
            label: '10 Years Ago',
            data: null,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 26, 104, 1)',
            },
            {
            label: '30 Years Ago',
            data: null,
            borderColor: 'rgb(255, 206, 86)',
            backgroundColor: 'rgba(255, 206, 86, 1)',
            },
            {
            label: 'Current Countries',
            data: null,
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    })

    // fetches the data when the item first loads
    useEffect(()=>{
        getData()
        console.log('about to log the array')
        console.log(array)
        if(array){
          console.log('running')
          console.log(array['data']['2'])
          const indexBestCrop = array['data']['2'].indexOf(Math.max(...array['data']['2']));
          setCrop(indexBestCrop)
          // setCrop(bestCrop)
        }
        setData({
            labels,
            datasets: [
                {
                label: 'Yield vs. 10 Years Ago (%)',
                data: array ? array['data']['0'] : array,
                borderColor: 'rgb(255, 25, 104)',
                backgroundColor: 'rgba(255, 25, 104, 0.7)',
                },
                {
                label: 'Yield vs. 30 Years Ago (%)',
                data: array ? array['data']['1'] : array,
                borderColor: 'rgb(255, 206, 86)',
                backgroundColor: 'rgba(255, 206, 86, 0.7)',
                },
                {
                label: 'Yield vs. Other Crops (%)',
                data: array ? array['data']['2'] : array,
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                },
            ],
        })
    }, [country])

    // called by useeffect, calls backend for data
    // sets "array" to the data
    function getData() {
        axios.post('http://127.0.0.1:5000/predict',{
            country: country
        })
        .then((response) => {
          setArray(response)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    })}
    
  return (
    <div className="Bar">
        <BarContainer data={data}/>
    </div>
    );
}
export default Item;
