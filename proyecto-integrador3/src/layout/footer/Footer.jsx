import './Footer.css'

export default function Footer() {
  return (
    <>
    <footer className="container-footer">

<div className="div-footer">
  <i className="fa-solid fa-guitar"><span className="logo-music">MUSIC </span></i>
</div>

<div className="div-iconos-redes-sociales">
  <a className="redes-sociales"> Facebook <i className="fab fa-facebook-square"></i></a>
  <a className="redes-sociales"> Instagram <i className="fab fa-instagram-square"></i></a>
  <a className="redes-sociales">whasapp <i className="fab fa-whatsapp-square"></i></a>
</div>

<div className=" div-informacion">
  <a className="informacion"> ¿Quienes somos?</a>
  <a className="informacion"> Contacta 600 500 400</a>
  <a className="informacion"> Términos y Condiciones</a>
  <a className="informacion"> Política de privacidad</a>
</div>

</footer>
    
    
    </>
  )
}
