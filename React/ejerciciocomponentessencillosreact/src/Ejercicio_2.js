import { useState } from "react";

function Ejercicio_2() {
    const [value, setValue] = useState(""); 
    const [result, setResult] = useState(""); 

    function EnviarSaludo(e) { 
        e.preventDefault(); 
        setResult( 
            "Hola " + value + "!"
        ); 
    } 
  
    function recogerDatos(e) { 
        setValue(e.target.value); 
        setResult(""); 
    } 
    return ( 
        <div> 
            <form onSubmit={EnviarSaludo}> 
                <input value={value} onInput={recogerDatos}></input> 
                <button type="submit">Enviar</button> 
            </form> 
            <div> 
                <p>{result}</p> 
            </div> 
        </div> 
    ); 
} 
export default Ejercicio_2;