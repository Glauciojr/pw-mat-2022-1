import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Teste from './components/Teste';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Link to="/teste">Teste</Link>

        <hr />

        <Routes>
          <Route path="/teste" element={<Teste />} /> 
        </Routes>   

      </BrowserRouter>
    </div>
  );
}

export default App;
