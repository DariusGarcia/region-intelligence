import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Total Population',
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Remove vertical lines for the x-axis
      },
    },
    y: {
      grid: {
        display: true, // Keep the horizontal lines for the y-axis
      },
    },
  },
}

const labels = ['2018', '2019', '2020', '2021', '2022', '2023', '2024']

// Manually provided data
const dataset1Data = [80000, 90000, 87000, 95000, 98000, 83000, 82000]

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Population',
      data: dataset1Data,
      backgroundColor: 'rgba(59, 130, 246, 1)',
      barPercentage: 0.2, // Adjust the width of each bar (0.8 means 80% of the available space)
      borderRadius: 10,
    },
  ],
}
export default function TotalPopulationBarChart() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}
