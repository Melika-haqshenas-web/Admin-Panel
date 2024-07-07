import React, { useEffect, useRef } from 'react';
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';



const AnimatedChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [0, 50, 100, 150, 200, 250],
        datasets: [{
          label: 'Server Process Data',
          data: [50 , 75 , 30 , 80 , 20 ,0 , 50 ,  40 , 100 , 60],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4, // Smooth curves
          borderWidth: 2,
          pointRadius: 10, // No points
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw} at ${context.label}`,
            },
            enabled: true,
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          legend: {
            display: false,
          },
        },
        elements: {
          line: {
            tension: 0.4,
          },
        },
      },
    });
  }, []);

  return (
    <div className="w-full h-80">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default AnimatedChart;
