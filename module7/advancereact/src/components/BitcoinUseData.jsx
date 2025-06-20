import { useState, useEffect } from "react";

export default function BitcoinUseData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
         let ignore = false;
         fetch(url)
          .then((response) => response.json())
          .then((json) => {
            if (!ignore) setData(json);
            console.log(json);
          });
        return () => {
          ignore = true;
        };
      }, [url]);
      console.log(data);
      return data;
      
}