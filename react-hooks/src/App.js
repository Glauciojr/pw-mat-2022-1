import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Teste from './components/Teste';
import { default as Exercicio01 } from './exercicios/01'
import { default as Exercicio02 } from './exercicios/02'
import { default as Exercicio03 } from './exercicios/03'
import { default as Exercicio04 } from './exercicios/04'
import { default as Exercicio05 } from './exercicios/05'
import { default as Exercicio06 } from './exercicios/06'

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
          <li><Link to="/05">Exercício 05</Link></li>
          <li><Link to="/06">Exercício 06</Link></li>
        </ul>

        <hr />

        <Routes>
          <Route path="/teste" element={<Teste />} /> 
          <Route path="/01" element={<Exercicio01 />} />
          <Route path="/02" element={<Exercicio02 />} />
          <Route path="/03" element={<Exercicio03 />} />
          <Route path="/04" element={<Exercicio04 />} />
          <Route path="/05" element={<Exercicio05 />} />
          <Route path="/06" element={<Exercicio06 />} />
        </Routes>   

      </BrowserRouter>
    </div>
  );
}

export default App;
