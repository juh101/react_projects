import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'
function App() {

  return (
    <Provider store={store}> 
    <h1>ToDo list using React-Redux</h1>
    <AddTodo />
    <br />
    <Todos />
    </Provider>
  )
}

export default App
