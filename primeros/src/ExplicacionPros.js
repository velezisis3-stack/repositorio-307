import React from "react";

const ExpliacionPros = (props) => {
    return (
        <div className="primer-coponente">
            <h2>propiedades react </h2>
            <h3>informacion del paciente</h3>
            <ul>
                <li> <strong>nombre:</strong>{props.nombre}</li>
            </ul>
            <li>
            <h4>ficha medica </h4>
            <ul>
                <li><strong>altura:</strong>{props.ficha.altura}</li>
                <li><strong>grupo:</strong>{props.ficha.grupo}</li>
                <li><strong>estado:</strong>{props.ficha.estado}</li>
            </ul>
        </li>
    </div >
    )

}
export default ExpliacionPros