import React from "react";
import chart from "./assets/up.svg";

const Tablecontent = ({ filteredata, putlist, calllist, setshowchart }) => {
  if (!filteredata) {
    return (
      <tr className="">
        <td>data fetching...</td>
        <td className="loader" colSpan={22}></td>
      </tr>
    );
  }

  // var hCE = [...new Set(filteredata.data.map((d) => d.CE?.openInterest))].sort(
  //   (a, b) => a - b
  // );
  // var hPE = [...new Set(filteredata.data.map((d) => d.PE?.openInterest))].sort(
  //   (a, b) => a - b
  // );
  var hPE = putlist;
  var hCE = calllist;
  // updateput(hPE);
  // updatecall(hCE);
  return (
    <>
      {filteredata.data.map((option) => {
        return (
          <tr
            key={option.CE?.strikePrice || option.PE?.strikePrice}
            className={`${
              option.CE?.openInterest == hCE[hCE.length - 1] ? "bg-grn" : ""
            } ${
              option.PE?.openInterest == hPE[hPE.length - 1] ? "bg-red" : ""
            }`}
          >
            <td width="2.34%">
              <a
                href=""
                className="chart"
                onClick={(e) => {
                  e.preventDefault();
                  setshowchart(true);
                }}
              >
                <img src={chart} alt="chart" />
              </a>
            </td>
            <td>{option.CE?.openInterest || "-"}</td>
            <td>{option.CE?.changeinOpenInterest || "-"}</td>
            <td>{option.CE?.totalTradedVolume || "-"}</td>
            <td>{option.CE?.impliedVolatility || "-"}</td>
            <td className="strick ">{option.CE?.lastPrice || "-"}</td>
            <td className={option.CE?.change > 0 ? "green-txt" : "red-txt "}>
              {option.CE?.change.toFixed(2) || "-"}
            </td>
            <td>{option.CE?.bidQty || "-"}</td>
            <td>{option.CE?.bidprice || "-"}</td>
            <td>{option.CE?.askPrice || "-"}</td>
            <td>{option.CE?.askQty || "-"}</td>

            <td className="strick">
              {option.CE?.strikePrice.toFixed(2) ||
                option.PE?.strikePrice.toFixed(2) ||
                "-"}
            </td>

            <td>{option.PE?.bidQty || "-"}</td>
            <td>{option.PE?.bidprice || "-"}</td>
            <td>{option.PE?.askPrice || "-"}</td>
            <td>{option.PE?.askQty || "-"}</td>
            <td className={option.PE?.change > 0 ? "green-txt " : "red-txt"}>
              {option.PE?.change.toFixed(2) || "-"}
            </td>
            <td>{option.PE?.impliedVolatility || "-"}</td>
            <td className=" strick">{option.PE?.lastPrice || "-"}</td>
            <td>{option.PE?.totalTradedVolume || "-"}</td>
            <td>{option.PE?.changeinOpenInterest || "-"}</td>
            <td>{option.PE?.openInterest || "-"}</td>
            <td width="2.34%">
              <a
                href="#optionchain-table"
                className="chart"
                onClick={(e) => {
                  e.preventDefault();
                  setshowchart(true);
                }}
              >
                <img src={chart} alt="chart" />
              </a>
            </td>
          </tr>
        );
      })}
    </>
  );

  // console.log(hCE[hCE.length - 1]);
  // console.log(hPE);
  // console.log(filteredata.data[0].CE.openInterest);
};

export default Tablecontent;
