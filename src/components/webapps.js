import React, { Component } from 'react';

class Webapps extends Component {

    componentDidMount(){
        window.scroll(0,0);
    }

    render() {
        return (
            <React.Fragment>
                <h2>Páginas web</h2>
                <div className="itm-portafolio">
                    <h3>Página de portafolio de CHAM programmers</h3>
                    <p>Es una página web reactiva (SPA) tiene como objetivo mostrar el portafolio de la empresa, sus servicios y una sección para que los clientes se puedan poner en contacto.</p>
                    <p>Es la misma página web que usted está viendo en este momento.</p>
                    <div id="link-imagenes">
                        <p>Link: <a href="https://champrogrammers.github.io/web/" target='_blank' rel="noopener noreferrer">https://champrogrammers.github.io/web/</a> </p>
                    </div>
                    <span>Tecnologías usadas: ReactJS, JavaScript, JSX, PHP, CSS3, HTML5.</span>
                </div>
            </React.Fragment>
        )
    }

}

export default Webapps;