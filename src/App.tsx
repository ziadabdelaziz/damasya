import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import About from './components/about/About';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import LogoImage from '@/assets/logo.jpg';
import AuthenticationPage from './components/admin/AuthenticationPage';
import NotFound from './components/notFound/NotFound';
import AdminContext, { AdminState } from './app/admin-context';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

function App() {

  const [cookies, setIsAdminCookie, removeIsAdminCookie] = useCookies(['isAdmin']);
  const [isAdminState, setIsAdminState]  = useState<boolean>(cookies['isAdmin'] ?? false);

  return (
    <AdminContext.Provider value={new AdminState(isAdminState, setIsAdminState, setIsAdminCookie, removeIsAdminCookie)}>
      <div className="App text-lg">
        <NavBar />
        <main className='relative z-0'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/admin007' element={<AuthenticationPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {
            !isAdminState && <FloatingWhatsApp phoneNumber='+201060719095' accountName='Damasya' avatar={LogoImage} allowClickAway={true} buttonClassName='bg-green-700' />
          }
        </main>
      </div>
    </AdminContext.Provider>
  );
}

export default App;