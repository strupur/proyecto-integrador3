import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminRow.css';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '../../utils/formatDate';

const URL2 = import.meta.env.VITE_LOCAL_SERVER

export default function AdminRow({ producto, deleteProduct, handleEditProduct }) {
  return (
    <tr className="admin-table-row">
      <td className="image">
        <img src={`${URL2}/images/products/${producto.image}`} alt={producto.name} />
      </td>
      
      <td className="name">
        {producto.name}
      </td>

      <td className="description">
        <div
          className="description-container"
          data-full-text={producto.description}
          title={producto.description}         
        >
          {producto.description}
        </div>
      </td>

      <td className="price">
        ${producto.price}
      </td>
      <td className="category">
        {producto.category}
      </td>
      <td className="date">
        {formatDate(producto.createdAt)}
      </td>
      <td className="actions">
        <div className="actions-container">

          <button className="btn" onClick={() => handleEditProduct(producto)}>

            <FontAwesomeIcon className='btn' icon={faPencil}></FontAwesomeIcon>

          </button>


          <button className="btn btn-danger" onClick={() => deleteProduct(producto._id)}>

            <FontAwesomeIcon className='btn-danger' icon={faTrash}></FontAwesomeIcon>

          </button>

        </div>
      </td>


    </tr>
  )
}
