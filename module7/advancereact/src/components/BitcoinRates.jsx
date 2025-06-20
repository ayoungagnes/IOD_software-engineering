import { useState, useEffect } from "react";
import BitcoinUseData from "./BitcoinUseData";
import { useEmojiContext } from "../context/EmojiContext";


const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [currencyRate, setCurrencyRate] = useState(0);
  const {currentEmoji, handleUpdateEmoji} = useEmojiContext();
  // fetch URL:https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  // useEffect(() => {
  //   let ignore = false;
  //   fetch(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       if (!ignore) setCurrencyRate(json.bitcoin[currency.toLowerCase()]);
  //       console.log(json);
  //     });
  //   return () => {
  //     ignore = true;
  //     console.log("cleanup effect");
  //   };
  // }, [currency]);
   const data = BitcoinUseData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
  //  setCurrencyRate(data.bitcoin[currency.toLowerCase()])
  const resultData = data? data.bitcoin[currency.toLowerCase()] : 0;
  console.log("resultData",resultData);
  
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox" >
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <strong>currency:</strong> {resultData} {" "} {currentEmoji}
      </div>
    </div>
  );
}

export default BitcoinRates;
