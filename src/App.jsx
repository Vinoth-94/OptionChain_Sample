import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Optionchain from "./Optionchain";

function App() {
  const [symbol, setSymbol] = useState("NIFTY");
  const [data, setdata] = useState({});
  const [loader, setLoader] = useState(false);
  const [time, settime] = useState("");
  const [expirydate, setexpirydate] = useState([]);
  const [underlyingValue, setunderlyingValue] = useState();
  async function apiFetchData(symbol) {
    let url = `https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`;
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      const response = await fetch(url, { options });
      let data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching option chain data:", error);
    }
  }

  useEffect(() => {
    const fetchdata = async () => {
      setLoader(true);
      let data = await apiFetchData(symbol);
      if (data) {
        setdata(data);
        settime(data.records.timestamp);
        setexpirydate(data.records.expiryDates);
        setunderlyingValue(data.records.underlyingValue);
      }
      setLoader(false);
    };
    fetchdata();
  }, [symbol]);

  return (
    <div className="App">
      <Header />

      <Optionchain
        symbol={symbol}
        setSymbol={setSymbol}
        data={data}
        loader={loader}
        time={time}
        expirydate={expirydate}
        underlyingValue={underlyingValue}
      />

      <Footer />
    </div>
  );
}

export default App;
