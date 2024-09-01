import { Route, Routes } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import AdminContext, { AdminState } from './app/admin-context';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import NavBar from './components/navigation/NavBar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import About from './components/about/About';
import LogoImage from '@/assets/logo.jpg';
import AuthenticationPage from './components/admin/AuthenticationPage';
import NotFound from './components/notFound/NotFound';
import ProductsContext, { ProductsState } from './app/products-context';
import { Product } from './models/product';
import { fetchProducts } from './data/firestore';

function App() {

  const [cookies, setIsAdminCookie, removeIsAdminCookie] = useCookies(['isAdmin']);
  const [isAdminState, setIsAdminState]  = useState<boolean>(cookies['isAdmin'] ?? false);
  const [productsState, setProductsState]  = useState<Product[]>([]);

  useEffect(()=> {
    fetchProducts(setProductsState);
  }, []);
  
  return (
    <AdminContext.Provider value={new AdminState(isAdminState, setIsAdminState, setIsAdminCookie, removeIsAdminCookie)}>
      <ProductsContext.Provider value={new ProductsState(productsState, setProductsState)}>
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
      </ProductsContext.Provider>
    </AdminContext.Provider>
  );
}

export default App;