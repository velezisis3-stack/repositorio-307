import React, { useState } from "react";
const Contador=()=>{
const [valor,setValor]=useState(0)
    return(
        <div>
            <h1>Contador</h1>
        <p>contador:<strong>{valor}</strong></p>
        <p>
            <button onClick={()=> setValor(valor+1)}>
                aumentar
            </button>
            
            <button onClick={()=> setValor(0)}>
                reiniciar
            </button>
        </p>
        </div>
    )
}
export default Contador