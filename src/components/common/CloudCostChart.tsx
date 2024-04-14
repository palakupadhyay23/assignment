import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { STRING_CONSTANTS } from './constants/StringConstants';

const chartContainer = {
  width: "30%",
  padding: "20px"
}

const CloudCostChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const {OTHERS, ELASTICACHE, OPEN_SEARCH, S3, RDS, EC2} = STRING_CONSTANTS

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [OTHERS, ELASTICACHE, OPEN_SEARCH, S3, RDS, EC2],
        datasets: [{
          data: [10000, 10000, 10000, 20000, 20000, 30000],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9900']
        }]
      },
      options: {
        cutoutPercentage: 80,
        plugins: {
          annotation: {
            annotations: [
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x',
                value: 'Others',
                borderColor: '#000',
                borderWidth: 1,
                label: {
                  content: 'Others: 10%',
                  position: 'start',
                  backgroundColor: 'transparent',
                  fontSize: 12,
                  fontColor: '#000',
                  enabled: true
                }
              },
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x',
                value: 'Elasticache',
                borderColor: '#000',
                borderWidth: 1,
                label: {
                  content: 'Elasticache: 10%',
                  position: 'start',
                  backgroundColor: 'transparent',
                  fontSize: 12,
                  fontColor: '#000',
                  enabled: true
                }
              },
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x',
                value: 'OpenSearch',
                borderColor: '#000',
                borderWidth: 1,
                label: {
                  content: 'OpenSearch: 10%',
                  position: 'start',
                  backgroundColor: 'transparent',
                  fontSize: 12,
                  fontColor: '#000',
                  enabled: true
                }
              },
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x',
                value: 'S3',
                borderColor: '#000',
                borderWidth: 1,
                label: {
                  content: 'S3: 20%',
                  position: 'start',
                  backgroundColor: 'transparent',
                  fontSize: 12,
                  fontColor: '#000',
                  enabled: true
                }
              },
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x',
                value: 'RDS',
                borderColor: '#000',
                borderWidth: 1,
                label: {
                  content: 'RDS: 20%',
                  position: 'start',
                  backgroundColor: 'transparent',
                  fontSize: 12,
                  fontColor: '#000',
                  enabled: true
                }
              },
              {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x',
                value: 'EC2',
                borderColor: '#000',
                borderWidth: 1,
                label: {
                  content: 'EC2: 30%',
                  position: 'start',
                  backgroundColor: 'transparent',
                  fontSize: 12,
                  fontColor: '#000',
                  enabled: true
                }
              }
            ]
          }
        }
      }
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