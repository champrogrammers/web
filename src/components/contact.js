import React, { Component } from 'react';
import Form from '../components/form';

class Contact extends Component {

    state = {
        visible: false
    };

    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {

        const title = `Envianos un correo electrónico a "progracham@gmail.com" para cotizar el servicio que deseas.`;

        return (
            <div>
                {this.state.visible ? (<Form />) : (
                    <div>
                    <div className="icon-plane">
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </div>
                    <div className="txt-contact">
                        <p>{title}</p>
                        <p>Con gusto te atenderemos</p>
                        <p>ó</p>
                        <p>Rellena el formulario</p>

                        <button onClick={
                            () => {
                                this.setState({
                                    visible: true
                                });
                                window.scroll(0,0);
                            }
                        }>Mostrar</button>
                    </div>
                </div>
                ) }
            </div>
        )
    }
}

export default Contact;