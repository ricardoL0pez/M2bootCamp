import { useEffect } from "react"; // Importa el hook useEffect de React
import { useDispatch, useSelector } from "react-redux"; // Importa los hooks useDispatch y useSelector de React Redux
import { getCharacters } from "../redux/action"; // Importa la acción getCharacters desde el archivo action.js
import Tarjeta from "./Tarjeta"; // Importa el componente Tarjeta desde el archivo Tarjeta.jsx

const TarjetasFunction = () => { // Definición del componente TarjetasFunction como una función

    const characters = useSelector((state) => state.characters); // useSelector es un hook que permite seleccionar parte del estado de Redux. Aquí se obtienen los personajes del estado global.

    const dispatch = useDispatch(); // useDispatch es un hook que devuelve la función dispatch para despachar acciones de Redux.

    useEffect(() => { // useEffect es un hook que permite realizar efectos secundarios en componentes funcionales. En este caso, se ejecuta la función cuando el componente se monta, equivalente a componentDidMount en componentes de clase.
        dispatch(getCharacters()); // Se dispara la acción getCharacters cuando el componente se monta, para obtener los personajes.
    }, []); // El array vacío como segundo argumento significa que este efecto se ejecutará solo una vez, similar a componentDidMount.

    return (
        <div>
            <h1>Componente Cards Funcional</h1>
            <div>
                {characters.map((character) => { // Mapea los personajes obtenidos del estado y crea un componente Tarjeta para cada uno.
                    return <Tarjeta
                        id={character.id}
                        name={character.name}
                        key={character.id}
                    />;
                })}
            </div>
        </div>
    );
};

export default TarjetasFunction; // Exporta el componente TarjetasFunction para ser utilizado en otros archivos
