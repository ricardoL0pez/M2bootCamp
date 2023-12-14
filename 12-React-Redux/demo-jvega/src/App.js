//import logo from './logo.svg';
import './App.css';
import TarjetasClass from './componentes/TarjetasClass';
import TarjetasFunction from './componentes/TarjetasFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TarjetasClass/>
        <TarjetasFunction/>
      </header>
    </div>
  );
}

export default App;


