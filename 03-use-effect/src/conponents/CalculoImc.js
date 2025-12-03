import React,{useState,useEffect}from 'react'
import MensajeIms from './MensajeIms'

export default function CalculoImc() {
    const [edad, setEdad] = useState("")
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [resultado, setResultado] = useState(null)
    const [categoria, setCategoria] = useState("")
    const tablaIMC = [
        { rango: "bajo peso", min: 0, max: 18.49 },
        { rango: "peso normal", min: 18.5, max: 24.99 },
        { rango: "sobrepeso", min: 25, max: 29.99 },
        { rango: "obesidad grado1", min: 30, max: 34.99 },
        { rango: "obesidad grado 2", min: 25, max: 39.99 },
        { rango: "obesidad grado 3", min: 40, max: 100 },
    ]
    const calcularIMC = () => {
        if (!peso || !altura) return;
        const imcCalculado = peso / (altura * altura);
        setResultado(imcCalculado.toFixed(2));
    };
    useEffect(() => {
        if (!resultado) return;
        const valor = parseFloat(resultado);
        const clasificacion = tablaIMC.find(
            (item) => valor <= item.min && valor <= item.max
        );
        setCategoria(clasificacion ? clasificacion.rango : "sin clasificacion");
    }, [resultado]);
    return (
        <div className="imc-container">
            <h2 className="titulo">calculadora imc</h2>
            <div className="campo">
                <label>edad:</label>
                <input
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    placeholder="ingresa tu edad" />
            </div>
            <div className="campo">
                <label>peso(kg):</label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="ingresa tu peso" />
            </div>
            <div className="campo">
                <label>altura(m): </label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="ej:1.70" />
            </div>
            <button className="btn-imc"
                onClick={calcularIMC}>calcilar imc</button>
            {resultado && (
                <div className="resultado-box">
                    <h3>imc:{resultado}</h3>
                    <p className="categoria">{categoria} </p>
                </div>)}
                <MensajeIms 
                categoria={categoria}/>
            
        </div>
    )

}
