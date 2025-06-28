import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import {jsx as _jsx} from "react/jsx-runtime.js" //directly create elements from jsx


function MyApp(){
  return(
    <h1>THIS IS MY APP!!</h1>
  )
} // directly inserting the function also works

const reactElement = {
    type:'a',
    props: {
        href: 'https://www.google.com/' ,
        target: '_blank'
    },
    children: 'click to visit google'
}
const AnotherEle = (
  <a href="https://www.google.com/" target='_blank'>visit google</a>
)
const sec = typeof AnotherEle //object
const anotheruser = "this is me"
const ReactEle = React.createElement(
  'a',
  {href: "https://www.google.com/" , target: '_blank'},
  'click me to visit google ',
  // anotheruser , sec // these variables are injected
  // AnotherEle
)

createRoot(document.getElementById('root')).render(
    
    // <MyApp />
    <App/>
    // AnotherEle
    // ReactEle
)
