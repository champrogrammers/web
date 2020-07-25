import React, { Component } from 'react';
import alertify from 'alertifyjs';
import cham from '../res/cham.png';

class MainSection extends Component {

    componentDidMount() {
        let date = new Date();
        let hour = date.getHours();
        if (hour >= 20) {
            alertify.notify('Buenas Noches');
        }
        if (hour >= 1 && hour <= 12) {
            alertify.notify('Buenos Dias');
        }
        if (hour >= 13 && hour <= 19) {
            alertify.notify('Buenas Tardes');
        }
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