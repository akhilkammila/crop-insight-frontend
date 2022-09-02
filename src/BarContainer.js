import { Bar } from 'react-chartjs-2';
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(ChartDataLabels);
Chart.register(zoomPlugin);


function BarContainer({data}) {
  console.log('barcontainer is re-rendering')
  console.log(data)

  const options = {
    scales:{  
        y:{
            grid:{
                lineWidth:1,
                color: "#000000",
                z: -1
            },
            ticks:{
                font:{
                    size: 15,
                    weight: "bold"
                },
                color: "#000000"
            }
        },
        x:{
            min: -1.5,
            max: 3.5,
            grid:{
                lineWidth:1,
                color: "#000000"
            },
            ticks:{
                weight: "bold",
                font:{
                    size: 20,
                },
                color: "#000000"
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
            align: "end"
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
            font: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
        },
    },

  };

  return (
    <Bar key={data} options={options} data={data}/>
  )

}

export default BarContainer;