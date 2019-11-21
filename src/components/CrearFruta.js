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


    onSubmit = async (e) => {

        const nuevaFruta = {

            nombre: this.state.nombre,
            descripcion: this.state.descripcion
        };
        await axios.post('http://localhost:3000/api/frutas', nuevaFruta);
        window.location.href = '/';
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

                <div className="col-md-6 offset-md-3 col-md-1">

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

                        <div className="col-md-9">

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
