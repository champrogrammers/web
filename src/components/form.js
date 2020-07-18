import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <form className="contact">
                <label htmlFor="Nombre">Nombre</label>
                <input type="text" placeholder="Escribe tu nombre"></input>
                <label htmlFor="Apellido">Apellido</label>
                <input type="text" placeholder="Escribe tu apellido"></input>
                <label htmlFor="Email">Correo Electrónico</label>
                <input type="email" placeholder="Correo electrónico"></input>
                <label htmlFor="Desarrollo">¿Que tipo de desarrollo requieres?</label>
                <select name="Desarrollo" id="Desarrollo">
                    <option value="Pagina web" defaultValue>Pagina web</option>
                    <option value="Aplicación web">Aplicación web</option>
                    <option value="Aplicación Android">Aplicación Android</option>
                    <option value="Aplicación Escritoiro">Aplicación Escritorio</option>
                    <option value="Base de datos">Diseño de base de datos</option>
                </select>
                <label htmlFor="descripcion">Cuentanos un poco de tu idea</label>
                <textarea name="descripcion" rows="10" placeholder="Describe brevemente que es lo que requieres (Necesitamos esta información para estimar un presupuesto)"></textarea>
                <div className="txt-contact">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        )
    }

}

export default Form;