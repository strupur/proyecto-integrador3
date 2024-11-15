import './Contact.css';

export default function Contact() {
    return (
        <>
            <div className="div-titulo-h1">
                <h1 className="titulo-h1">CONTACTO</h1>
            </div>

            <section className="container-main">

                <form className="contenedor-form">

                    <div className="div-titulo-h2">
                        <h2>FORMULARIO DE CONTACTO</h2>
                    </div>

                    <div className="input NombreCompleto">
                        <label htmlFor="fullname" className="titulo-casilla">Nombre completo</label>
                        <input type="text" className="input-casilla" name="fullname" id="fullname" required minLength="5"
                            maxLength="80" placeholder=" ejemplo Raul Jose Lopez Roman" />
                    </div>

                    <div className="input CorreoElectronico">
                        <label htmlFor="email" className="titulo-casilla">Correo Electrónico</label>
                        <input type="email" className="input-casilla" name="email" id="email" required minLength="4" maxLength="100"
                            placeholder=" ejemplo @correo.com" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" />
                    </div>

                    <div className="input Observacion">
                        <label htmlFor="obs" className="titulo-casilla">Observación</label>
                        <textarea name="obs" id="obs" cols="100" rows="10" required minLength="4" maxLength="100"
                            className="input-casilla obs"></textarea>
                    </div>

                    <div>
                        <button type="submit" className="boton-registro">Contactar</button>
                    </div>

                </form>

                {/* ================== MAPA ================== */}

                <section className="container-mapa">
                    <iframe
                        className="app-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7088.0724856236!2d-71.52611103874861!3d-33.02688740688216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de84ead41255%3A0x8e5fde76df3d413f!2zVmnDsWEgZGVsIE1hciwgVmFscGFyYcOtc28!5e0!3m2!1ses!2scl!4v1715636781369!5m2!1ses!2scl"
                        width="600"
                        height="536"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </section>
        </>
    );
}
