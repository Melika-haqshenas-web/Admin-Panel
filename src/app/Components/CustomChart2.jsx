import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from 'chart.js';


const CustomAreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [100, 200, 300, 400, 500, 600, 700, 800],
        datasets: [
          {
            label: 'SALES STATISTICS',
            data: [40, 80, 20, 60, 20, 80, 20, 100],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, 'rgba(255, 99, 132, 0.5)');
              gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');
              return gradient;
            },
            fill: true,
            tension: 0.4, // Smooth curves
            pointRadius: 8, // No points
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw} at ${context.label}`,
            },
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
        },
        scales: {
          x: {
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
          padding: 20,
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

export default CustomAreaChart;
