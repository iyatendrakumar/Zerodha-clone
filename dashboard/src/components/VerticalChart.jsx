import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Holdings} from "./Holdings"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: {
      display: true,
      text: "Monthly P&L",
    },
  },
};



// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   datasets: [
//     {
//       label: "Profit",
//       data: [1200, 1900, 300, 500, 2000, 1800, 2400],
//       backgroundColor: "rgba(53, 162, 235, 0.6)",
//     },
//     {
//       label: "Loss",
//       data: [400, 700, 200, 300, 900, 500, 600],
//       backgroundColor: "rgba(255, 99, 132, 0.6)",
//     },
//   ],
// };

export function VerticalGraph({data})  {
  return <Bar options={options} data={data} />;
};