import { useEffect, useState } from "react";

function useCurrencyInfo(iCurrency) {
    //https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json
    //https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json

    const [currencyData, setCurrencyData] = useState({})
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${iCurrency}.json`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setCurrencyData(res[iCurrency]))
    }, [iCurrency])

    return currencyData
}

export default useCurrencyInfo