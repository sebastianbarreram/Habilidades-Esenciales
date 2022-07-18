
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';


export default function Actualizar(props) {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [year, setYear] = useState('')
    const [available, setAvailable] = useState('')
    const [assign, setAssign] = useState('')



    useEffect(() => {
        obtenerLibro();
        console.log("esta en el useEffect")
    },[])


    const obtenerLibro = async () => {
        const id = props.match.params.id
        console.log(id)
        console.log(id)
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/book/listar/' + id, {
            headers: { 'autorizacion': token }
        })
        console.log(respuesta.data)
        setName(respuesta.data.name)
        setYear(respuesta.data.year)
        setAuthor(respuesta.data.author)
        setAvailable(respuesta.data.available)
        setAssign(respuesta.data.assign)
    }




    const actualizar = async (e) => {
        e.preventDefault();
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')

        const libro = {
            name,
            year,
            author,
            available,
            assign
        }

        const respuesta = await Axios.put('/book/actualizar/' + id, libro, {
            headers: { 'autorizacion': token }
        })
        const mensaje = respuesta.data.mensaje


        Swal.fire({

            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })

        setTimeout(() => {
            window.location.href = '/prestamos'
        }, 1500)


    }

    return (
        <div className="container col-md-6 mt-4">
            <div className="card">
                <div className="card-header">
                    <h3>Editar libro</h3>
                    <div className="card-body">
                        <form onSubmit={actualizar}>
                            <div className="form-group">
                                <label >Nombre</label>
                                <input type="text" className='form-control required' onChange={(e) => setName(e.target.value)} value={name} />
                            </div>

                            <div className="form-group">
                                <label >Año</label>
                                <input type="text" className='form-control required' onChange={(e) => setYear(e.target.value)} value={year} />
                            </div>

                            <div className="form-group">
                                <label >Autor</label>
                                <input type="text" className='form-control required' onChange={(e) => setAuthor(e.target.value)} value={author} />
                            </div>

                            <div className="form-group">
                                <label >Disponible</label>
                                <input type="text" className='form-control required' onChange={(e) => setAvailable(e.target.value)} value={available} />
                            </div>

                            <div className="form-group">
                                <label >Asignado a</label>
                                <input type="text" className='form-control required' onChange={(e) => setAssign(e.target.value)} value={assign} />
                            </div>


                            <div className="form-group">
                                <button className='btn btn-primary' type='submit'>EDITAR</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>







    )
}