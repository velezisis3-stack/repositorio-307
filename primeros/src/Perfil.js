import React from "react";
const Perfil=(props)=>{
 

    return(
    <div className="cardStyle"> 
    
    <img className="imageStyle" src={props.avatarUrl} alt="foto de perfil"/>
    <h3>nombre del usuario{props.nombre}</h3>
    <p>@usuario_twitter{props.usuario}</p>
    <p>Descripcon o biografia del usuario {props.bio}</p>
    </div>
    );
}
export default Perfil