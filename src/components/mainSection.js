import React, { Component } from 'react';
import '../styles/main.css';
import cham from '../res/cham.png';
import Typed from 'typed.js';

class MainSection extends Component {

    componentDidMount() {
        this.typed = new Typed(this.el, {
            strings: [
                'Páginas web.',
                'Aplicaciones web.',
                'Aplicaciones Android.',
                'Aplicaciones de escritorio.',
                'Bases de datos.',
                'Diseños profesionales.',
                'Frameworks de JS.',
                '¡ Contactanos !.'
            ],
            typeSpeed: 80,
            smartBackspace: true,
            backDelay: 800,
            loop: true
        })
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    viewServices = () => {
        this.props.history.push('/Services');
    }

    render() {
        window.scroll(0, 0);

        return (
            <React.Fragment>
                <div id="img-trademark">

                    <div className="bar-contact">
                        <a href="mailto:champrogrammers@gmail.com" rel="noopener noreferrer">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            champrogrammers@gmail.com
                        </a>

                        <a href="mailto:champrogrammers@gmail.com" >
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            +52 3333333333
                        </a>

                    </div>

                    <div className="main-text">
                        <img className="animate__animated animate__fadeInDown" src={cham} alt="Logo Cham programmers" />
                        <h1>CHAM Programmers</h1>
                        <p className="animate__animated animate__fadeInDown">
                            Te ayudamos a actualizar tu marca o negocio haciéndolo más eficaz y tecnologico, adecuandonos a tu giro.
                        </p>
                        <div className="type-wrap">
                            <span ref={(el) => { this.el = el; }}></span>
                        </div>
                    </div>
                </div>

                <div id="main-content">
                    <div id="rows">
                        <div id="f-view">
                            <h2>¿En que te podemos ayudar?</h2>
                            <hr />
                            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            <p>Bueno, en CHAM tenemos la visión de que todos los pequeños negocios puedan tener su propio espacio
                            en internet; ese es el motivo por el que estamos aquí, queremos que tu negocio pueda triunfar de manera
                            digital, tal como la epoca actual lo demanda.
                        </p>
                        </div>
                        <div id="f-view">
                            <h2>¿Como te podemos ayudar?</h2>
                            <hr />
                            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                            <p>
                                Podemos ayudarte a implementar herramientas de software a tu negocio, como lo son el caso de las páginas
                                web, u otras herramientas para asegurarnos de que tu desarrollo que solicitas siempre estén funcionando y
                                disponibles para su uso. Contamos con personal capacitado para ayudarte con lo que necesitas.
                        </p>
                        </div>
                    </div>
                    <div className="l-view">
                        <h3>Te inivitamos a que mires nuestros servicios</h3>
                        <hr />
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p>Haz click en el botón para ser redirigido/a a nuestra página con nuestros servicios.</p>
                        <button onClick={this.viewServices}>Servicios</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MainSection;