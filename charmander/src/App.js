import logo from './logo.svg';
import './App.css';
import Buscador from './components/Buscador';




function App() {
  return (
  <div className="bg-orange-400 h-auto w-auto " >
     <div className="p-2 ">
      Visor de Masos TGC
    </div>
    <div>
      <Buscador />
    </div>
</div>
  );
}

export default App;

