import React from 'react'


const Button = ({state, setState, color, value, name}) => {

  return (
    <button style={{backgroundColor: color}} onClick={() => setState((state) => state + 1)}>
      {state}
    </button>

  )
}

export default Button