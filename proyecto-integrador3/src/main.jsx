import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import OrderProvider from './context/OrderContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>

      <UserProvider>
        <OrderProvider>

          <App />

        </OrderProvider>
      </UserProvider>

    </BrowserRouter>
  </StrictMode>,
)
