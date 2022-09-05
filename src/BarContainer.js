import { Bar } from 'react-chartjs-2';
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { green, red } from '@mui/material/colors';
import Context from '@mui/base/TabsUnstyled/TabsContext';
import { fontFamily } from '@mui/system';
Chart.register(ChartDataLabels);


function BarContainer({data}) {
  console.log('barcontainer is re-rendering')
  console.log(data)

  const options = {
    scales:{  
        y:{
            grid:{
                lineWidth:1,
                color: "rgba(0, 0, 0, 0.4)",
                z: -1,
            },
            ticks:{
                font:{
                    size: 15,
                    weight: "bold"
                },
                color: "#000000",
                padding: 80
            },
            afterFit(scale){
                scale.width =200;
            }
        },
        x:{
            min: -50,
            max: 400,
            grid:{
                lineWidth:1,
                color: "rgba(0, 0, 0, 0.4)"
            },
            ticks:{
                weight: "bold",
                font:{
                    size: 20,
                },
                color: "#000000",
                callback: function(value, index, ticks) {
                    return  value + "%";
                }
            }
        }
    },
    indexAxis: 'y',
    elements: {
        bar: {
        borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: "top",
            align: "end",
        },
        title: {
            display: true,
            font:{
                size: 40
            },
            text: 'Crop Yield Analysis',
            color: "#000000"
        },
        datalabels: {
            display: true,
            color: "black",
            align: "left",
            anchor: "end",
            fontFamily: "Comic Sans MS",
            formatter: function(value) {
                return Math.abs(value) > 15 ? value+"%": ""
            }
        },
    },

  };

  return (
    <Bar key={data} options={options} data={data}/>
  )

}

export default BarContainer;