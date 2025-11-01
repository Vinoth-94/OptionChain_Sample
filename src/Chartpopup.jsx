import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { use } from "react";

const Chartpopup = ({
  putlist,
  calllist,
  showchart,
  setshowchart,
  symbol,
  expirydate,
  underlyingValue,
}) => {
  const chartref = useRef(null);
  let chart;
  console.log(putlist);
  useEffect(() => {
    console.log(chartref.current.getContext("2d"));

    chart = new Chart(chartref.current.getContext("2d"), {
      type: "line",
      data: {
        labels: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        datasets: [
          {
            label: "Call",
            data: calllist.slice(0, 10),
            borderWidth: 1,
          },
          {
            label: "Put",
            data: putlist.slice(0, 10),
            borderWidth: 1,
          },
        ],
      },
    });

    return () => {
      if (chart) {
        chart.destroy();
        chart.clear();
      }
    };
  }, [putlist]);

  return (
    <>
      <div
        className={`${showchart ? "show " : ""} chartpopup`}
        id="option-chain-chart"
      >
        <div className="popup-box">
          <div className="chart-content">
            <div className="chart-header">
              <h4>Chart</h4>
              <a
                href="#"
                className="btn close"
                onClick={(e) => {
                  e.preventDefault();
                  setshowchart(false);
                }}
              >
                {" "}
                X
              </a>
            </div>
            <div className="chart-info-card">
              <div className="row">
                <div className="col col-8">
                  <ul>
                    <li>
                      {" "}
                      <strong>{symbol}</strong>
                    </li>
                    <li>
                      strike
                      <span>{underlyingValue.toLocaleString()}</span>
                    </li>
                    <li>
                      expirydatespa
                      <span>{expirydate[0]}</span>
                    </li>
                  </ul>
                </div>
                <div className="col col2"></div>
              </div>
            </div>

            <div className="option-chain-chart-area" id="optionchart-area">
              <canvas id="myChart" ref={chartref}></canvas>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Chartpopup;
