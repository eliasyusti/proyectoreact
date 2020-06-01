import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'


export default class ListaFrutas extends Component {

    state= {

        frutas:[],
        frutaAbuscar: '',
        frutasFiltradas:[],
        _id:"",
    }

    componentDidMount(){

        this.getFrutas();
    }

    async getFrutas(){

        const id = localStorage.getItem('_id');
        const res = await axios({
            method: 'get',
            url: 'http://localhost:3000/api/frutas/' + id,
            headers: {'authorization': 'Bearer ' + localStorage.token}
       });
       console.log(res.data)
        this.setState({frutas: res.data, frutasFiltradas: res.data})
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

      
        if(text === null || text === ""){
            this.getFrutas();
            return 
        }

        this.setState({
            frutasFiltradas: fruitsFilter,
            text: text,
        })

        console.log(text)


    } 

    

    render() {
        return (
            <div className="container" >
                <form >
                    <input 

                    className="form-control col-md-2" 
                    value = {this.state.buscar}
                    onSubmit = {this.onSubmit}
                    onChange={this.onInputChange}
                    name="buscar"
                   
                    placeholder="Search" 
                    
                    />
                    
                    </form>
                    
                    
                    
                {
                    this.state.frutasFiltradas.map(fruta => (

                        

                        <div className="col-md-6 offset-md-3 p-2" key={fruta._id}>
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
