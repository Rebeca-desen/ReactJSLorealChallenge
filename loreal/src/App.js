import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Cabecalho">
        <button className="button-tutorial">Tutorial</button>
        </div>
        <p className="Text-home">Parabéns, você esta sendo convidado a participar do futuro primeiro</p>
        <p className="Text-home"> Gostaria dessa chance única?</p>
      </header>
      <div className="Button-next-home">
         <button className="next-home" > Quero fazer parte </button>
       </div>
    </div>
  );
}

export default App;
