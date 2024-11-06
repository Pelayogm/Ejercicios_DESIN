import { useState } from "react";

function Ejercicio_5 () {
    const [datos, setDatos] = useState("");
    const [resultado, setResultado] = useState(""); 

    const parking = [
        {Marca: 'CUPRA'},
        {Marca: 'Mercedes'},
        {Marca: 'Renault'},
        {Marca: 'Volkswagen'},
        {Marca: 'Toyota'},
        {Marca: 'Peugeot'},
        {Marca: 'Audi'},
        {Marca: 'Volvo'},
        {Marca: 'Skoda'},
        {Marca: 'SEAT'},
      ];

      function LlamarAlFiltro (e) {
        e.preventDefault();
        parking.forEach(element => {
            if(element.Marca.indexOf(datos)>=0) {
                setResultado (
                    "Marca: " + element.Marca
                );
            }
        });
      }

      function recogerDatos(e) { 
        setDatos(e.target.datos); 
        setResultado(""); 
    } 

      return (
        <div> 
            <form onSubmit={LlamarAlFiltro}> 
                <input value={datos} onInput={recogerDatos}></input> 
                <button type="submit">Filtrar</button> 
            </form> 
            <div> 
                <p>{resultado}</p> 
            </div> 
        </div>
      );
}
export default Ejercicio_5;