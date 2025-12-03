import logo from './logo.svg';
import './App.css';
import PruebasComponent from './conponents/PruebasComponent';
import CalculoImc from './conponents/CalculoImc';
import LitrosPrecio from './conponents/LitrosPrecio';
import Juego from './conponents/Juego';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Juego/>
          <LitrosPrecio/>
          <CalculoImc/>
          <PruebasComponent/>

        </div>
      </header>
    </div>
  );
}

export default App;
