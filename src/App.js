import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <p> 
          <h1>Proyecto de Azure</h1>
          Integrantes del equipo:
            1. Mauricio Ezequiel Puente Rocha
            2. Omar Segura Sena
            3. Roberto Yair Tellez Luna
        </p>
        <a
          className="App-link"
          href="https://ezequiel124.github.io/PaginaProjectFinal/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Da clic aquí para comenzar
        </a>
      </header>
    </div>
  );
}

export default App;
