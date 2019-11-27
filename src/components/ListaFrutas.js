import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ListaFrutas extends Component {

    state= {

        frutas:[]
    }

    componentDidMount(){

        this.getFrutas();
    }

    async getFrutas(e){
        
        const res = await axios.get('http://localhost:3000/api/frutas');
        this.setState({frutas: res.data})
    }

    eliminarFruta = async (id) => {

      await axios.delete('http://localhost:3000/api/frutas/' + id);
      this.getFrutas();
      
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.frutas.map(fruta => (

                        <div className="col-md-4 offset-md-1 p-3" key={fruta._id}>
                            <div className="card" onDoubleClick={() => this.eliminarFruta(fruta._id)}>
                                <div className="card-header d-flex justify-content-between">
                                        <h5>{fruta.nombre}</h5>
                                            <Link className="btn btn-secondary" to={"/edit/" + fruta._id}>
                                            Editar
                                            </Link>
                                       
                                </div>
                                <div className="card-body">
                                        <p>{fruta.descripcion}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.eliminarFruta(fruta._id)}>
                                        Eliminar
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
        )
    }
}
