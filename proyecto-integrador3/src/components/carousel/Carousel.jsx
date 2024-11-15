import './Carousel.css'

export default function Carousel() {
  return (
    <>
      <section className="carrusel">

        <div
          id="main-carousel"
          className="carousel slide main-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#main-carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#main-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#main-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>

          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <div className="carousel-caption d-none d-md-block">

              </div>
              <img
                src="https://www.serperuano.com/wp-content/uploads/2016/09/img_2763-1.jpg"
                className="d-block w-100"
                alt="Orquesta sinfonica"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                className="d-block w-100"
                alt="Alguien tocando guitarra"
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://musicacreativa.com/wp-content/uploads/2023/01/piano.jpg"
                className="d-block w-100"
                alt="Alguien tocando teclado"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#main-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#main-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </section>

    </>
  )
}
