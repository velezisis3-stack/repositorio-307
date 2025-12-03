import React from "react";
function MiSegundoComando() {
    const nombre= "ana laura equivel"
    const escuela ="unam fes iztacala"
    const edad=43
    const materias=[
        {id:1, nombre:"programacion",profesor:"mtro lopez", creditos:6},
        {id:2, nombre:"basededatos", profesor:"mtra rivera",creditos:5},
        {id:3, nombre:"diseño",profesor:"ing martinez",creditos:4},

    ];
    return(
        <div> 
           < h1>bienvenido a mi segundo comando </h1>
           <h2>imformacion del estudiante </h2>
           <p><strong>Nombre: </strong>{nombre} </p>
           <p><strong>Edad: </strong>{edad} </p>
           <p><strong>Escuela: </strong>{escuela} </p>
           <h3>materias inscritas</h3>
           <ul> 
            {materias.map((materia) => (
                <li key={materia.id}>
             <p><strong>Materias:</strong>{materia.nombre} </p>
             <p>profesor: {materia.profesor} </p>
             <p>Creditos: {materia.creditos} </p>
             <hr/>
             </li>
            ))}
            
           </ul>
           <footer>
             <p>creado por {nombre}- grupo 601 </p>
           </footer>
        </div>
        
        );

}
export default MiSegundoComando;