import { useMemo } from "react";
import useAmout from "../hooks/useAmout";
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
import sharedData from "../shared/data/data";

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
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Additional Information Amout Bar Chart",
    },
  },
};

const ChartContainer = () => {
  const { convertIntoNumber } = useAmout();

  const amount = useMemo(() => {
    return sharedData.reduce((acc, cur) => {
      const sum = convertIntoNumber(`${cur.additionalInformation[0]}`);
      if (acc[cur.additionalInformation[2]]) {
        acc[cur.additionalInformation[2]] += sum;
      } else {
        acc[cur.additionalInformation[2]] = sum;
      }
      return acc;
    }, {} as Record<string, number>);
  }, [sharedData]);

  const labels = Object.keys(amount);
  const chartData = Object.values(amount);

  const data = {
    labels,
    datasets: [
      {
        label: "Amout",
        data: chartData,
        backgroundColor: "#3165A3",
      },
    ],
  };

  return (
    <div className="p-1">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartContainer;
