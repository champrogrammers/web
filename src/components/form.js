import React, { Component } from 'react';
import { selectFunction } from '../res/select-js/select';
import '../styles/select.css';
import alertify from 'alertifyjs';
import axios from 'axios';

class Form extends Component {

    state = {
        name: "",
        sureName: "",
        email: "",
        development: "",
        idea: ""
    }

    componentDidMount() {
        selectFunction();
        window.scroll(0, 0);
    }

    changeValues = ({ name, value }) => {
        this.setState(() => {
            return { [name]: value };
        });
    }

    obtainSelectContent() {
        let selectItem = document.getElementsByClassName("select-selected")[0].textContent;
        this.setState(()=>{
            return {"development": selectItem}
        })
    }
    
    redirectToHome = () => {
        this.props.history.push('/Home');
    }

    recibeForm = (e) => {
        e.preventDefault();
        let { name } = this.state;
        let thanksMessage = `Gracias por contactarnos ${name}, se ha enviado tu petición al equipo de programadores de CHAM`;
        let errorMsg = `${name}, si el problema persiste te recomendamos mandarnos correo a Champrogrammers@gmail.com`;
        axios
            .post('https://champrogrammers.000webhostapp.com/makeTicket.php', JSON.stringify(this.state))
            .then(response => {
                alertify.set('notifier', 'position', 'top-center');
                alertify.alert(`Se envio el formulario`, `Podemos tardar unas horas en contestar, en cuanto tengamos una estimación se la enviaremos a la dirección de correo: ${this.state.email}`,
                    function () { alertify.message(thanksMessage); });
                this.redirectToHome();
            })
            .catch(error => {
                alertify.set('notifier', 'position', 'top-center');
                alertify.alert('Error', 'No se ha mandado tu mensaje', function () { alertify.error(errorMsg) });
            })

    }

    render() {

        return (
            <React.Fragment>
                
                <div className="form-bg">
                    <form className="contact animate__animated animate__bounceInDown" onSubmit={this.recibeForm}>

                        <h2>Formato de cotización</h2>

                        <div id="names">
                            <input id="name1" name="name" type="text" placeholder="Nombre *" required
                                onChange={event => this.changeValues(event.target)}
                            />

                            <input name="sureName" type="text" placeholder="Apellido *" required
                                onChange={event => this.changeValues(event.target)}
                            />
                        </div>

                        <div id="sdata">

                            <input name="email" type="email" placeholder="Correo Electrónico *" required
                                onChange={event => this.changeValues(event.target)}
                            />

                            <div className="custom-select" onClick={() => this.obtainSelectContent()}>
                                <select name="development" id="Desarrollo" required
                                >
                                    <option value={""}>- Desarrollo requerido -</option>
                                    <option value="Página web">Página web</option>
                                    <option value="Aplicación web">Aplicación web</option>
                                    <option value="Aplicación Android">Aplicación móvil</option>
                                    <option value="Aplicación escritoiro">Aplicación escritorio</option>
                                    <option value="Base de datos">Diseño de base de datos</option>
                                    <option value="Interfaz de usuario">Interfaz de usuario</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>


                            <textarea name="idea" rows="7" placeholder="Describe el desarrollo que requieres * (necesitamos esta información para cotizar el trabajo.)"
                                required onChange={event => this.changeValues(event.target)}
                            ></textarea>


                            <div className="button-form">
                                <button type="submit">Enviar</button>
                            </div>

                        </div>

                    </form>
                </div>
            </React.Fragment>
        )
    }

}

export default Form;