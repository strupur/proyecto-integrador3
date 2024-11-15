import Header from './Header'
import Footer from '../footer/Footer'
import OrderDialog from '../../components/order-dialog/OrderDialog'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (

        <>
            <OrderDialog />
            <Header />

            <main className="main-container">
                <Outlet />
            </main>

            <Footer></Footer>
        </>
    )
}
