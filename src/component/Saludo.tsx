
interface SaludoProps{
    nombre: string;
}

const Saludo: React.FC<SaludoProps> = ({ nombre }) =>{
    return <div>Hola!!, que tal {nombre} ??</div>;
}

export default Saludo;