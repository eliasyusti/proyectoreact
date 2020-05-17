import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const onLogout = () => {


    localStorage.removeItem('token')
    window.location.href = '/login'

}



export default class Navigations extends Component {



    render() {




        console.log(localStorage.getItem('token'))
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container" >
                    <Link className="navbar-brand" to="/">
                        Frutas
                </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {!localStorage.getItem('token') ?

                                < >
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Registrar">Registrar</Link>
                                    </li>
                                </>


                                : localStorage.getItem('rol') === 'usuario'  ?
                                    <>

                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">Frutas</Link>
                                        </li>
                                        <li className="nav-item"  >
                                            <Link className="nav-link " onClick={onLogout} to="/Login" >Salir</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">Frutas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/create">Crear Fruta</Link>
                                        </li>
                                        <li className="nav-item"  >
                                            <Link className="nav-link " onClick={onLogout} to="/Login" >Salir</Link>
                                        </li>
                                    </>



                            }


                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}