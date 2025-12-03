import React from "react";
export const ListaTareas=()=>{
    const tareas=[
        {id:1,nombre:"aprender react",completada:true},
        {id:2, nombre:"crear un componente",completada:true},
        {id:3,nombre:"practicar con map()",completada:false},
        {id:4,nombre:"hacer el ejerccio",completada:false},



    ];
    const completas= tareas.filter((t) => t.completada);
    const pendientes= tareas.filter((t) => !t.completada);
    return(
        <div>
            <h1>mi lista de tareas</h1>
            <h2>Tareas completadas</h2>
            <ul> 
                {completas.map((t,i) =>(
              <li key={t.id}>
                {i+1}. {t.nombre}
                </li> 
                ))}
            </ul>
            <h2>Tareas pendientes</h2>
            <ul> 
                {pendientes.map((t,i) =>(
                    <li key={t.id}>
                        {i+1}. {t.nombre} (falta hacerlo) 
                    </li>
                ))}
            </ul>

            </div>
    );
};

export default ListaTareas