import { useState } from 'react'
import './App.css'

function App() {
  let [len,setLen]  = useState(8)
  let [numAllowed,setNumAllowed] = useState(false)
  let [charAllowed,setCharAllowed] = useState(false)
  let [pw , setPw] = useState("")

  return (
    <body className='bg-blue-950 text-white'>
    <h1 className='text-4xl text-center'>Password Generator</h1>
    </body>
  )
}

export default App
