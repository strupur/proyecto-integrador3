import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import './ProductGallery.css';
import axios from 'axios';

const URL2 = import.meta.env.VITE_LOCAL_SERVER;

export default function ProductGallery() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts();
    }, [])


    async function getProducts() {

        try {

            const response = await axios.get(`${URL2}/api/productos`)

            console.log(response);
            
            setProducts(response.data.products)

        } catch (error) {
            alert("Error al obtener productos");
            console.log(error);
        }
    }

    return (

        <section className="product-section">
            <h1 className='gallery-title'>PRODUCTO MAS VENDIDO</h1>

            <div className='product-gallery_container'>

                {
                    products.map(producto => <ProductCard key={producto.id} prod={producto} />)
                }
            </div>

        </section>

    )
}
