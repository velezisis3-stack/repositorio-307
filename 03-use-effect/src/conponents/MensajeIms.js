import React from 'react'

const MensajeIms = ({categoria}) => {
  return (
    <div className='extra-box'>
        <h3>informacion adicional</h3>
        <p>tu clacificacion es<strong>{categoria}</strong></p>
        <p>recuerda mantener una buena alimentacion para tu salu</p>
        
    </div>
  )
}

export default MensajeIms
