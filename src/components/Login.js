import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {

    state = {

        email: "",
        password: "",
        rol: "",
        _id: ""
    }



    onSubmit = (e) => {
        e.preventDefault();

        const loguear = {

            email: this.state.email,
            password: this.state.password,
            rol: this.state.rol
        }
        axios.post('http://localhost:3000/api/user/loguear', loguear)
            .then(res => {

                console.log(res)
                let token = res.data.token;
                const rol = loguear.rol;
                const _id = res.data.user._id;
                console.log(token);
                console.log(rol);
                console.log(_id)
                localStorage.setItem('token', token);
                localStorage.setItem('rol', rol);
                localStorage.setItem('_id', _id);
                if (res.status === 200) {
                    alert("Se a logueado con exito")
                    window.location.href = '/'
                 
                }
            })
            .catch((err) => console.log(err, alert("Este usuario no existe")));

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
                        style={{ marginTop: '50px' }}>
                        <h4>Iniciar Sesion</h4>

                        {/** iniciar sesion*/}

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                id="email"
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

                                    Iniciar

                            </button>

                            </form>

                        </div>

                    </div>


                </div>
            </div>
        )
    }
}
