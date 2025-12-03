import React, { useState } from 'react'

const ZonaInteractiva = () => {
    const[hover,setHover]=useState(false)
  return (
    <div>
      <h2>zona interactiva</h2>
       <div id='caja'
       style={{
          background:hover== true? 'red':'green', 
          borderRadius:hover == true ? '50px':'10px',
          transform:hover==true?'scale(1,1)':'scale(1)',
          transition:'all 0.3s ease'
       }}
       onMouseEnter={e=> setHover(true)}
       onMouseLeave={e=> setHover(false)}
      
       >
         {hover==true? 'has pasado por encima':'pasapor encima'}
      
    </div>
    </div>
   
  )
}

export default ZonaInteractiva
