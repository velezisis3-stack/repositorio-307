import logo from './logo.svg';
import './App.css';
import MiPrimerEstado from './components/MiPrimerEstado';
import Contador from './components/Contador';
import ImputDinamico from './components/ImputDinamico';
import ZonaInteractiva from './components/ZonaInteractiva';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div>
        
         <h1>Estados en react</h1>
         <ZonaInteractiva/>
         <hr/>
       <MiPrimerEstado/>
       <Contador/>
       <ImputDinamico/>

      </div>
       
      </header>
    </div>
  );
}

export default App;
