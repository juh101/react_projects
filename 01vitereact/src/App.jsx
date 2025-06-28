import { StrictMode } from "react"
import Chai from "./chai.jsx"


function App() {
  const username = "juhi"
  const type = typeof(App)
  return (
    // can only return one element

    <>
    <h2>chai and code with vite my username is {username} {type}</h2>
    <Chai/>
    </>
  )
}

export default App
