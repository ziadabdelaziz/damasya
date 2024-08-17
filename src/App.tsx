import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import About from './components/about/About';

function App() {
  return (
    <div className="App text-lg">
      <NavBar />
      <main className='relative z-0'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      </div>
  );
}

export default App;
