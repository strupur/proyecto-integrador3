import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOrder } from '../../context/OrderContext';

const URL2 = import.meta.env.VITE_LOCAL_SERVER;

export default function ProductDetail() {

    const { addMasProduct } = useOrder();

    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    useEffect(() => {
        getProduct();
    }, [])

    async function getProduct() {
        try {
            const response = await axios.get(`${URL2}/api/productos/${ id } `)
            setProduct(response.data.product);
        } catch (error) {
            alert("Error al obtener el producto");
            console.log(error);
        }
    }

    if (!product) {
        return <h4>⌛</h4>
    }


    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    const handleAddToCart = () => {
        addMasProduct({ ...product, quantity });
    }

    return (
        <div className="product-detail-container">
            <div className="product-content-img">
                <img
                    src={`${URL2}/images/products/${product?.image}`}
                    // src={product?.image}
                    alt={product?.name}
                    className="product-image"
                />

                <h2 className="product-price">
                    ${product?.price}
                </h2>
            </div>

            <div className='div-information'>

                <div className="div-name">
                    <h1 className='title'>{product?.name}</h1>
                </div>

                <p className="product-description">
                    {product?.description}
                </p>

                <h3 className="product-category">
                    Categoría: {product?.category}
                </h3>

                <h4 className="product-created">
                    Fecha de creación: {new Date(product?.createdAt).toLocaleDateString()}
                </h4>


                <div className="product-actions">

                    <div className="quantity-controls">
                        <button onClick={decrementQuantity} className="quantity-button">-</button>
                        <input
                            type="number"
                            className="quantity-input"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        />
                        <button onClick={incrementQuantity} className="quantity-button">+</button>
                    </div>

                    <button onClick={handleAddToCart} className="add-to-cart-button">
                        Agregar {quantity} {quantity > 1 ? 'productos' : 'producto'} al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

