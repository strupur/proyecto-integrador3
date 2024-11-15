import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminRowRegister.css';
import {  faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '../../utils/formatDate';

const URL2 = import.meta.env.VITE_LOCAL_SERVER

export default function AdminRowRegister({ producto, deleteProduct, handleEditProduct }) {
  return (
    <tr className="admin-table-row">
      <td className="image">
      <img src={`${URL2}/images/users/${producto.image}`} alt={producto.name} />
        {/* <img src={producto.image} alt={producto.name} /> */}
      </td>

      <td className="name">
        {producto.name}
      </td>

      <td className="email">
        {producto.email}
      </td>

      <td className="date">
      { formatDate(producto.DateBirth) }
      </td>

      <td className="category">
        {producto.country}
      </td>

      <td className="description">

        <div className="description-container">
          {producto.description}
        </div>

      </td>

      <td className="actions">
        <div className="actions-container">

          <button className="btn" onClick={() => handleEditProduct(producto)}>

          <FontAwesomeIcon className='btn' icon={faPencil}></FontAwesomeIcon>

          </button>


          <button className="btn btn-danger" onClick={() => deleteProduct(producto._id)}>

          <FontAwesomeIcon className='btn-danger' icon={faTrash }></FontAwesomeIcon>

          </button>

        </div>
      </td>


    </tr>
  )
}