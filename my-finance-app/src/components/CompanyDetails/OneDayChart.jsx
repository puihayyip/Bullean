import React, { useContext, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { stateContext } from "../../App";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function OneDayChart() {
  const [state, setState] = useContext(stateContext);
  const ticker = state.selectedTicker;

  const APIKEY = process.env.REACT_APP_APIKEY;
  const URL = `https://www.alphavantage.co/query?apikey=${APIKEY}&function=TIME_SERIES_INTRADAY&symbol=${ticker}`;

  async function fetchData() {
    const res = await fetch(URL);
    const data = await res.json();

    setState({ ...state, intradayData: data });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "1D Movement",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "AAPL",
        data: [6, 5, 5, 2, 5, 0, 1],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} style={{ width: "450px" }} />;
}

export default OneDayChart;
