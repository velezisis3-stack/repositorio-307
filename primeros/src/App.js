import logo from './logo.svg';
import './App.css';
import MiSegundoComando from './MiSegundoComando';

import ExpliacionPros from './ExplicacionPros';
import Perfil from './Perfil';
import EventosComponente from'./EventosComponente';
import PanelInteractivo from'./PanelInteractivo';

function App() {
    let ficha_medica={
        altura:"1.69cm",
        grupo:"o+",
        estado: "sano",
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Isis shaddai
        </p>
        <hr/>
        <PanelInteractivo/>
        <EventosComponente/>
        <Perfil
        nombre="isis shaddai federico"
        usuario="velez"
        bio="me gustan los an8imales ,tengo 3 gatos que los quiero mucho"
        avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/250px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" 
        esVerificado={true}/>
        <Perfil 
        nombre="tabatha alexandra"
        usuario="alexav"
        bio="desarrolladora apasionada por la accesibilidad y el diseño"
        avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/250px-Elon_Musk_-_54820081119_%28cropped%29.jpg"
        esVerificado={true}/>
        
      </header>
      
    </div>
  );
}

export default App;