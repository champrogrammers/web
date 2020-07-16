import React, { Component } from 'react';
import cham from '../res/cham.png';

class MainSection extends Component {
    render() {
        window.scroll(0, 0);
        return (
            <React.Fragment>
                <img className="logo" src={cham} alt="logo" />
                <div className="Presentation">
                    <p>CHAM</p>
                    <p><strong>Soluciones en Software</strong> a la medida</p>
                </div>
                <div className="descripion">
                    <p>Te ayudamos a <strong>actualizar tu marca o negocio</strong> haciéndolo más eficaz y tecnologico, adecuandonos a tu giro.</p>
                </div>
                <div className="txt-contact">
                    <button>Ver Servicios</button>
                </div>
            </React.Fragment>
        )
    }
}

export default MainSection;