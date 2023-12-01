
import React, { useId } from 'react'

function CurrencyInput({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyList = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {

    const inputId = useId();
    return (
        <div className={`flex bg-white p-3 rounded-lg text-sm ${className}`}>
            <div className="w-1/2">
                <label htmlFor={inputId} className="text-black/40 mb-2 inline-block" >{label}</label>
                <input
                    id={inputId}
                    className='outline-none w-full bg-transparent py-1.5'
                    type="number"
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />

            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full" >Currency</p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {
                        currencyList.map((each) => (
                            <option value={each} key={each}>
                                {each}
                            </option>
                        ))
                    }

                </select>

            </div>

        </div>
    )
}

export default CurrencyInput