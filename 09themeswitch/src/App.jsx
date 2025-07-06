
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    // consolde.log(themeMode);

    document.querySelector('#root').classList.remove("light", "dark")
    document.querySelector('#root').classList.add(themeMode)
  }, [themeMode])

  const [currtheme, setCurrtheme] = useState('light')

  useEffect(() => {

  },[currtheme])

  const changetheme = () => {
    setCurrtheme(currtheme === 'dark' ? 'light' : 'dark')
    console.log(currtheme);
    
  }

  return (
    <div data-theme={currtheme}>
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className=" flex flex-wrap min-h-screen items-center bg-gray-100 dark:bg-gray-500">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* <ThemeBtn /> */}
            <button 
            className="px-6 py-2 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 active:scale-95 transition-transform duration-200 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            onClick={changetheme}>Dark Mode</button>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
        
      </div>
    </ThemeProvider>
    </div>
  )
}

export default App
