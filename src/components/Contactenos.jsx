import React from 'react'

export default function Contactenos() {
    return (
        <>
            <div className="container">
                <header className='py-2'>
                    <div className="container">
                        <div className="row">
                            <div>
                                <h2>Escríbenos... ¿Cómo te podemos ayudar?</h2>
                            </div>
                        </div>
                    </div>
                </header>



                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre completo</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre completo"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Correo</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Correo"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Comentario</label>
                        <textarea class="form-control" id="message" name="message" placeholder="Ingresa aquí tu mensaje para nosotros" rows="7"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">ENVIAR</button>
                </form>
            </div>
        </>
    )
}
