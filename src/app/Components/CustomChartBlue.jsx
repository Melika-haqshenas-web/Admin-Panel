import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';


const SimpleLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
          {
            data: [30, 50, 70, 50, 90, 40, 70, 20, 50, 80],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, 'rgba(54, 162, 235, 0.2)');
              gradient.addColorStop(1, 'rgba(54, 162, 235, 0)');
              return gradient;
            },
            fill: true,
            tension: 0.4, // Smooth curves
            pointRadius: 0, // No points
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        elements: {
          line: {
            borderWidth: 2,
          },
        },
        layout: {
          padding: 0,
        },
      },
    });
  }, []);

  return (
    <div className="w-full h-32">
        <canvas ref={chartRef} className='transform scale-[1.9]' ></canvas>
    </div>
  );
};

export default SimpleLineChart;
