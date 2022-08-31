import { Bar } from 'react-chartjs-2';

function Bar2({data}) {
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
                },
                color: "#000000"
            }
        },
        x:{
            min:-6,
            max:43,
            grid:{
                lineWidth:1,
                color: "#000000"
            },
            ticks:{
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
    },

  };

  return (
    <Bar key={data} options={options} data={data}/>
  )

}

export default Bar2;