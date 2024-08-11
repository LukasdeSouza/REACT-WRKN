import React, { useState, useMemo } from 'react';

const FibonacciCalculator = () => {
  const [input, setInput] = useState(0);

  // Função recursiva para calcular Fibonacci
  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  // useMemo para memorizar o resultado do cálculo
  const fibValue = useMemo(() => {
    return fibonacci(input);
  }, [input]);

  const handleChange = (e) => {
    setInput(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>Calculadora Fibonacci</h1>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        placeholder="Digite um número"
      />
      <p>Resultado: {fibValue}</p>
    </div>
  );
};

export default FibonacciCalculator;
