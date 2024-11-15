import './AcercaDeNosotros.css'

export default function AcercaDeNosotros() {
    return (
        <main className="contenedor-main">
            <div className="div-titulo-h1">
                <h1 className="titulo-h1-l">SOBRE NOSOTROS</h1>
            </div>

            <div className="div-parrafo">
                <p className="parrafo">
                    Music es una empresa líder en el mundo de la música, dedicada a proporcionar a los músicos
                    de todos los niveles los mejores instrumentos musicales de bandas sonora como rock o instrumentos de
                    orquesta de las marcas más reconocidas a nivel internacional. Nuestra misión es llevar la pasión por la
                    música a cada rincón del planeta, ofreciendo una amplia gama de productos que van desde guitarras y
                    pianos hasta batería e instrumentos de orquesta como violines y violoncello.
                </p>
            </div>

            <div className="div-titulo-h1">
                <h1 className="titulo-h1-l">DESARROLLADOR WEB</h1>
            </div>

            <div className="div-presentacion">

                <div className="div-img">
                    <img src="../../src/assets/image/41506b29-27fd-4ef4-a22d-80ff6fc51051.jpg" alt="Presentación" className="imagen-presentacion" />
                </div>

                <div className="div-presentacion-infor">
                    <ul className="list">
                        <li className="item">Nombre: Francisco Javier Espinoza Riquelme</li>
                        <li className="item">Ubicación: Chile</li>
                        <li className="item">Ocupación Actual: Guardia de Seguridad</li>
                        <li className="item">Intereses: Desarrollo Web, Programación, Tocar Instrumentos</li>
                    </ul>

                    <p className="info-alumno">
                        Francisco Javier Espinoza Riquelme es un aspirante a desarrollador web con una pasión por la
                        programación. Actualmente desempeña funciones como guardia de seguridad mientras se dedica
                        activamente a aprender y mejorar sus habilidades en el campo del desarrollo web. Su entusiasmo por
                        la programación se combina con su amor por la música, donde disfruta tocando diferentes instrumentos
                        como parte de sus pasatiempos.
                    </p>
                </div>
            </div>
        </main>
    );
}
