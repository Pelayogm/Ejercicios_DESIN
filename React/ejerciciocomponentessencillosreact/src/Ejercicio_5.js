import { useState } from "react";

function Ejercicio_5() {
 
  const [datos, setDatos] = useState("");
  const [resultados, setResultados] = useState([]);

  // Lista de productos con marcas
  const productos = [
    { Marca: "CUPRA Leon" },
    { Marca: "Mercedes Clase C" },
    { Marca: "Renault Austral" },
    { Marca: "Volkswagen Tiguan" },
    { Marca: "Toyota Corolla" },
    { Marca: "Peugeot 508" },
    { Marca: "Audi A6" },
    { Marca: "Volvo XC60" },
    { Marca: "Skoda Octavia" },
    { Marca: "SEAT Leon" },
    { Marca: "Renault Megane" },
    { Marca: "SEAT Ibiza" },
    { Marca: "SEAT Ateca" },
    { Marca: "Volkswagen Passat" },
  ];

  function LlamarAlFiltro(e) {
    e.preventDefault();

    if (datos.trim() === "") {
      setResultados([]);
      return;
    }


    const resultadosFiltrados = productos.filter((producto) => {

      if (producto.Marca && typeof producto.Marca === "string") {
        return producto.Marca.toLowerCase().includes(datos.toLowerCase());
      }
      return false;
    });

    setResultados(resultadosFiltrados);
  }


  function recogerDatos(e) {
    setDatos(e.target.value);
  }

  return (
    <div>
      <form onSubmit={LlamarAlFiltro}> 
        <input
          type="text"
          value={datos}
          onChange={recogerDatos}
          placeholder="Buscar marca"
        />
        <button type="submit">Filtrar</button>
      </form>

      <div>
        {resultados.length > 0 ? (
          resultados.map((resultado, index) => (
            <p key={index}>Marca: {resultado.Marca}</p>
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}
export default Ejercicio_5;