
import { Link } from 'react-router-dom';
import logo from './img/logobiblioteca.png';

export default function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-custom navbar-light">
                <div className="container">
                    <Link className="navbar-brand col-3" to="/">
                        <img src={logo} width="116" alt="" className="d-inline-block align-text-center" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse " id="navbarTogglerDemo01">
                        <ul className="navbar-nav ml-auto">
                            <div className="nav navbar-nav">
                                <Link className="nav-item nav-link" to='/contactenos'>Integrantes</Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}


