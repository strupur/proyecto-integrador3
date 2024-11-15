import Carousel from '../../components/carousel/Carousel'
import Feature from '../../components/features/Feature'
import ProductGallery from '../../components/product-gallery/ProductGallery'
import './Home.css'

export default function Home() {
  return (

    <div className='contenedor-home'>

      <Carousel />

      <ProductGallery />

      <Feature />

    </div>
  )
}

