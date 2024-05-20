import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    currencyOptions = [],
    selectCurrency,
    onCurrencyChange,
    amountDisable = false,

}) {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8 ">
                <div className="backdrop-blur-3xl p-5 rounded-lg sm:mx-auto  sm:max-w-sm flex border justify-center align-middle flex-wrap">
                    <div className='w-1/2'>
                        <div className="flex items-center justify-between">
                            <label htmlFor="inputgroup" className="block font-medium leading-6 text-gray-900 text-lg">
                                {label}
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="inputgroup"
                                name="inputgroup"
                                type="number"
                                value={amount}
                                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                                disabled={amountDisable}
                                className=" outline-none backdrop-blur-3xl bg-transparent text-xl sm: w-3/4"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-wrap justify-end text-right">
                        <p className=" text-gray-900 mb-2 w-full">Currency Type</p>
                        <select
                            value={selectCurrency}
                            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none leading-tight"
                        >
                            {currencyOptions.map((option) => {
                                if (option) {
                                    return (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    );
                                } else {
                                    return (
                                        <li key={'error'}>N/L</li>
                                    );
                                }
                            })}
                        </select>

                    </div>
                </div>
            </div>
        </>
    )
}

export default InputBox