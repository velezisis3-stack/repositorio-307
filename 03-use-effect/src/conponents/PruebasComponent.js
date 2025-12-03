import React, { useEffect, useState } from 'react'
import SaludoComponent from './SaludoComponent'

const PruebasComponent= () => {
  const[nombre,setNombre]=useState("Isis shaddai")
  const[numero,setNumero]=useState(0)
  const[hover,setHover]=useState(false)
  const[noLetras,setNoLetras]=useState(0)
  const [contador,setContador]=useState(0)
   
 const modificaNombre=(e)=>{
    setNombre(e.target.value)
    setNoLetras(e.target.value.length)
    console.log("no letras"+ noLetras)
  }
  const contar=(e)=>{
    setNumero(numero+1)
  }
  useEffect(()=>{
console.log("el nombre a sido modificado"+contador+"veces")
setContador(contador+1)
  },[numero,noLetras])
  useEffect(()=>{
    console.log("el numero asido aumentado"+ contador+" veces")
    setContador(contador+1)
  },[numero,hover])
  
  return (
    <div>
      <h1>el efecto hook use-effect</h1>
      <p className='Isis'>
        nombre:<strong>{nombre}</strong>
      </p>
      <p>
        Contador:<strong>{numero}</strong>
      </p>
      <p className={ contador>8 ? 'letra-verde':'letra-roja'}>
        {contador>8 ? 'Contraseña segura':'contraseña no es sgura'}
      </p>
      <p>
        
       <input type='text' placeholder='cambiar nobre'
       onChange={e=> modificaNombre(e)}/>
       <button onClick={contar}>aumentar</button>
      </p>
      <div className='area-sensible'
      style={{
        background:hover== true? 'orange': 'blue'
      }}
      onMouseEnter={e=> setHover(true)}
      onMouseLeave={e=> setHover(false)}>
 pasar por aqui 
      </div>
      {nombre=== 'isis'?<SaludoComponent/>:''}
    </div>
  )
}

export default PruebasComponent