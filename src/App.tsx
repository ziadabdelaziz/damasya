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

function App() {

  const [isAdminState, setIsAdminState]  = useState<boolean>(false);

  const adminState: AdminState = {
    isAdmin: isAdminState,
    adminSignIn: (email: String, password: String) : boolean => {
      if(!email || !password) return false
      
      if (email.length === 0 || password.length === 0) return false

      if (email === 'damasya.du.admin@gmail.com' && password === 'dUfR@123') {
        setIsAdminState(true);
        return true
      }

      return false;
    },
    adminSignOut: () => setIsAdminState(false)
  };

  return (
    <AdminContext.Provider value={adminState}>
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
            useLocation().pathname != '/admin007' && <FloatingWhatsApp phoneNumber='+201060719095' accountName='Damasya' avatar={LogoImage} allowClickAway={true} buttonClassName='bg-green-700' />
          }
        </main>
      </div>
    </AdminContext.Provider>
  );
}

export default App;