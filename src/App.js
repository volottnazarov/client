import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Driver from './components/driver';
import Info from './components/info';
import Mechanic from './components/mechanic';
import HomePage from './components/homepage';
import Menu from './components/menu';
import Authorization from './components/authorization';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/driver' element={<Driver />} />
            <Route path='/mechanic' element={<Mechanic />} />
            <Route path='/info' element={<Info />} />
            <Route path='/authorization' element={<Authorization/>} />
            <Route path="*" element={<h2>Ресурс не найден</h2>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
