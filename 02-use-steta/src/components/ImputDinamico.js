import React, { useState } from 'react'

const ImputDinamico = () => {
    const[nombre,setNombre]=useState("isis shaddai" )
    const cambiarNombre=(e, nombreFijo)=>{
        setNombre(nombreFijo)
    }
  return (
    <div>
      <h2>imput dinamico</h2>
      <p>nombre: <strong>{nombre}</strong></p>
      <p>
        <input type='text'
        placeholder='ingresa tu nombre'
        onChange={e=> cambiarNombre(e,e.target.value)}/>

      </p>
      <p>
       <button onClick={e=>setNombre("")}>borrar</button>
      </p>
    </div>
  )
}

export default ImputDinamico
