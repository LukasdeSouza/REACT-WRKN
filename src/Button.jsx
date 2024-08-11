import React from 'react'
import { useState } from 'react'

const Button = () => {
    const [count, setCount] = useState(1)

  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>
            Contando {count}
        </button>
    <Text/>
    </div>
  )
}

export default Button