import React, { Component } from 'react';
import Jsico from '../res/javascript.svg';
import Android from '../res/android.svg';
import Cs from '../res/cs.svg';
import Sql from '../res/sql.svg';
import Ux from '../res/ux.png'

class Services extends Component {
    render() {
        window.scroll(0, 0);
        return (
            <React.Fragment>
                <div className="txt-contact">
                    <p>Lista de servicios</p>
                    <p>Podemos ayudarte a desarrollar</p>
                </div>
                <div className="content-services">
                    <div className="sqr-services">
                        <span>Páginas web</span>
                        <p>Podemos crear un sitio o aplicación web perfecta para tu negocio u hobbie</p>
                        <img src={Jsico} alt="Javascript logo" />
                    </div>
                    <div className="sqr-services">
                        <span>Aplicaciónes Android</span>
                        <p>¿Buscas una aplicación móvil?, podemos crearte una aplicacion para dispositivos Android</p>
                        <img src={Android} alt="Android Estudio logo" />
                    </div>
                    <div className="sqr-services">
                        <span>Aplicaciónes de escritorio</span>
                        <p>¿Lo que buscas es una aplicacion de escritorio?, podemos ayudarte a desarrollarla, ya sea con Java o C#</p>
                        <img src={Cs} alt="C sharp logo" />
                    </div>
                    <div className="sqr-services">
                        <span>Bases de datos</span>
                        <p>Soluciones en bases de datos MySQL, asi como integración de las mismas a nuestros desarrollos</p>
                        <img src={Sql} alt="SQL logo" />
                    </div>
                    <div className="sqr-services">
                        <span>UI / UX</span>
                        <p>Desarrollo de interfaces intuitivas y de fácil manejo para una buena experiencia de usuario</p>
                        <img src={Ux} alt="UI/UX logo" />
                    </div>
                    <div className="clearfix"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Services;