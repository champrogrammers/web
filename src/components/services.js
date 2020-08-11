import React, { Component } from 'react';
import webIcon from '../res/webIcon.svg';
import Android from '../res/android.svg';
import Computadora from '../res/computadora.svg';
import Sql from '../res/sql.svg';
import Ux from '../res/ux.png'

class Services extends Component {
    render() {
        window.scroll(0, 0);

        let adWebPages = `¿Deseas tener tu propio espacio en internet?, Podemos ayudarte con nuestros servicios web. Si eres un negocio, persona, institución, etc. Desarrollamos una página web profesional y de calidad perfecta para tus necesidades.`;
        let adAndroid = `¿Necesitas una aplicación Android?, nuestro servicio de aplicaciones móviles es lo que buscas. Contamos con experiencia para crear una aplicación que se adapte a tus requerimientos.`;
        let adDesktop = `Desarrollamos sistemas de escritorio de calidad y de fácil manejo para satisfacer tus requerimientos, contacta a nuestros expertos para cotizar tu futura aplicación de escritorio.`;
        let adSQL = `Diseñamos e implementamos bases de datos relacionales (SQL) cumpliendo con los estándares de formalización en nuestros desarrollos que así lo requieran, también ponemos a tu disposición el servicio de unicamente desarrollar tu base de datos.`;
        let adUi = `Ofrecemos diseños profesionales, responsivos y de alta calidad, para mejorar la experiencia de los usuarios cuando visiten tu web o aplicación.`;

        return (
            <React.Fragment>
                <div className="txt-contact">
                    <p>Lista de servicios</p>
                    <p>Ponemos a tu disposición los siguientes servicios</p>
                </div>
                <div className="content-services">
                    <div className="sqr-services">
                        <span>Páginas web</span>
                        <p>{adWebPages}</p>
                        <img src={webIcon} alt="páginas web logo" />
                    </div>
                    <div className="sqr-services">
                        <span>Aplicaciónes Android</span>
                        <p>{adAndroid}</p>
                        <img src={Android} alt="Android logo" />
                    </div>
                    <div className="sqr-services">
                        <span>Aplicaciónes de escritorio</span>
                        <p>{adDesktop}</p>
                        <img src={Computadora} alt="Escritorio logo" />
                    </div>
                    <div className="sqr-services">
                        <span>Bases de datos</span>
                        <p>{adSQL}</p>
                        <img src={Sql} alt="bases de datos logo" />
                    </div>
                    <div className="sqr-services">
                        <span>UI / UX</span>
                        <p>{adUi}</p>
                        <img src={Ux} alt="UI/UX logo" />
                    </div>
                    <div className="clearfix"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Services;