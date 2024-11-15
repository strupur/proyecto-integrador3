import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import AdminProduct from "./pages/admin-product/AdminProduct";
import AcercaDeNosotros from "./pages/acerca-de-nosotros/AcercaDeNosotros";
import ProductDetail from './pages/product-detail/ProductDetail';
import AdminUser from './pages/admin-user/AdminUser';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Layout from './layout/header/Layout';
import AdminGuard from './services/guard/AdminGuard';



export default function App() {


  return (
    <>

      

      
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />} >

            <Route index element={<Home />} />

            <Route path='product-detail/:id' element={<ProductDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="acerca-de-nosotros" element={<AcercaDeNosotros />} />
            <Route path="register" element={<Register />} />

            <Route path="admin-product" element={
              
              <AdminGuard>
              <AdminProduct />
              </AdminGuard>
              }/>

            <Route path="admin-user" element={
              
              <AdminGuard>
              <AdminUser />
              </AdminGuard>
              } />

            <Route path="*" element={<h1>Not Found</h1>} />

          </Route>

        </Routes>
      
    </>
  )
}
