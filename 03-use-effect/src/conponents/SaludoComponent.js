import React from 'react'

const SaludoComponent = () => {
  return (
    <div>
      <h3>Hola isis como estas</h3>
      <button onClick={e => alert("bienvenido")}>
        Mostrar mensaje

      </button>
    </div>
  )
}

export default SaludoComponent
