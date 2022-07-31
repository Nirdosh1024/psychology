import React, { useState, useEffect } from "react";

import { Chart as ChartJs,
        CategoryScale,
        PointElement,
        LinearScale,
        ArcElement,
        Filler,
        LineElement,
        Title,
        Tooltip,
        Legend,
    } from "chart.js";
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';

Chart.register(
        CategoryScale,
        LineElement,
        PointElement,
        LinearScale,
        ArcElement,
        Filler,
        Title,
        Tooltip,
        Legend
);

const BarChart = ({ results, ideal, mean,median }) => {
    const [ chartData, setChartData ] = useState({
        datasets: [],
    });
    const [chartOptions, setChartOptions] = useState({});
    const labels = Object.keys(results);
    labels.shift();
    const data = Object.values(results);
    data.shift();
    const idealData = Object.values(ideal);
    idealData.shift();
    const meanData = mean.map(iterator => iterator.average);
    const medianData = median.map(iterator => iterator.median);
    console.log(medianData)
    useEffect(() => {
        setChartData({
            labels: labels,
            datasets: [{
                label: 'score of test',
                data: data,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.4)',
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1.5
            },
        {
            label: 'Ideal score of tests',
            data: idealData,
            backgroundColor: 'rgba(242, 67, 51, 0.4)',
            borderColor: [
                'rgba(242, 67, 51, 1)',
            ],
            borderWidth: 1
        },
        {
            label: 'mean score',
            data: meanData,
            backgroundColor: 'rgba(125, 223, 100, 0.6)',
            borderColor: 'rgba(125, 223, 100, 1)',
            borderWidth: 1
    },
    {
            label: 'median score',
            data: medianData,
            backgroundColor: 'rgba(95, 15, 64, 0.6)',
            borderColor: 'rgba(95, 15, 64, 1)',
            borderWidth: 1
    }]
        }
        );
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Your Psychometric Tests are as follows"
                }
            }
        })
    }, [])
    return (
        <>
        <Line options={chartOptions} data={chartData} height={250} width={600}/>
        </>
    )
}

export default BarChart;