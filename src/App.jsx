import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Button from './Button'
import { ThemeContext } from './context'

function App() {
    const themeDefaultValue = {
      theme: 'light',
      name: 'Lucas'
    }

  return (
    <>
      <ThemeContext.Provider value={themeDefaultValue}>
        <div>
          <h2>SEJA BEM VINDO AO REACT</h2>
          <Button />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
