import React,{useState} from 'react'

const LitrosPrecio = () => {


  const [litrosTotales, setLitrosTotales] = useState("");
  const [precioLitro, setPrecioLitro] = useState("");
  const [restante, setRestante] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [surtir, setSurtir] = useState("");
  const [contador, setContador] = useState(0); // contador animado
  const [animando, setAnimando] = useState(false);

  const iniciar = () => {
    if (!litrosTotales || !precioLitro) {
      alert("Completa litros totales y precio.");
      return;
    }
    setRestante(parseFloat(litrosTotales));
    setContador(0);
    setIniciado(true);
  };

  const surtirLitros = () => {
    const cantidad = parseFloat(surtir);

    if (!cantidad || cantidad <= 0) {
      alert("Cantidad inválida.");
      return;
    }
    if (cantidad > restante) {
      alert("No puedes surtir más de lo disponible.");
      return;
    }

    setAnimando(true);

    let cantidadAnimada = 0;
    const velocidad = 50; // milisegundos por incremento (más lento)
    const incremento = 0.01; // incrementos más pequeños para animación suave

    const animacion = setInterval(() => {
      cantidadAnimada += incremento;

      if (cantidadAnimada >= cantidad) {
        // Ajustamos al valor final exacto
        setContador(prev => prev + (cantidad - (cantidadAnimada - incremento)));
        setRestante(prev => prev - (cantidad - (cantidadAnimada - incremento)));
        clearInterval(animacion);
        setAnimando(false);
      } else {
        setContador(prev => prev + incremento);
        setRestante(prev => prev - incremento);
      }
    }, velocidad);

    setSurtir("");
  };

  const resetear = () => {
    setLitrosTotales("");
    setPrecioLitro("");
    setRestante(0);
    setSurtir("");
    setContador(0);
    setIniciado(false);
    setAnimando(false);
  };

  return (
    <div style={{ maxWidth: "350px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Sistema de Surtido</h2>

      {!iniciado && (
        <>
          <label>Litros totales:</label>
          <input
            type="number"
            value={litrosTotales}
            onChange={(e) => setLitrosTotales(e.target.value)}
            style={{ width: "100%", marginBottom: 10 }}
          />

          <label>Precio por litro:</label>
          <input
            type="number"
            value={precioLitro}
            onChange={(e) => setPrecioLitro(e.target.value)}
            style={{ width: "100%", marginBottom: 10 }}
          />

          <button onClick={iniciar} style={{ width: "100%", padding: 8 }}>
            Iniciar
          </button>
        </>
      )}

      {iniciado && (
        <>
          <h3>Contador (Gasolinera)</h3>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              background: "#000",
              color: "#0f0",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
              marginBottom: "10px",
              fontFamily: "Courier New",
            }}
          >
            {contador.toFixed(2)} L
          </div>

          <h3>Información</h3>
          <p><strong>Litros restantes:</strong> {restante.toFixed(2)}</p>
          <p><strong>Precio por litro:</strong> ${precioLitro}</p>
          <p>
            <strong>Valor restante:</strong> $
            {(restante * parseFloat(precioLitro)).toFixed(2)}
          </p>

          {restante > 0 && !animando && (
            <>
              <label>Surtir litros:</label>
              <input
                type="number"
                value={surtir}
                onChange={(e) => setSurtir(e.target.value)}
                style={{ width: "100%", marginBottom: 10 }}
              />

              <button onClick={surtirLitros} style={{ width: "100%", padding: 8, marginBottom: 10 }}>
                Surtir
              </button>
            </>
          )}

          {animando && (
            <p style={{ color: "green", fontWeight: "bold" }}>⛽ Surtido en progreso…</p>
          )}

          <button onClick={resetear} style={{ width: "100%", padding: 8, background: "red", color: "white" }}>
            Resetear
          </button>
        </>
      )}
    </div>
  );
}










export default LitrosPrecio
