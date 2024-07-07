import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';


const CustomLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: '2018',
            data: [60, 90, 30, 90, 30, 80],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
            tension: 0.1,
          },
          {
            label: '2019',
            data: [80, 60, 100, 30, 50, 25, 55],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#fff'
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label} of ${context.raw} = ${context.parsed.y.toFixed(2)}`,
            },
          },
        },
        scales: {
          x: {
            min: 20,
            max: 120,
            ticks: {
              color: '#fff',
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)',
            },
          },
          y: {
            ticks: {
              color: '#fff',
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)',
            },
          },
        },
        layout: {
          padding: 2,
        },
      },
    });
  }, []);

  return (
    <div className="w-full h-96 rounded-lg">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default CustomLineChart;
