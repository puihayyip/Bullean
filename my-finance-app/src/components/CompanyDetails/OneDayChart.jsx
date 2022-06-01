import React, { useContext, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { stateContext } from "../../App";
import DATA from "../../sampleAPIs/Intraday.json";

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
    // fetchData();
  }, []);

  if (state.intradayData === null || state.intradayData === undefined) {
    // return null;
  }

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

  const labels = Object.keys(DATA["Time Series (5min)"]).reverse();

  const data = {
    labels,
    datasets: [
      {
        label: "AAPL",
        data: labels.map(
          (label) => DATA["Time Series (5min)"][label]["4. close"]
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} style={{ width: "700px" }} />;
}

export default OneDayChart;
