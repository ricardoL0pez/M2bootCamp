// Importaciones de módulos, componentes y recursos
import React from 'react'; // Importa React
import './card.css'; // Importa los estilos CSS específicos para este componente
import { deleteProduct } from '../../redux/actions/actions'; // Importa la acción 'deleteProduct' desde el archivo de acciones
import { useDispatch } from 'react-redux'; // Importa el hook 'useDispatch' de 'react-redux'

const Card = ({ id, name, price }) => { // Componente funcional 'Card' con destructuring de props
   const dispatch = useDispatch(); // Declara y asigna el hook 'useDispatch' a la variable 'dispatch'

   // Función para manejar la eliminación de un producto
   const handleDelete = () => {
      dispatch(deleteProduct(id)); // Despacha la acción 'deleteProduct' con el 'id' del producto a eliminar
   };

   // Renderizado del componente 'Card'
   return (
      <div className='cardBg'> {/* Contenedor de la tarjeta con clase 'cardBg' */}
         <h5>{name}: </h5> {/* Nombre del producto */}
         <h5>${price}</h5> {/* Precio del producto */}
         <button className='cardBtn' onClick={handleDelete}>X</button> {/* Botón para eliminar el producto */}
      </div>
   )
}

export default Card; // Exporta el componente 'Card' para su uso en otros archivos

/* El componente Card es un componente funcional que muestra la información de un producto en una tarjeta. Recibe las propiedades id, name y price destructuradas desde el componente padre.

Utiliza useDispatch para obtener el despachador de acciones de Redux.
La función handleDelete se activa cuando se hace clic en el botón 'X' (delete) de la tarjeta. Esta función despacha la acción deleteProduct(id) para eliminar el producto con el id específico.
El componente Card renderiza una tarjeta con la clase de estilo CSS 'cardBg', mostrando el nombre y el precio del producto. Además, incluye un botón con clase 'cardBtn' que, al ser clicado, ejecuta la función handleDelete para eliminar el producto correspondiente al hacer clic en él.
Este componente representa una tarjeta que muestra la información de un producto y proporciona la capacidad de eliminar ese producto al hacer clic en un botón 'X'. */