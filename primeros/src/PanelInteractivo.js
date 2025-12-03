import React from "react";
const PanelInyeractivo=()=>{
   
    const manejarClik=()=>{
        console.log("hacer clik")

    }
    const  manejarelRaton=()=>{
        console.log("estas pasando el maus por la zona ")
    }

    const escribirNombre=(e)=>{
        console.log("escribiendo",e.target.value)
    }
    return(
        <div>
            <h1>panel de control interactivo</h1>
            <p>ñectura con elementos para que pasa en la consola</p>
            <button onClick={manejarClik}>
                boton de accion
            </button>
            <hr/>
            {/*---ZONA SENSIBLE*/}
            <div className="zona-sensible"
            onMouseMove={manejarelRaton}>
                pasa el raton por aqui
            </div>
            <hr/>
           <div className="campo-texto"
           >
            <isabel>TU nombre:</isabel>
            <input type="tex" placeholder="Escribe tu nombre..." onChange={escribirNombre}/>
           </div>

        </div>
    )
}
export default PanelInyeractivo