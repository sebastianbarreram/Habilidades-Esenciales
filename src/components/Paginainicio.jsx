import React from 'react'
import imagen1 from './img/banner.jpg';
import imagen2 from './img/Shirt.png';
import imagen3 from './img/banner3.gif'
import ojetivo_img from './img/objetivos.png'
import roles_img from './img/roles.png'
import resp_img from './img/responsabilidad.png'
import comunicacion from './img/comunicacion.jpg'
import motivacion from './img/motivacion.png'
// import video from './video/video.mp4'

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
                        <img src={imagen3} className="d-block w-80 imagen-custom" alt="..." />
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
            <h2 className="text-center">??Cu??l es la importancia de la contribuci??n individual para el equipo?</h2>
            {/* <!-- inicio secci??n de servicios --> */}
            <br />
            <div id="servicios" className="services-section">
                <article className="services-info">
                    <img className="services-info__imagen" src={ojetivo_img} alt="" />
                    <h3 className="services-info__title">Objetivo</h3>
                    <p className="services-info__text">
                        Tener un objetivo com??n. Debe existir cohesi??n de equipo
                    </p>
                </article>
                <article className="services-info">
                    <img className="services-info__imagen" src={roles_img} alt="" />
                    <h3 className="services-info__title">Roles</h3>
                    <p className="services-info__text">
                        Establecer roles dentro del equipo que velen por la coordinaci??n
                    </p>
                </article>
                <article className="services-info">
                    <img className="services-info__imagen" src={resp_img} alt="" />
                    <h3 className="services-info__title">Responsabilidades</h3>
                    <p className="services-info__text">
                        Definir las responsabilidades y tareas de cada integrante
                    </p>
                </article>
            </div>
            <div id="servicios" className="services-section">
                <article className="services-info">
                    <img className="services-info__imagen" src={comunicacion} alt="" />
                    <h3 className="services-info__title">Comunicaci??n</h3>
                    <p className="services-info__text">
                        Fomentar la comunicaci??n y participaci??n. Debemos ser emp??ticos y crear un buen ambiente laboral                    </p>
                </article>
                <article className="services-info">
                    <img className="services-info__imagen" src={motivacion} alt="" />
                    <h3 className="services-info__title">Motivaci??n</h3>
                    <p className="services-info__text">
                        La motivaci??n y el reconocimiento son aspectos necesarios para conseguir un buen rendimiento
                    </p>
                </article>
            </div>
            {/* <!-- fin secci??n de servicios --> */}
            <div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XJyhKFltMJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}
