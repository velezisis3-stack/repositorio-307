import React from "react";
const EventosComponente = () => {
    const hacerclik = () => {
        alert("haz echo clik")
    }
    const hacerDobleClik=()=>{
        alert("haz echo dobleclik")
    }
    const hazEntrado=()=>{
        alert(" haz entrado")
    }
    const hazSalido=(e,accion)=>{
        console.log("hola haz estardo"+accion+"en la casa")
    }
    const dentroimput=()=>{
        comsole.log("Haz entrado el imput")
    }
    const Fueraimput=()=>{
        console.log("Haz salido del imput" )
    }
    return (
        <div>
            <h2>eventos componentes</h2>
            <div>
                <button onClik={hacerclik("Isis Shaddai federico")}>
                    Haz clikaqui
                </button>
            </div>
            <div>
                <button onDoubleClick={hacerDobleClik}>
                    haz doble clik
                </button>
            </div>
            {/*Evento onMou*/}
            <div className="caja"
            onMouseEnter={e=>hazEntrado(e,"entrado")}
            onMouseLeave={ e=>hazSalido(e,"hazSalido")}>

            </div>
            <div>
                <inpu type="tex"
                onFocus ={dentroimput}
                 onBlur={Fueraimput} >

                </inpu>
            </div>
        </div>
    )

}
export default EventosComponente