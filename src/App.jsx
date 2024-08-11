import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Button from './Button'

function App() {
  const [reaction, setReaction] = useState('❤️')

  useEffect(() => {
    console.log('Componente montado')
  }, [reaction])


  return (
    <>
      <div>
       <h2>SEJA BEM VINDO AO REACT</h2>
       <Button/>
      </div>
    </>
  )
}

export default App
