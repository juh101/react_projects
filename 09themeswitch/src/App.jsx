import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [theme , setTheme] =useState('light')


  
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeButton */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
