import React, { Component } from 'react'
import axios from 'axios'

export default class CrearFruta extends Component {

    state= {

        nombre:"",
        descripcion:"",
        editar: false,
        _id: ""
    }


    async componentDidMount() {
        
        const res = await axios.get('http://localhost:3000/api/frutas');
        console.log(res.data)

        if(this.props.match.params){
            const res = await axios.get('http://localhost:3000/api/frutas/' + this.props.match.params.id);
            this.setState({
                nombre: res.data.nombre,
                descripcion: res.data.descripcion,
                editar: true,
                _id: this.props.match.params.id
            })
        }
        

    }
    //crear una nueva fruta


    onSubmit = async (e) => {
        e.preventDefault();
        const nuevaFruta = {

            nombre: this.state.nombre,
            descripcion: this.state.descripcion
        }

        if(this.state.editar){

            await axios.put('http://localhost:3000/api/frutas/' + this.state._id, nuevaFruta);

        } else{

            await axios.post('http://localhost:3000/api/frutas/', nuevaFruta);
        }
        
        window.location.href = '/'
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
                                value={this.state.nombre}
                                required>

                            </input>
                        </div>
                        <div>
                            <textarea
                                name="descripcion"
                                className="form-control"
                                placeholder="Descripcion"
                                onChange={this.onInputChange}
                                value={this.state.descripcion}
                                required>

                            </textarea>
                        </div>

                        <div className="card card-footer ">

                        <form onSubmit={this.onSubmit}>

                            <button type="submit" className="btn btn-primary"
                            >

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
