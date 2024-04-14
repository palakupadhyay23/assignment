import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { STRING_CONSTANTS } from "../constants/StringConstants";

const chartContainer = {
  width: "30%",
  padding: "20px",
  margin: "0 auto", // Center align the chart container
};

const CloudCostChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const { OTHERS, ELASTICACHE, OPEN_SEARCH, S3, RDS, EC2 } = STRING_CONSTANTS;

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const doughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [OTHERS, EC2, RDS, S3, OPEN_SEARCH, ELASTICACHE],
        datasets: [
          {
            data: [10000, 30000, 20000, 20000, 10000, 10000],
            backgroundColor: [
              "#FFCE56",
              "#0000FF",
              "#9370DB",
              "#e75480",
              "#36A2EB",
              "#FFA500",
            ],
          },
        ],
      },
      options: {
        cutoutPercentage: 2, // Increase this value to reduce the gap between the circles
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || "";
                if (label) {
                  label += ": ";
                }
                const value = context.formattedValue;
                const percentage = (
                  (context.parsed /
                    context.dataset.data.reduce(
                      (a: number, b: number) => a + b,
                      0
                    )) *
                  100
                ).toFixed(2);
                return `${label}${value} (${percentage}%)`;
              },
            },
          },
          annotation: {
            annotations: [],
          },
        },
        elements: {
          arc: {
            borderWidth: 2,
            borderColor: "#000",
          },
        },
      },
    });

    return () => {
      doughnutChart.destroy();
    };
  }, []);

  return (
    <div style={chartContainer}>
      <h2>Cloud Costs Doughnut Chart</h2>
      <canvas ref={chartRef} width="300" height="300"></canvas>
    </div>
  );
};

export default CloudCostChart;
