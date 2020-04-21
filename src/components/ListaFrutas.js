import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'


export default class ListaFrutas extends Component {

    state= {

        frutas:[],
        frutaAbuscar: '',
        frutasFiltradas:[]
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

    onInputChange = e => {
        e.preventDefault();
     
        var text = e.target.value;
        const {frutas} = this.state;
         const fruitsFilter = frutas.filter(fruta => {
            
            const nombreData = fruta.nombre.toUpperCase()
            const textData = text.toUpperCase()
            return nombreData.indexOf(textData) > -1
        
        } );

        this.setState({
            frutas: fruitsFilter,
            text: text,
        })

    } 

    

    render() {
        return (
            <div className="row" >
                <form >
                    <input 

                    className="form-control mr-sm-2" 
                    value = {this.state.buscar}
                    onSubmit = {this.onSubmit}
                    onChange={this.onInputChange}
                    name="buscar"
                   
                    placeholder="Search" 
                    
                    />
                    
                    <button className="btn btn-primary justify-content-between">
                                       Buscar
                                    </button>
                    
                    </form>
                    
                    
                {
                    this.state.frutas.map(fruta => (

                        <div className="col-md-6 offset-md-3 p-3" key={fruta._id}>
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
