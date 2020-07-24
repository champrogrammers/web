import React, { Component } from 'react';

class Contact extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }

    showForm = () => {
        this.props.history.push('/Form');
    }

    render() {

        const title = `Envianos un correo electrónico a "Champrogrammers@gmail.com" para cotizar el servicio que deseas.`;

        return (
            <div>
                    <div>
                    <div className="icon-plane">
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </div>
                    <div className="txt-contact">
                        <p>{title}</p>
                        <p>Con gusto te atenderemos</p>
                        <p>ó</p>
                        <p>Rellena el formulario</p>

                        <button onClick={this.showForm}>Mostrar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;