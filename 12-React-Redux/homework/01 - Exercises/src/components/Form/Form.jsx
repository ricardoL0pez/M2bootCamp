// Importaciones de módulos, componentes y recursos
import React, { useState } from 'react'; // Importa React y el hook useState
import Caja from '../../assets/caja.png'; // Importa la imagen 'Caja' desde la carpeta de assets
import './form.css'; // Importa los estilos CSS específicos para este componente
import { addProduct } from '../../redux/actions/actions'; // Importa la acción 'addProduct' desde el archivo de acciones
import { useDispatch } from 'react-redux'; // Importa el hook 'useDispatch' de 'react-redux'

const Form = () => { // Componente funcional 'Form'
   const dispatch = useDispatch(); // Declara y asigna el hook 'useDispatch' a la variable 'dispatch'

   // Declara y asigna el hook 'useState' para el estado local 'product' y una función 'setProduct' para actualizarlo
   const [product, setProduct] = useState({
      name: "",
      price: "",
      id: ""
   });

   // Función para manejar el envío del formulario
   const handleSubmit = (event) => {
      event.preventDefault(); // Evita que la página se recargue al enviar el formulario

      dispatch(addProduct({ // Despacha la acción 'addProduct' con los datos del producto
         ...product, // Propiedades del producto
         id: Date.now() // Genera un 'id' usando Date.now()
      }))
   };

   // Función para manejar el cambio en los inputs del formulario
   const handleInputChange = (event) => {
      setProduct({ // Actualiza el estado 'product' con los nuevos valores del formulario
         ...product, // Mantiene las propiedades anteriores del producto
         [event.target.name]: event.target.value // Actualiza la propiedad correspondiente al input cambiado
      });
   }

   // Renderizado del formulario
   return (
      <form className='formBg' onSubmit={handleSubmit}> {/* Formulario con clase 'formBg' y evento 'onSubmit' */}
         <div className='inputBox'> {/* Contenedor para el primer input */}
            <label>Nombre: </label>
            <input
               name='name' // Nombre del input
               onChange={handleInputChange} // Manejador de cambio al escribir en el input
               value={product.name} // Valor del input, que refleja el estado 'product'
            />
         </div>
         <div className='inputBox'> {/* Contenedor para el segundo input */}
            <label>Precio:</label>
            <input
               type='number' // Tipo de input, número
               name='price' // Nombre del input
               onChange={handleInputChange} // Manejador de cambio al escribir en el input
               value={product.price} // Valor del input, que refleja el estado 'product'
            />
         </div>
         <button className='formBtn'>¡ADD!</button> {/* Botón para enviar el formulario */}
         <img src={Caja} alt='' className='logo' /> {/* Imagen */}
      </form>
   )
}

export default Form; // Exporta el componente 'Form' para su uso en otros archivos
