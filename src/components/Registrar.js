import React, { Component } from 'react'
import axios from 'axios'


export default class Registrar extends Component {

    state= {

        email:"",
        password:"",
        _id: "",
        rol:""
    }

    
    onSubmit = async (e) => {
        e.preventDefault();
        const nuevoUser = {

            email: this.state.email,
            password: this.state.password,
            rol: this.state.rol
        }

            await axios.post('http://localhost:3000/api/user/registrar', nuevoUser);
        
        window.location.href = '/Login'   
        alert("Se a registrado de manera exitosa");
        
    }

    onInputChange = e => {
        e.preventDefault();
        this.setState({

        email: e.target.value

        })
        
    } 

    onInputChangePass = e => {
        e.preventDefault();
        this.setState({

        password: e.target.value

        })
        
    }

    onInputChangeRol = e => {
        e.preventDefault();
        this.setState({

        rol: e.target.value

        })
        
    }
    


   

    render() {
        return (
            <div className="row">

                <div className="col-md-3 offset-md-4">

                    <div 
                    className="card card-body"
                    style={{marginTop:'50px'}}>
                        <h4>Registrar Usuario</h4>

                        {/** registrar*/}

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email" 
                                placeholder="Email"
                                name="email"
                                onChange={this.onInputChange}
                                value={this.state.email}
                                required>

                            </input>
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.onInputChangePass}
                                value={this.state.password}
                             
                                required>

                            </input>
                        </div>

                        <div className="form-group">
                            <select
                                className="form-control"
                                name="rolSelect"
                                onChange={this.onInputChangeRol}
                                value={this.state.rol}
                             
                                required>
                                    <option>Seleccione</option>
                                    <option>usuario</option>
                            <option>Super usuario</option>

                            </select>

                            
                        </div>

                        <div className="card card-footer ">

                        <form onSubmit={this.onSubmit}>

                            <button type="submit" className="btn btn-primary"
                            >

                                Registrar

                            </button>

                        </form>

                        </div>

                    </div>


                </div>
            </div>
        )
    }
}