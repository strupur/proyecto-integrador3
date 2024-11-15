import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductCard.css';
import { NavLink } from 'react-router-dom';
import { faCartShopping, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useOrder } from '../../context/OrderContext';

const URL2 = import.meta.env.VITE_LOCAL_SERVER;

export default function ProductCard({ prod }) {

  const { addProduct } = useOrder();

  return (


    <article className='product-card'>
      <header className="card-header">
        <img src={`${URL2}/images/products/${prod.image}`}
          alt="{prod.image}"
          className="product-image" />

      </header>
      <main className="card-body">
        <div className="product-category">
          {prod.category}
        </div>

        <h1 className="product-title">
          {prod.name}
        </h1>

        <p className="description">
          <div
            className="description-container"
            data-full-text={prod.description}
            title={prod.description}
          >
            {prod.description}
          </div>
        </p>

        

        <div className="product-info">
          <div className="product-price">
            $ <span className="price">
              {prod.price}
            </span>
          </div>
        </div>
      </main>
      <footer className="card-footer">

        <button className="product-btn" onClick={() => addProduct(prod)}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>

        <NavLink to={`/product-detail/${prod._id}`} className="product-btn">

          <FontAwesomeIcon icon={faUpRightFromSquare} />

        </NavLink>
      </footer>
    </article >



  )
}

ProductCard.propTypes = {
  prod: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired
};
