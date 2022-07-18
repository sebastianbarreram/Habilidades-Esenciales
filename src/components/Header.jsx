import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from './img/logobiblioteca.png';

export default function Header() {

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setMenu(true)
        }

    }, [])


    const salir = () => {

        sessionStorage.clear();
        window.location.href = '/'

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-custom navbar-light">
                <div className="container">
                    <Link className="navbar-brand col-3" to="/">
                        <img src={logo} width="116" alt="" className="d-inline-block align-text-center" />Biblioteca Comunitaria
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse " id="navbarTogglerDemo01">
                        <ul className="navbar-nav ml-auto">
                            <div className="nav navbar-nav">
                                <Link className="nav-item nav-link" to='/contactenos'>Contáctenos</Link>
                                {/* <Link className="nav-item nav-link" to='/cursos'>Cursos</Link> */}
                                <Link className="nav-item nav-link" to="/simulador">Simulador</Link>
                                <Link className="nav-item nav-link" to="/prestamos">Préstamos</Link>

                                {
                                    menu ?
                                        <div className="nav navbar-nav" id="navbarSupportedContent">
                                            <Link className="nav-item nav-link" to="/usuario"><i className='fas fa-user'></i>{sessionStorage.getItem('nombre')}</Link>
                                            <Link className="nav-item nav-link" onClick={() => salir()} to="/"><i className="fas fa-user-times"></i> Salir</Link>
                                        </div>
                                        :
                                        <div className="nav navbar-nav" id="navbarSupportedContent">
                                            <Link className="nav-item nav-link" to="/iniciosesion"><i className="fas fa-user"></i> Inicio sesión</Link>
                                        </div>
                                }



                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}


