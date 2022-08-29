import React from 'react'

const Challenge = () => {
    const valorA = 3
    const valorB = 5

    const somaValores = () => {
        console.log(valorA + valorB)
    }

  return (
    <div>
        <h1>Challenge</h1> 
        <p>Valores do componente: {valorA} e o {valorB}</p>
        <button onClick={somaValores}>Somar os valores do componente</button>
    </div>
  )
}

export default Challenge