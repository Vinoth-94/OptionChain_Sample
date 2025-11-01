import React, { useEffect } from "react";
import refresh from "./assets/refresh.svg";
import Tablecontent from "./Tablecontent";

const Optionchain = ({
  data,
  loader,
  setSymbol,
  time,
  symbol,
  expirydate,
  underlyingValue,
  putlist,
  calllist,
  setshowchart,
  underlying,
}) => {
  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  const { filtered } = data;

  return (
    <>
      <section id="optionchn">
        <div className="fld-container">
          <nav>
            <div className="container">
              <ul className="nav-link">
                <li className="nav-tab active">
                  <a href="#" className="active">
                    Equity Stock
                  </a>
                </li>
                <li className="nav-tab">
                  <a href="#">Currency Stock</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="option-table">
            <div className="container">
              <div className="top-layer">
                <div className="header" style={{ textAlign: "left" }}>
                  <div className="row">
                    <div className="col col-6">
                      <h2 className="heading">
                        Option Chain (Equity Derivatives)
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col">
                      <label className="lable" htmlFor="indesis-opt">
                        {" "}
                        View Options Contracts for:
                      </label>
                      <div className="select-card">
                        <select
                          id="indesis-opt"
                          value={symbol}
                          onChange={(e) => {
                            setSymbol(e.target.value);
                          }}
                        >
                          <option value="select">Select</option>
                          <option value="NIFTY">NIFTY</option>
                          <option value="NIFTYNXT50">NIFTYNXT50</option>
                          <option value="FINNIFTY">FINNIFTY</option>
                          <option value="BANKNIFTY">BANKNIFTY</option>
                          <option value="MIDCPNIFTY">MIDCPNIFTY</option>
                        </select>
                      </div>
                    </div>

                    <span>OR</span>

                    <div className="col-2 col">
                      <label className="lable" htmlFor="symbol-opt">
                        {" "}
                        Select Symbol
                      </label>
                      <div className="select-card">
                        <select id="symbol-opt">
                          <option value="select">Select</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-2 col">
                      <label className="lable" htmlFor="Date-opt">
                        {" "}
                        Expiry Date
                      </label>
                      <div className="select-card">
                        <select id="Date-opt">
                          <option value="select">Select</option>
                          {/* {expirydate.map((date, i) => {
                            return (
                              <option key={i} value={date}>
                                {date}
                              </option>
                            );
                          })} */}
                        </select>
                      </div>
                    </div>

                    <span>OR</span>

                    <div className="col-2 col">
                      <label className="lable" htmlFor="Price-opt">
                        {" "}
                        Strike Price
                      </label>
                      <div className="select-card">
                        <select name="Price-opt" id="Price-opt">
                          <option value="select">Select</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 col">
                      <span>Underlying Index : </span>
                      <span style={{ fontWeight: "bold" }}>
                        {underlying} {underlyingValue.toLocaleString()}
                      </span>
                      <span className="ondate">
                        {/* As on {date.toDateString()} {date.toLocaleTimeString()} */}
                      </span>
                      <span className="ondate">As on {time}</span>
                      <span className="refresh">
                        <a href="#">
                          <img src={refresh} alt="refresh" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-content">
                <div className="row">
                  <div className="col col-12">
                    <table className="option-tbl" id="optionchain-table">
                      <thead>
                        <tr>
                          <th colSpan="11">Call</th>
                          <th className="strike"></th>
                          <th colSpan="11">Put</th>
                        </tr>
                        <tr>
                          <th width="2.34%"></th>
                          <th>OI</th>
                          <th>Chng in OI</th>
                          <th>Volume</th>
                          <th>IV</th>
                          <th>LTP</th>
                          <th>Chng</th>
                          <th>Bid Qty</th>
                          <th>Bid</th>
                          <th>Ask</th>
                          <th>Ask Qty</th>
                          <th>Strike</th>
                          <th>Bid Qty</th>
                          <th>Bid</th>
                          <th>Ask</th>
                          <th>Ask Qty</th>
                          <th>Chng</th>
                          <th>LTP</th>
                          <th>IV</th>
                          <th>Volume</th>
                          <th>Chng in OI</th>
                          <th>OI</th>
                          <th width="2.34%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {loader ? (
                          <tr style={{ textAlign: "center" }}>
                            <td
                              colSpan={23}
                              style={{ fontSize: "20px", padding: "10px" }}
                            >
                              loading
                              <span
                                style={{ display: "inline-block" }}
                                className="loader"
                              ></span>
                            </td>
                          </tr>
                        ) : (
                          <Tablecontent
                            filteredata={filtered}
                            putlist={putlist}
                            calllist={calllist}
                            setshowchart={setshowchart}
                          />
                        )}
                        {/* <tr>
                          <td>Total</td>
                          <td>{data.filtered.CE.totOI}</td>
                          <td></td>
                          <td>{data.filtered.CE.totVol}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>{data.filtered.CE.totVol}</td>
                          <td></td>
                          <td>{data.filtered.PE.totOI}</td>
                          <td></td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Optionchain;
