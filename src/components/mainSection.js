import React, { Component } from 'react';
import cham from '../res/cham.png';
import Typed from 'typed.js';

class MainSection extends Component {

    componentDidMount() {
        this.typed = new Typed (this.el, {
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

    componentWillUnmount(){
        this.typed.destroy();
    }

    viewServices = () => {
        this.props.history.push('/Services');
    }

    render() {
        window.scroll(0, 0);

        return (
            <React.Fragment>
                <img className="logo" src={cham} alt="logo" />
                <div className="Presentation">
                    <p>CHAM</p>
                    <p><strong>Soluciones en Software</strong> a la medida</p>
                </div>

                <div className="type-wrap">
                  <span ref={(el) => { this.el = el; }}></span>  
                </div>
                
                <div className="descripion">
                    <p>Te ayudamos a <strong>actualizar tu marca o negocio</strong> haciéndolo más eficaz y tecnologico, adecuandonos a tu giro.</p>
                </div>
                <div className="txt-contact">
                    <button onClick={this.viewServices}>Ver Servicios</button>
                </div>
            </React.Fragment>
        )
    }
}

export default MainSection;