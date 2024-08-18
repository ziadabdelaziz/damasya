import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import About from './components/about/About';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import LogoImage from '@/assets/logo.jpg';

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
        <FloatingWhatsApp phoneNumber='+201060719095' accountName='Damasya' avatar={LogoImage} allowClickAway={true} buttonClassName='bg-green-700' />
      </main>
      </div>
  );
}

export default App;
