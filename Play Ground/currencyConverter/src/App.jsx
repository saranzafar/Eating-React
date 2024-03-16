import { useEffect, useState } from 'react'
import './App.css'
import { InputBox } from './components'
import currencyInfo from './hooks/currencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('PKR')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const useCurrencyInfo = currencyInfo(from)
  const options = Object.keys(useCurrencyInfo)

  useEffect(() => {
    const convert = () => {
      let finalConvertedAmount = parseFloat(amount * useCurrencyInfo[to]).toFixed(2)
      setConvertedAmount(finalConvertedAmount)
    }
    convert()
  }, [amount, to, useCurrencyInfo])

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <>
      <div
        className=" w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="w-full m-auto">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg px-5 backdrop-blur-sm bg-white/30 ">
            <h2 className=" mt-2 mb-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Currency Converter
            </h2>
            <div className="w-full mb-1">
              <InputBox
                label='From'
                amount={amount}
                onAmountChange={(e) => setAmount(e)}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(e) => setFrom(e)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg bg-blue-600 text-white px-4 py-2"
                onClick={swap}
              >swap</button>

            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label={'To'}
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(e) => setTo(e)}
                amountDisable
              />
            </div>
          </div>
        </div>
        <p
          className=' absolute bottom-5 text-xl text-gray-100'
        >Design And Developed By <a href="https://saranzafar.github.io/" target='_blank'
          className=' text-gray-50 hover:underline hover:text-blue-900 font-bold '
        >Saran Zafar</a> </p>
        <p
          className=' absolute bottom-0 text-sm text-gray-200'
        >Copyright © 2024. All rights reserved.</p>
      </div>
    </>
  )
}

export default App
