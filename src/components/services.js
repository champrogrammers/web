import React, { Component } from 'react';
import Typed from 'typed.js';

//Texto
import texts from '../texts/services.json';

//Imagenes
import webImage from '../res/images-services/laptop-2587224_1280.jpg';
import androidImage from '../res/images-services/smartphone-1735044_1280.jpg';
import desktopImage from '../res/images-services/pexels-christina-morillo-1181675.jpg';
import designImage from '../res/images-services/pexels-picjumbocom-196644.jpg';
import dataImage from '../res/images-services/pexels-lukas-669619.jpg';

//Iconos
import designIco from '../res/icons-services/sitio-web.svg';
import seoIco from '../res/icons-services/grafico-de-barras.svg';
import serverIco from '../res/icons-services/servidor.svg';
import movileIco from '../res/icons-services/telefono-inteligente.svg';
import jarraIco from '../res/icons-services/jarra-lapiz.svg';
import compasIco from '../res/icons-services/brujula.svg';
import filtrarIco from '../res/icons-services/filtrar.svg';
import relationIcon from '../res/icons-services/vector.svg';
import responsiveIco from '../res/icons-services/dispositivos.svg';
import prefesionalIco from '../res/icons-services/ordenador-portatil.svg';
import dibujarIco from '../res/icons-services/dibujar.svg';
import keyboardIcon from '../res/icons-services/teclado.svg';
import monitorIco from '../res/icons-services/monitor.svg';
import calibreIco from '../res/icons-services/calibre.svg';
import '../styles/allServices.css';

class Services extends Component {

    componentDidMount() {
        window.scroll(0, 0);
        this.typed = new Typed(this.el, {
            strings: [
                'Amplia tu negocio.',
                'Ten mayor credibilidad.',
                'Captación y fidelización de clientes.',
                'Haz tu negocio tecnológico.',
                'Compite con los grandes.',
                'Tus clientes te recordarán.',
                '¿List@ para dar el gran salto?.'
            ],
            typeSpeed: 30,
            smartBackspace: true,
            backDelay: 800,
            loop: true
        })
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    viewForm = () => {
        this.props.history.push('/Form');
    }

    render() {

        return (
            <React.Fragment>
                <div className="box web">
                    <div className="service-spot">
                        <div id="center-service">
                            <h2 className="Important-title">
                                Sitios web
                            </h2>
                            <div className="priority-tittle">
                                {texts.Services.webDevelopments}
                            </div>

                            <div id="dinamyc-text">
                                <span ref={(el) => { this.el = el; }}></span>
                            </div>

                            <div className="btn-service">
                                <button>
                                    <span>
                                        Desarrollo web <i class="fa fa-globe" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="btn-service-contact">
                                <button onClick={this.viewForm}>
                                    <span>
                                        Cotizar servicio
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="web-img">
                        <img src={webImage} alt="web site"></img>
                    </div>
                </div>

                <div className="banner">
                    <h3>Servicios de páginas web</h3>
                    <div className="cards">
                        <div id="card-element">
                            <img src={designIco} alt="Design include"></img>
                            <h3>Diseño</h3>
                            <span>
                                {texts.Banners.Web[0].one}
                            </span>
                        </div>
                        <div id="card-element">
                            <img src={seoIco} alt="Design include"></img>
                            <h3>Posicionamiento</h3>
                            <span>
                                {texts.Banners.Web[1].two}
                            </span>
                        </div>
                        <div id="card-element">
                            <img src={serverIco} alt="Design include"></img>
                            <h3>Despliegue</h3>
                            <span>
                                {texts.Banners.Web[2].three}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="box movile">
                    <div id="web-img">
                        <img src={androidImage} alt="Android application"></img>
                    </div>
                    <div className="service-spot">
                        <div id="center-service">
                            <h2 className="Important-title">
                                Desarrollo de apliciones Android
                        </h2>

                            <div className="priority-tittle">
                                {texts.Services.movileDevelopments}
                            </div>

                            <div className="btn-service">
                                <button>
                                    <span>
                                        Desarrollo móvil <i class="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="btn-service-contact">
                                <button onClick={this.viewForm}>
                                    <span>
                                        Cotizar servicio
                                </span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="banner">
                    <h3>Servicios de apliciones android</h3>
                    <div className="cards">
                        <div id="card-element">
                            <img src={jarraIco} alt="Design include"></img>
                            <h3>Ejemplo</h3>
                            <span>
                                {texts.Banners.movile[0].one}
                            </span>
                        </div>
                        <div id="card-element">
                            <img src={movileIco} alt="Design include"></img>
                            <h3>Ejemplo</h3>
                            <span>
                                {texts.Banners.movile[1].two}
                            </span>
                        </div>
                        <div id="card-element">
                            <img src={compasIco} alt="Design include"></img>
                            <h3>Ejemplo</h3>
                            <span>
                                {texts.Banners.movile[2].three}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="box desktop">
                    <div className="service-spot">
                        <div id="center-service">
                            <h2 className="Important-title">
                                Aplicaciones de escritorio.
                            </h2>
                            <div className="priority-tittle">
                                {texts.Services.desktopDevelopments}
                            </div>

                            <div className="btn-service">
                                <button>
                                    <span>
                                        Desarrollo web <i class="fa fa-globe" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="btn-service-contact">
                                <button onClick={this.viewForm}>
                                    <span>
                                        Cotizar servicio
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="web-img">
                        <img src={desktopImage} alt="web site"></img>
                    </div>
                </div>

                <div className="banner">
                    <h3>Servicio de apliciones de escritorio</h3>
                    <div className="cards">
                        <div id="card-element">
                            <img src={keyboardIcon} alt="Design include"></img>
                            <h3>Codificación</h3>
                            <span>
                                {texts.Banners.desktop[0].one}
                            </span>
                        </div>
                        <div id="card-element">
                            <img src={monitorIco} alt="Design include"></img>
                            <h3>Ejemplo</h3>
                            <span>
                                {texts.Banners.desktop[1].two}
                            </span>
                        </div>
                        <div id="card-element">
                            <img src={calibreIco} alt="Design include"></img>
                            <h3>A la medida</h3>
                            <span>
                                {texts.Banners.desktop[2].three}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="box databases">
                    <div id="web-img">
                        <img src={dataImage} alt="Bases de datos"></img>
                    </div>
                    <div className="service-spot">
                        <div id="center-service">
                            <h2 className="Important-title">
                                Soluciones en bases de datos
                            </h2>


                            <div className="priority-tittle">
                                {texts.Services.databases}
                            </div>

                            <div className="btn-service">
                                <button>
                                    <span>
                                        Bases de datos <i class="fa fa-database" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="btn-service-contact">
                                <button onClick={this.viewForm}>
                                    <span>
                                        Cotizar servicio
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="banner">
                    <h3>Servicios de bases de datos</h3>
                    <div className="cards-bd">
                        <div id="card-element">
                            <img src={filtrarIco} alt="Design include"></img>
                            <h3>Consultas eficientes</h3>
                            <span>
                                {texts.Banners.databases[0].one}
                            </span>
                        </div>
                        <div id="card-element">
                            <img src={relationIcon} alt="Design include"></img>
                            <h3>Bien estructurada</h3>
                            <span>
                                {texts.Banners.databases[1].two}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="box design">
                    <div className="service-spot">
                        <div id="center-service">
                            <h2 className="Important-title">
                                Desarrollo de apliciones de escritorio
                            </h2>


                            <div className="priority-tittle">
                                {texts.Services.designWorks}
                            </div>

                            <div className="btn-service">
                                <button>
                                    <span>
                                        Desarrollo UI/UX <i class="fa fa-pencil" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="btn-service-contact">
                                <button onClick={this.viewForm}>
                                    <span>
                                        Cotizar servicio
                                </span>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div id="web-img">
                        <img src={designImage} alt="web site"></img>
                    </div>
                </div>

                <div className="banner last">
                    <h3>Diseño web</h3>
                    <div className="cards">
                        <div id="card-element">
                            <img src={responsiveIco} alt="Design include"></img>
                            <h3>Adaptable</h3>
                            <span>
                                {texts.Banners.designs[0].one}
                            </span>
                        </div>
                        <div id="card-element">
                            <img src={prefesionalIco} alt="Design include"></img>
                            <h3>Profesional</h3>
                            <span>
                                {texts.Banners.designs[1].two}
                            </span>
                        </div>
                        <div id="card-element">
                            <img src={dibujarIco} alt="Design include"></img>
                            <h3>Atractivo</h3>
                            <span>
                                {texts.Banners.designs[2].three}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Iconos diseñados por <a href="https://www.flaticon.es/autores/prosymbols" title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a> */}
            </React.Fragment>
        )
    }

}

export default Services;