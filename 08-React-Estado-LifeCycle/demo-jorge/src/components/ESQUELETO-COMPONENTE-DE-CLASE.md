```js
#Componente funcional

const Name = () => {
    <>
        
    </>
};

export default Name



#Componente de clase

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>Valor actual: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Incrementar</button>
        <button onClick={this.handleDecrement}>Decrementar</button>
      </div>
    );
  }
}

export default Counter;
``````



Para agregar una fuente personalizada a tu proyecto de React y asegurarte de que sea legible en diferentes navegadores, puedes seguir estos pasos:

1. **Obtén la fuente personalizada**:
   Primero, necesitas obtener la fuente que deseas utilizar en tu proyecto. Puedes descargar una fuente personalizada en formato `.woff` o `.woff2`, que son formatos de fuentes web compatibles con la mayoría de los navegadores modernos.

2. **Agrega la fuente a tu proyecto**:
   Coloca el archivo de fuente descargado (generalmente con extensión `.woff` o `.woff2`) en una carpeta dentro de tu proyecto. Por ejemplo, puedes crear una carpeta llamada `fonts` en la raíz de tu proyecto y colocar la fuente allí.

3. **Importa la fuente en tu archivo CSS o SCSS**:
   Debes crear un archivo CSS o SCSS donde importarás la fuente. Puedes utilizar `@font-face` para definir la fuente y sus estilos. Aquí tienes un ejemplo de cómo podría verse en un archivo CSS:

   ```css
   @font-face {
     font-family: 'MiFuentePersonalizada';
     src: url('./fonts/mifuentepersonalizada.woff2') format('woff2'),
          url('./fonts/mifuentepersonalizada.woff') format('woff');
     /* Puedes especificar múltiples formatos para mayor compatibilidad */
     font-weight: normal;
     font-style: normal;
   }
   ```

   Asegúrate de que la ruta en `url` coincida con la ubicación de tu archivo de fuente dentro del proyecto.

4. **Utiliza la fuente en tu CSS**:
   Después de definir la fuente, puedes utilizarla en tus estilos CSS. Por ejemplo:

   ```css
   body {
     font-family: 'MiFuentePersonalizada', sans-serif;
   }
   ```

5. **Importa el archivo CSS en tu componente React**:
   Importa el archivo CSS (donde has definido la fuente) en el componente React en el que deseas usar la fuente. Debes hacerlo en la parte superior de tu archivo JavaScript o JSX. Por ejemplo:

   ```jsx
   import React from 'react';
   import './nombre-archivo.css'; // Asegúrate de especificar la ruta correcta

   function MiComponente() {
     return (
       <div>
         <p>Este texto usa la fuente personalizada.</p>
       </div>
     );
   }

   export default MiComponente;
   ```

6. **Asegúrate de incluir los archivos de fuente en la compilación**:
   Si estás utilizando una herramienta de construcción como Webpack, asegúrate de que los archivos de fuente se incluyan en la compilación. Esto generalmente se hace configurando adecuadamente las reglas de los loaders en tu configuración de Webpack.

Una vez que hayas seguido estos pasos y hayas importado la fuente en tu proyecto de React, la fuente personalizada debería ser legible en diferentes navegadores cuando se aplique en tus estilos CSS. Asegúrate de que la ruta del archivo de fuente sea correcta y de que estés importando el archivo CSS en el componente donde deseas utilizar la fuente.