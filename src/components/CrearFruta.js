import React, { Component } from 'react'
import axios from 'axios'

export default class CrearFruta extends Component {

    state= {

        nombre:"",
        descripcion:""
    }


    async componentDidMount() {

        const res = await axios.get('http://localhost:3000/api/frutas');
        console.log(res.data)
        

    }
    //crear una nueva fruta


    onSubmit = (e) => {
        console.log(this.setState.nombre, this.setState.descripcion)
        e.preventDefault();
        

        const nuevaFruta = {

            nombre: this.state.nombre,
            descripcion: this.state.descripcion
        }
        console.log(nuevaFruta)
    } 

    onInputChange = e => {
        e.preventDefault();
        this.setState({

        [e.target.name]: e.target.value

        })
        

    } 

    render() {
        return (
            <div className="row">

                <div className="col-md-6 offset-md-3">

                    <div className="card card-body">
                        <h4>Crear Fruta</h4>

                        {/** crear nombre de la fruta*/}

                        <div className="form-group">
                            <input
                                type="text" className="form-control"
                                placeholder="Nombre"
                                name="nombre"
                                onChange={this.onInputChange}
                                required>

                            </input>
                        </div>
                        <div>
                            <textarea
                                name="descripcion"
                                className="form-control"
                                placeholder="Descripcion"
                                onChange={this.onInputChange}
                                required>

                            </textarea>
                        </div>
                        <div>
                        <form onSubmit={this.onSubmit}>

                            <button type="submit" className="btn btn-primary">

                                Guardar

                            </button>

                        </form>
                        </div>

                    </div>


                </div>
            </div>
        )
    }
}
