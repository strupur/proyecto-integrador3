
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBox,faShield, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import './Feature.css'


export default function Feature() {
  return (
    <section className="contenedore-service-features">

  <article className="div-feature">
  <FontAwesomeIcon className='feature-img' icon={faBox }></FontAwesomeIcon>
    <div className="div-feature-parrafo">
      <p className="parrafo-feature">
        Recibe tus productos protegidos con nuestro embalaje premium.
      </p>
    </div>
  </article>

  <article className="div-feature">
  <FontAwesomeIcon className='feature-img' icon={faShippingFast }></FontAwesomeIcon>
    <div className="div-feature-parrafo">
      <p className="parrafo-feature">
        Transporte y Guía de Servicios para su transporte seguro, no siendo responsable.
      </p>
    </div>
  </article>

  <article className="div-feature">
  <FontAwesomeIcon className='feature-img' icon={faShield}></FontAwesomeIcon>
    <div className="div-feature-parrafo">
      <p className="parrafo-feature">
        Si el producto no es lo que esperabas o no llega, te devolvemos tu dinero.
      </p>
    </div>
  </article>

</section>

  )
}
