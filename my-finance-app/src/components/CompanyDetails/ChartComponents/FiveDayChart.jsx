import React, { useContext, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { stateContext } from "../../../App";

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

function FiveDayChart() {
  const [state, setState] = useContext(stateContext);
  const ticker = state.selectedTicker;

  const APIKEY = process.env.REACT_APP_LOGOAPIKEY;
  const URL = `https://cloud.iexapis.com/stable/stock/${ticker}/chart/5dm?token=${APIKEY}`;

  async function fetchData() {
    const res = await fetch(URL);
    const data = await res.json();

    setState({
      ...state,
      chartData: { ...state.chartData, FiveDaychartData: data },
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
        text: "5D Movement, 10 min interval",
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 30,
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

  const localChartData = state.chartData.FiveDaychartData;
  if (localChartData === null || localChartData === undefined) {
    return null;
  }

  let labels = localChartData.map((each) => each.date + " " + each.minute);

  const data = {
    labels,
    datasets: [
      {
        label: ticker,
        data: localChartData.map((period) => period.close),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return localChartData ? (
    <Line options={options} data={data} />
  ) : (
    <p>Please press on chart and back here to reload chart</p>
  );
}

export default FiveDayChart;
