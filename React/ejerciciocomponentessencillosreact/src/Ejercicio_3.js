
function Ejercicio_3 () {

    function OcultarElemento (e) {
        var texto = document.getElementById("Desvanecimiento");
        if (texto.style.display === "none") {
          texto.style.display = "block";
        } else {
          texto.style.display = "none";
        }
    }

    return (
        <div>
            <button onClick={() =>OcultarElemento()}>Dale clic aquí</button>
            <p id="Desvanecimiento">Hola estoy aquí!</p>
        </div>
    
    );
}
export default Ejercicio_3;