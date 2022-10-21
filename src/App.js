import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import about from './pages/About';

import './App.css';
import About from './pages/About';
import NotFound from './pages/Notfound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element = { <About/>} />
          <Route path='*' element = { <NotFound/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;