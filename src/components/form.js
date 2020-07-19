import React, { Component } from 'react';
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


    mostrarAlerta() {
        alertify.alert('Aviso', 'En CHAM tomamos en cuenta el respeto.', function () { alertify.notify('¡ Cuentanos que necesitas !'); });
    }

    componentDidMount() {
        this.mostrarAlerta();
    }

    changeValues = ({ name, value }) => {
        this.setState(() => {
            return { [name]: value };
        });
    }

    recibeForm = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .post('https://champrogrammers.000webhostapp.com/sendEmail.php', JSON.stringify(this.state))
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        let thanksMessage = `Gracias por contactarnos ${this.state.name}, se ha enviado tu petición al equipo de programadores de CHAM`;
        alertify.alert(`Se envio el formulario`, `Podemos tardar unas horas en contestar, en cuanto tengamos una estimación se la enviaremos a la dirección de correo: ${this.state.email}`,
            function () { alertify.message(thanksMessage); });
    }

    render() {

        return (
            <React.Fragment>
                <form className="contact" onSubmit={this.recibeForm}>

                    <label htmlFor="Nombre">Nombre *</label>
                    <input name="name" type="text" placeholder="Escribe tu nombre" required
                        onChange={event => this.changeValues(event.target)}
                    />


                    <label htmlFor="Apellido">Apellido *</label>
                    <input name="sureName" type="text" placeholder="Escribe tu apellido" required
                        onChange={event => this.changeValues(event.target)}
                    />


                    <label htmlFor="Email">Correo Electrónico *</label>
                    <input name="email" type="email" placeholder="Correo electrónico" required
                        onChange={event => this.changeValues(event.target)}
                    />


                    <label htmlFor="Desarrollo">¿Que tipo de desarrollo requieres? *</label>
                    <select name="development" id="Desarrollo" required
                        onChange={event => this.changeValues(event.target)}
                    >
                        <option value={""}>- Selecciona uno -</option>
                        <option value="Pagina web">Pagina web</option>
                        <option value="Aplicación web">Aplicación web</option>
                        <option value="Aplicación Android">Aplicación Android</option>
                        <option value="Aplicación Escritoiro">Aplicación Escritorio</option>
                        <option value="Base de datos">Diseño de base de datos</option>
                        <option value="Otro">Otro</option>
                    </select>


                    <label htmlFor="descripcion">Cuentanos un poco de tu idea *</label>
                    <textarea name="idea" rows="10" placeholder="Describe brevemente que es lo que requieres (Necesitamos esta información para estimar un presupuesto)"
                        required onChange={event => this.changeValues(event.target)}
                    ></textarea>


                    <div className="txt-contact">
                        <button type="submit">Enviar</button>
                    </div>

                </form>
            </React.Fragment>

        )
    }

}

export default Form;