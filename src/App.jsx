import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [state, setState] = useState(1)

  return (
    <>
      <div>
        <Button state={state} setState={setState} color={'red'} name={'LUCAS'} value={'texto'}/>
      </div>
    </>
  )
}

export default App
