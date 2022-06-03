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

  const APIKEY = process.env.REACT_APP_LOGOAPIKEY;
  const URL = `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices?token=${APIKEY}`;

  async function fetchData() {
    const res = await fetch(URL);
    const data = await res.json();

    setState({ ...state, intradayData: data });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    spanGaps: true,
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
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 10,
          display: false,
        },
      },
    },
  };

  const intraData = state.intradayData;
  if (intraData === null || intraData === undefined) {
    return null;
  }

  let labels = intraData.map((each) => each.minute);

  const data = {
    labels,
    datasets: [
      {
        label: ticker,
        data: intraData.map((minute) => minute.close),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} style={{ width: "600px" }} />;
}

export default OneDayChart;
