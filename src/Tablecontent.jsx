import React from "react";
import chart from "./assets/up.svg";

const Tablecontent = ({ filteredata }) => {
  if (!filteredata) {
    return (
      <tr className="">
        <td>Loading...</td>
      </tr>
    );
  }
  var hCE = [...new Set(filteredata.data.map((d) => d.CE.openInterest))].sort(
    (a, b) => a - b
  );
  var hPE = [...new Set(filteredata.data.map((d) => d.PE.openInterest))].sort(
    (a, b) => a - b
  );
  // console.log(hCE[hCE.length - 1]);
  // console.log(hPE);
  // console.log(filteredata.data[0].CE.openInterest);
  return (
    <>
      {filteredata.data.map((option) => {
        return (
          <tr
            key={option.CE.strikePrice}
            className={`
              ${
                option.CE.openInterest == hCE[hCE.length - 1]
                  ? "bg-grn-act"
                  : ""
              }
                ${
                  option.PE.openInterest == hPE[hPE.length - 1]
                    ? "bg-red-act"
                    : ""
                }
            `}
          >
            <td width="2.34%">
              <a href="#optionchain-table" className="chart">
                <img src={chart} alt="chart" />
              </a>
            </td>
            <td className="bg-grn">{option.CE.openInterest || "-"}</td>
            <td className="bg-grn">{option.CE.changeinOpenInterest || "-"}</td>
            <td className="bg-grn">{option.CE.totalTradedVolume || "-"}</td>
            <td className="bg-grn">{option.CE.impliedVolatility || "-"}</td>
            <td className="strick bg-grn">{option.CE.lastPrice || "-"}</td>
            <td
              className={
                option.CE.change > 0 ? "green-txt bg-grn" : "red-txt bg-grn  "
              }
            >
              {option.CE.change.toFixed(2) || "-"}
            </td>
            <td className="bg-grn">{option.CE.bidQty || "-"}</td>
            <td className="bg-grn">{option.CE.bidprice || "-"}</td>
            <td className="bg-grn">{option.CE.askPrice || "-"}</td>
            <td className="bg-grn">{option.CE.askQty || "-"}</td>

            <td className="strick">{option.CE.strikePrice || "-"}</td>

            <td className="bg-red">{option.PE.bidQty || "-"}</td>
            <td className="bg-red">{option.PE.bidprice || "-"}</td>
            <td className="bg-red">{option.PE.askPrice || "-"}</td>
            <td className="bg-red">{option.PE.askQty || "-"}</td>
            <td
              className={
                option.PE.change > 0 ? "green-txt bg-red" : "red-txt bg-red"
              }
            >
              {option.PE.change.toFixed(2) || "-"}
            </td>
            <td className="bg-red">{option.PE.impliedVolatility || "-"}</td>
            <td className="bg-red strick">{option.PE.lastPrice || "-"}</td>
            <td className="bg-red">{option.PE.totalTradedVolume || "-"}</td>
            <td className="bg-red">{option.PE.changeinOpenInterest || "-"}</td>
            <td className="bg-red">{option.PE.openInterest || "-"}</td>
            <td width="2.34%">
              <a href="#optionchain-table" className="chart">
                <img src={chart} alt="chart" />
              </a>
            </td>
          </tr>
        );
      })}

      {/* <tr>
        <td width="2.34%">
          <a href="javascript::" className="chart">
            <img src={chart} alt="chart" />
          </a>
        </td>

        <td>OI </td>
        <td>Chng in OI</td>
        <td>Volume</td>
        <td>IV</td>
        <td>LTP</td>
        <td>Chng</td>
        <td>Bid Qty</td>
        <td>Bid</td>
        <td>Ask</td>
        <td>Ask Qty</td>
        <td>Strike</td>

        <td>Bid Qty</td>
        <td>Bid</td>
        <td>Ask</td>
        <td>Ask Qty</td>
        <td>Chng</td>
        <td>LTP</td>
        <td>IV</td>
        <td>Volume</td>
        <td>Chng in OI</td>
        <td>OI</td>
        <td width="2.34%">
          <a href="javascript::" className="chart">
            <img src={chart} alt="chart" />
          </a>
        </td>
      </tr> */}
    </>
  );
};

export default Tablecontent;
