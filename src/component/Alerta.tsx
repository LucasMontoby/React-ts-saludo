
const Alerta: React.FC = () =>{
    const mostrarAlerta = () =>{
        alert('Alerta de prueba')
    };

    return(
        <div>
            <button onClick={mostrarAlerta}>Mostrar Alerta</button>
        </div>
    )
}

export default Alerta;