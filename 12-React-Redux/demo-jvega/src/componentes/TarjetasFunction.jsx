import { useEffect } from "react"; //hook de React
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/action";
import Tarjeta from "./Tarjeta";


const TarjetasFunction = () => {

    const characters = useSelector((state) => state.characters); //useSelector es un Hook. Con este hook se suscribe
    const dispatch = useDispatch();

    useEffect(() => { ///para hacer algo cuando el componente se monta, es homologo a componentDidMount para una funciopn de clase
        dispatch(getCharacters());
    }, []);

    return (
        <div>
            <h1>Componente Cards Funcional</h1>
            <div>
                {characters.map((character) => {
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

export default TarjetasFunction;