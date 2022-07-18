import React from 'react'
import imagen1 from './img/libros.jpg';
import imagen2 from './img/banner.jpg';
import loan_img from './img/loan.png'
import logo_curso from './img/logocurso.png'
import logo_libros from './img/logolibros.png'
// import Sebastian_B from './img/Sebastian B.png'
// import Carolina from "./img/Carolina.png"
// import Diego from './img/Diego.png'


export default function Paginainicio() {
    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className="d-block w-100 imagen-custom" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100 imagen-custom" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <div className="container-fluid p-5 bg-dark text-white imagen-custom active text-center">
                            <h1>Tablero de anuncios</h1>
                            <p>
                                Horario de atención al público:<br />
                                Lunes a viernes<br />
                                8:00 am - 6:00 pm<br /><br />
                                Curso de ajedrez:<br />
                                Martes - Jueves<br />
                                4:30 pm - 6:00 pm
                            </p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <br />

            <h2 className="text-center"> Servicios</h2>
            {/* <!-- inicio sección de servicios --> */}
            <div id="servicios" className="services-section">
                <article className="services-info">
                    <img className="services-info__imagen" src={loan_img} alt="" />
                    <h3 className="services-info__title">Simulador</h3>
                    <p className="services-info__text">
                        En esta sección podrás simular las cuotas de
                        tu prestamo bancario y evaluar su solicitud
                    </p>
                </article>
                <article className="services-info">
                    <img className="services-info__imagen" src={logo_curso} alt="" />
                    <h3 className="services-info__title">Cursos</h3>
                    <p className="services-info__text">
                        En esta sección podrás encontrar todo los
                        cursos disponibles y los cursos ya finalizados.
                    </p>
                </article>
                <article className="services-info">
                    <img className="services-info__imagen" src={logo_libros} alt="" />
                    <h3 className="services-info__title">Préstamos</h3>
                    <p className="services-info__text">
                        En esta sección podrás acceder a los servicios
                        relacionados con los libros disponibles.
                    </p>
                </article>
            </div>
            {/* <!-- fin sección de servicios --> */}


            <div>
                <container>
                    <div className="row">
                        <div className="col-4">
                            <br />
                            <br />
                            <br />
                            <div className="card">
                                {/* <img src="..." className="card-img-top" alt="https://files.consumerfinance.gov/f/images/credit_myths_graphic.original.png"/> */}
                                <div className="card-body">
                                    <h5 className="card-title">Galerías de arte virtuales: características, imágenes y exposiciones de 20 galerías de arte online para ver desde casa</h5>
                                    <p className="card-text">Refresca tu vena artística, mediante esta visitas podras disfrutar, analizar y relajarte, al tiempo que contemplas las obras de arte.  </p>
                                    <a href="https://www.cinconoticias.com/galerias-de-arte-virtuales/" className="btn btn-primary btn-block">Quiero saber más</a>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div className="col-4 text-center">
                            <h2> Noticias  </h2>
                            <br />
                            <div className="card">
                                {/* <img src="..." className="card-img-top" alt="https://files.consumerfinance.gov/f/images/credit_myths_graphic.original.png"/> */}
                                <div className="card-body">
                                    <h5 className="card-title">El Nobel de Literatura más desconocido habla al fin: "Tardé doce años en publicar mi primera novela. Pensé en dejarlo"</h5>
                                    <p className="card-text">El escritor tanzano mantiene cierta sensación de incredulidad sobre el galardón. “No sabía que era tan bueno”, bromea.</p>
                                    <a href="https://www.elindependiente.com/tendencias/cultura/2021/11/06/el-nobel-de-literatura-mas-desconocido-habla-al-fin-tarde-doce-anos-en-publicar-mi-primera-novela-pense-en-dejarlo/" className="btn btn-primary btn-block">Quiero saber más</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <br />
                            <br />
                            <br />
                            <div className="card">
                                {/* <img src="img/loan.png" className="card-img-top"/> */}
                                <div className="card-body">
                                    <h5 className="card-title">Sena tiene cupos para 2022: cómo inscribirse, fechas, cursos y horarios</h5>
                                    <p className="card-text">Las inscripciones para los programas presenciales del Servicio Nacional de Aprendizaje están abiertas hasta el miércoles 24 de noviembre de 2021.</p>
                                    <br />
                                    <a href="https://www.pulzo.com/economia/inscripciones-sena-2022-como-inscribirse-fechas-horarios-cursos-PP1089882" className="btn btn-primary btn-block">Quiero saber más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </container>

            </div>
        </>
    )
}
