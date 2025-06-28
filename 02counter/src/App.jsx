import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /*useState() returns a [state, setState] pair:
state: the current value
setState: the updater function */

  let [counter, setCounter] = useState(0) // 0 is the default val for counter


  // let counter = 0
  const addVal = function () {
    counter++;
    //document.querySelector('.myCounter').innerHTML = counter
    setCounter(counter)
  }

  const subVal = function () {
    if(counter <= 0) {return setCounter(0)}
    else
    {counter--;
    // document.querySelector('.myCounter').innerHTML = counter
    return setCounter(counter)}
  }
  // these functions will automatically change the change AND update the value of counter in the UI whereever present
  // no need for innerHTML

  function showVal(){
    document.querySelector('.showvalue').innerHTML = counter
  }

  function addTen(){
    setCounter(counter+10)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: <span className='myCounter'>{counter}</span></h2>
      <button onClick={addVal}>Incr</button>
      <br />
      <button onClick={subVal}>Decr</button>
      <h4>footer: count is {counter}</h4>
      <button onClick={showVal}>update value</button>
      <p className='showvalue'></p>
      <button onClick={addTen}>add ten</button><br /><br />
      <button onClick={() => {return setCounter(0)}}>Reset</button>
    </>
  )
}

export default App
