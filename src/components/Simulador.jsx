import React, { useState } from 'react'
//import Button from 'react-bootstrap/Button';
//import Cards from 'react-bootstrap/Cards';
//import { Link } from 'react-router-dom';
//import Axios from 'axios'
//import Swal from 'sweetalert2'


const Simulador = () => {

    const [valordelprestamo, setValordelprestamo] = useState("")
    const [cuotas, setCuotas] = useState("")
    const [tdi, setTdi] = useState("")
    const [valor, setValor] = useState("")


    const calcularcuota = async (e) => {

        // se hace la formula considerando el siguiente link https://www.youtube.com/watch?v=N1-i1pXYXOE&t=161s
        const cuotaestimada = (valordelprestamo * (tdi / 100)) / (1 - ((1 + (tdi / 100))) ** (cuotas * -1));
        setValor(cuotaestimada)
        // alert("La cuota es: " + cuotaestimada);
    }


    const validar = (event) => {


        //capturar el evento submit del formulario y evitar que la pagina se recargue
        event.preventDefault()
        console.log("pulsado el boton")
        //trim evalua si hay cadena de caracteres


        if (!valordelprestamo.trim()) {
            console.log("El valor del prestamo esta vacio, por favor ingresa la informacion solicitada")
            return
        }

        if (!cuotas.trim()) {
            console.log("La cantidad de cuotas esta vacia,por favor ingresa la informacion solicitada ")
            return
        }

        if (!tdi.trim()) {
            console.log("La tasa efectiva mensual esta vacia,por favor ingresa la informacion solicitada ")
            return
        }


    }



    return (
        <div className="container">
            <div className="row-4">
                <div className="col-4">

                </div>

                <div className="row-4"></div>
                <div className="row"></div>

                <div className="col"></div>
                <div className="container">
                    <header className='py-2'>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Simulador de préstamos</h2>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="col"></div>
                    <div className="row"></div>
                    <div className="row"></div>


                </div>
                <div className="container">


                    <form onSubmit={validar} className="form-groups">
                        <input
                            placeholder="Introduce el valor del prestamo"
                            className="form-control mb-3"
                            type="number"
                            //Recibe un evento que es le evento del input 
                            //y dentro de esta funcion 
                            //Se recoge en valor del input y lo setea dentro de la constante el estado
                            //target una referencia al objeto en el cual se lanzo el evento. 
                            onChange={(e) => { setValordelprestamo(e.target.value) }}
                        />

                        <input
                            placeholder="Introduce la cantidad de cuotas"
                            className="form-control mb-3"
                            type="number"
                            onChange={(e) => { setCuotas(e.target.value) }}
                        />

                        <input
                            placeholder="Introduce la tasa de interes efectiva mensual o anual segun desee calcular la cuota"
                            className="form-control mb-3"
                            type="numner"
                            onChange={(e) => { setTdi(e.target.value) }}
                        />

                        <button className="btn btn-primary btn-info btn-block " type="submit" onClick={() => calcularcuota()}>Calcular</button>

                    </form>
                </div>
                <div className="col"></div>
            </div>

            <div>
                <nav aria-label="breadcrumbmt-4">
                    <ol className="breadcrumb mt-4">
                        <li className="breadcrumb-item activemt-4" aria-current="page"> La cuota estimada es de ${valor}</li>
                    </ol>
                </nav>

            </div>

            {/* Card * guiarse de inicio sesion*/}

        </div>
    )
}

export default Simulador

