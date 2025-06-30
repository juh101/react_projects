import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";



function App() {
  let [state, changestate] = useState(0)
  let myObj = {
    nameis: "juhi",
    age: 22
  }
  let myArr = [1,2,3,4,5]
  return (
    <div className=' bg-grey flex justify-center items-center h-screen' >
      <div className='bg-blue-950 text-[50px] text-pink-400'>Tailwind Test</div>
      <p>state is {state}</p>
      <button className='mb-4 mt-2' onClick={() => {
        changestate(state + 1)
      }}>toAdd</button>
      <Card username="chaiaurcode" text="thisischannel" someObj = {myArr}/>
      <Card username="juhiahuja" text="thisisme"/>

    </div>
  )
}

export default App
