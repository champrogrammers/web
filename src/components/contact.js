import React, { Component } from 'react';

class Contact extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }

    showForm = () => {
        this.props.history.push('/Form');
    }

    render() {

        return (
            <div className="contact-center">
                    <div>
                    <div className="icon-plane animate__animated animate__rubberBand">
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </div>
                    <div className="txt-contact">
                        <p>Envianos un correo electrónico a "<a href="mailto:champrogrammers@gmail.com">champrogrammers@gmail.com</a>" para cotizar el servicio que deseas.</p>
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