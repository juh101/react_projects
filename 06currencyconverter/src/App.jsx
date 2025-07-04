import { useEffect, useState } from 'react'
import InputBox from './components/InputBox';
import './App.css'
import UseCurrInfo from './hooks/useCurrencyInfo.js'
function App() {
  let [amount, setAmount] = useState("")
  let [from, setFrom] = useState("usd")
  let [to, setTo] = useState("inr")
  let [convertedamt, setConvertedamt] = useState("")

  const currencyInfo = UseCurrInfo(from)

  useEffect(() => {
    convert()
  }, [amount, from, to])

  const options = Object.keys(currencyInfo)

  function swap() {
    const temp = from
    setFrom(to)
    setTo(temp)

    // swap amounts too
    setAmount(convertedamt)
    setConvertedamt(amount)

  }

  function convert() {
    setConvertedamt(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${`https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg`}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                type="number"
                amount={amount}
                onAmountChange={(e) => setAmount(Number(e))}
                onCurrencyChange={(e) => setFrom(e)}
                currencyOption={options}
                selectCurrency={from}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamt}
                onAmountChange={(val) => setConvertedamt(val)}
                onCurrencyChange={(e) => setTo(e)}
                currencyOption={options}
                selectCurrency={to}
                amountDisable={true}
                // currencyDisable={true} // Sets 'To'->inr

              />
            </div>
            <button onClick={convert} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>


  )
}

export default App
