import React, { useState } from 'react'

const MiPrimerEstado = () => {
    //problematica
    //let nombre="isis shaddai federico velez"
    //const cambiarNombre= e =>{
      //  nombre= "Ashley velez "
    //}
    //El uso de estados
    //Creando un estado
    const [nombre, setNombre]=useState("Isis shaddai federico velez")
    const cambiarNombre=e=>{
        setNombre( nom=>nom =="Isis shaddai velez" ? "Ashley velez":"Isis shaddai federico velez")
       
    }
  return (
    <div>
    <h2>Mi primer estado</h2>
    <p>Nombre: <strong>{nombre}</strong></p>
    <button onClick={cambiarNombre}>
        Cambiar Nombre
    </button>
    </div>
  )
}

export default MiPrimerEstado
