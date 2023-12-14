// Importaciones de módulos y componentes
import { useEffect} from 'react'; // Importa el hook useEffect de React
import './products.css'; // Importa un archivo de estilos CSS específico para este componente
import Card from '../Card/Card'; // Importa el componente 'Card' desde el archivo 'Card.jsx'
import { useSelector, useDispatch } from 'react-redux'; // Importa los hooks 'useSelector' y 'useDispatch' de 'react-redux'
import { getStoreName } from '../../redux/actions/actions'; // Importa la acción 'getStoreName' desde el archivo de acciones

function Products() {
  // Declara y asigna el hook 'useDispatch' a la variable 'dispatch'
  const dispatch = useDispatch();
  
  // Utiliza el hook 'useSelector' para seleccionar 'storeName' y 'list' del estado global de Redux
  const { storeName, list } = useSelector((state) => state);

  // useEffect se utiliza para ejecutar lógica cuando el componente se monta
  useEffect(() => {
    // Despacha la acción 'getStoreName()' para obtener el nombre de la tienda
    dispatch(getStoreName());
  }, []); // El segundo argumento es un array vacío, lo que significa que se ejecutará solo una vez (al montar el componente)

  // Renderizado del componente
  return (
    <> {/* Fragmento React para envolver varios elementos hijos */}
      <div className='productsBg'> {/* Div para el fondo de los productos */}
        <h1 className='productsTl'>{storeName}</h1> {/* Título con el nombre de la tienda */}

        <div className='productsList'> {/* Lista de productos */}
          {
            list?.map(({ name, id, price}) => { // Mapea 'list' y renderiza un componente 'Card' para cada elemento
              return (
                <Card // Componente 'Card' que muestra la información del producto
                  key={id} // Clave única para identificar el componente en el mapeo
                  name={name} // Propiedad 'name' del producto
                  id={id} // Propiedad 'id' del producto
                  price={price} // Propiedad 'price' del producto
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default Products; // Exporta el componente 'Products' para su uso en otros archivos





/* Este componente Products se encarga de mostrar una lista de productos obtenidos del estado global de Redux. 
Utiliza useSelector para seleccionar storeName y list del estado, y useDispatch para despachar la acción getStoreName cuando el componente se monta, 
lo que ayuda a obtener el nombre de la tienda.
 */
/* Luego, utiliza un ciclo de mapeo para recorrer la lista de productos (list) y renderizar un componente Card para cada elemento de la lista, 
mostrando la información de cada producto como nombre, identificación (id) y precio. */
