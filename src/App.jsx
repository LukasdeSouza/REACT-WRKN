import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Button from './Button'
import { ThemeContext } from './context'
import FibonacciCalculator from './Calculator'

function App() {
    const themeDefaultValue = {
      theme: 'light',
      name: 'Lucas'
    }

  return (
    <>
      <ThemeContext.Provider value={themeDefaultValue}>
        <div>
          <FibonacciCalculator/>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
