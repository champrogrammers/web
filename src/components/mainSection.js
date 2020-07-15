import React, { Component } from 'react';
import cham from '../res/cham.png';

class MainSection extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="logo" src={cham} alt="logo"/>
                    <div className="Presentation">
                        <p>CHAM</p>
                        <p>Soluciones en Software a la medida</p>
                    </div>
                    <div className="descripion">
                        <p>Somos un grupo de tecnólogos egresados de la carrera de Desarrollo de Software del CETI plantel Colomos en Guadalajara</p>
                    </div>
                    <div className="btn-serv">
                        <button>Ver Servicios</button>
                    </div>
            </React.Fragment>
        )
    }
}

export default MainSection;