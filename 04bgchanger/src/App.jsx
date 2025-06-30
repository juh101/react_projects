import { useState } from 'react'
import './App.css'

function App() {
  let [color , setColor]= useState("black")
  function pink(){
    const bd = document.querySelector('body')
    console.log(typeof bd);
    
    bd!='pink' ? bd.style.backgroundColor="pink" : bd.style.backgroundColor="black"
  }
  return (
    <body className='w-full h-screen duration-200'
      style={{backgroundColor: color}} 
      ><div className='border-2 border-white rounded-full w-170 mx-auto fixed flex flex-wrap justify-center bottom-38 inset-x-0 px-2'>
        <button onClick={pink} className='bg-pink-300 rounded-2xl'> pink </button>
        <button onClick={() => {setColor("yellow")}} className='bg-yellow-300 rounded-2xl'> yellow </button>
        <button onClick={() => setColor("blue")} className='bg-blue-200 rounded-2xl'> blue </button>
        <button onClick={() => setColor("purple")} className='bg-purple-500 rounded-2xl'> lavender </button>
        <button onClick={() => setColor("green")} className='bg-green-400 rounded-2xl'> green </button>
        <button onClick={() => setColor("red")} className='bg-red-600 rounded-2xl'> red </button>
        </div>
    </body>
  )
}

export default App
