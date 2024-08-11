import React from 'react'
import { useState } from 'react'

const Button = () => {
    const [count, setCount] = useState(1)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
        Contando {count}
    </button>
  )
}

export default Button