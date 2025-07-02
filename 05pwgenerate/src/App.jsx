import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(8)
  let [numAllowed, setNumAllowed] = useState(false)
  let [charAllowed, setCharAllowed] = useState(false)
  let [pw, setPw] = useState("")

  const pwgenerator = useCallback(() => {
    console.log("Button clicked");
    
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*~_+-=;:,.<>"

    for (let i = 1; i <= len; i++) {
      let index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPw(pass)
  }, [setPw, charAllowed, numAllowed, len])

  useEffect(() => {
    pwgenerator()
    console.log("I run after the component renders");

    return () => {
      console.log("Cleanup before unmount");
    };
  }, [len, numAllowed, charAllowed])

  function handleCopy() {
    navigator.clipboard.writeText(pw);
    alert("copied!")
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-300">
        <p className="mb-4 text-center font-semibold">Password Generator</p>

        <input
          type="text"
          value={pw}
          readOnly
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border-2 border-black rounded-md bg-white text-black"
        />

        <button className="outline-none bg-blue-700 text-white px-3 py-1 mb-4 rounded"
          onClick={handleCopy}>
          Copy
        </button>

        <div className="flex items-center justify-between gap-2">
          <input
            type="range"
            min={6}
            max={100}
            value={len}
            onChange={(e) => setLen(e.target.value)}
            className="w-full cursor-pointer"
          />
          <label >Length: {len}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => setNumAllowed(prev => !prev)}
          /><label htmlFor='numberInput'>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed(prev => !prev)}
          /><label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>



  );

}

export default App
