import { createContext, useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useUser } from './UserContext';
import axios from 'axios';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export default function OrderProvider({ children }) {

    const { user } = useUser();
    const [count, setCount] = useState(0);
    const [order, setOrder] = useState([]);
    const [toggleModal, setToggleModal] = useState(false)
    const [total, setTotal] = useState(0);


    useEffect(() => {

        calculateCount();
        calculateTotal();

    }, [order])

    function addProduct(product) {



        const productExists = order.find(prod => prod._id === product._id);
        console.log(productExists)

        if (productExists) {

            productExists.quantity++;
            setOrder([...order])

        } else {
            product.quantity = 1;
            setOrder([...order, product]);
        }

        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            padding: '.5rem',
            title: 'Producto Agregado!',
            width: '300px'
        })

    }

    function calculateCount() {
        let cantidadItems = 0;
        for (let item of order) {
            cantidadItems += item.quantity;
        }

        setCount(cantidadItems)
    }

    function calculateTotal() {
        let total = 0;
        order.forEach(item => {

            total += (item.price * item.quantity)

        })
        setTotal(total)
    }

    function removeProduct(_id) {

        const orderFiltered = order.filter(prod => prod._id !== _id)

        setOrder(orderFiltered)

    }

    function changeItemQuantity(id, value) {

        const producto = order.find(prod => prod.id === id);

        producto.quantity = value;

        setOrder([ ...order ])

    }

    async function createOrder ()
    { 
        try {

            if(!user?._id) {
                alert("Necesitas iniciar sesión para crear una order")
                    return;
            }

            const products = order.map(prod => {
                return {
                    product: prod._id,
                    quantity: prod.quantity,
                    price: prod.price
                }
            })
            
            // const user = user._id;
    
            await axios.post("http://localhost:3000/orders", {
                products,
                user: user._id,
                total
            })
            alert("Orden creada")

        } catch (error) {
            console.log(error)
            alert("Error al crear la orden")
        }

        
        
    }

    function addMasProduct(product) {
        const productExists = order.find(prod => prod._id === product._id);

        if (productExists) {
            
            productExists.quantity += product.quantity;
            setOrder([...order]);  
        } else {
            
            setOrder([...order, { ...product }]);
        }
    }

    return (
        <OrderContext.Provider
            value={{
                order,
                addProduct,
                toggleModal,
                setToggleModal,
                count,
                total,
                removeProduct,
                changeItemQuantity,
                addMasProduct,
                createOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    )


}