import React, { useContext, useEffect } from "react";
import { stateContext } from "../../../App";
import { Line } from "react-chartjs-2";

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

    setState({
      ...state,
      chartData: { ...state.chartData, OneDaychartData: data },
    });
  }

  useEffect(() => {
    fetchData();
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const options = {
    spanGaps: true,
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "1D Movement, 1 min interval",
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 16,
          // display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const intraData = state.chartData.OneDaychartData;
  if (intraData === null || intraData === undefined) {
    return null;
  }

  let labels = intraData.map((each) => each.label);

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

  return intraData ? (
    <Line options={options} data={data} style={{ width: "600px" }} />
  ) : (
    <p>Please press on chart and back here to reload chart</p>
  );
}

export default OneDayChart;
