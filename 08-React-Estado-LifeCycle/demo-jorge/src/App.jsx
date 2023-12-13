import EstadosClase from './components/EstadosClase'
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar"
import './App.css'
import { useState } from 'react'
import ContadorFuncional from './components/EstadosFuncional';

function App() {
  const [users, setUsers] = useState([{}]); 

const searchUser = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res) => res.json())
  .then((data) => setUsers([...users,data]));
};


/*  Llamar a searchUser en alguna parte de tu componente, por ejemplo, al cargar la página
 useEffect(() => {
  searchUser(1);  Llama a searchUser con un ID de ejemplo al cargar la página
}, []); */



  return (
    <div className='container'>
      <div><EstadosClase/></div>
      <div>
        <SearchBar onSearch={searchUser} />
        <Cards users={users} />
      </div>
      <ContadorFuncional/>
    </div>
  )
}

export default App;
