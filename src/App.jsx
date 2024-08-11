import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [reaction, setReaction] = useState('❤️')

  useEffect(() => {
    console.log('Componente montado')
  }, [reaction])


  return (
    <>
      <div>
       <h2>SEJA BEM VINDO AO REACT</h2>
       <button onClick={() => setReaction('👍')}>
        REAGIR
       </button>
       <p>sua reação: {reaction}</p>
      </div>
    </>
  )
}

export default App
