import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Teste from './components/Teste';
import { default as Exercicio01 } from './exercicios/01'
import { default as Exercicio02 } from './exercicios/02'
import { default as Exercicio03 } from './exercicios/03'
import { default as Exercicio04 } from './exercicios/04'

function App() {
  return (
    <div className="App" style={{ textAlign: 'left', padding: '20px' }}>
      <BrowserRouter>
        
        <ul>
          <li><Link to="/teste">Teste</Link></li>
          <li><Link to="/01">Exercício 01</Link></li>
          <li><Link to="/02">Exercício 02</Link></li>
          <li><Link to="/03">Exercício 03</Link></li>
          <li><Link to="/04">Exercício 04</Link></li>
        </ul>

        <hr />

        <Routes>
          <Route path="/teste" element={<Teste />} /> 
          <Route path="/01" element={<Exercicio01 />} />
          <Route path="/02" element={<Exercicio02 />} />
          <Route path="/03" element={<Exercicio03 />} />
          <Route path="/04" element={<Exercicio04 />} />
        </Routes>   

      </BrowserRouter>
    </div>
  );
}

export default App;
