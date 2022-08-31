import React, {useEffect, useState, useRef} from 'react';
import './Item.css';
import BarContainer from './BarContainer.js'

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


function Item({country}) {
    const labels = ['Maize', 'Sweet Potatoes', 'Wheat', 'Cassava', 'Potatoes', 'Rice', 'Sorghum','Soybeans',"Yams","Other"];

    const [array, setArray] = useState([])
    const [data, setData] = useState({
        labels,
        datasets: [
            {
            label: 'Dataset 1',
            data: array[1],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
            label: 'Dataset 2',
            data: array[2],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 1)',
            },
            {
            label: 'Dataset 3',
            data: array[3],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 1)',
            },
        ],
    })

    // fetches the data when the item first loads
    useEffect(()=>{
        getData()
        console.log('bout to log the array')
        console.log(array)
        setData({
            labels,
            datasets: [
                {
                label: 'Dataset 1',
                data: array['data']['0'],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                },
                {
                label: 'Dataset 2',
                data: array['data']['1'],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 1)',
                },
                {
                label: 'Dataset 3',
                data: array['data']['2'],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 1)',
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
        <h1>hey</h1>
        <BarContainer data={data}/>
    </div>
    );
}
export default Item;
