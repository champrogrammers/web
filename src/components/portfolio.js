import React, { Component } from 'react';
import "../styles/portfolio.css"

class Portfolio extends Component {

    render() {
        window.scroll(0, 0);
        return (
            <React.Fragment>
                <div className="tittle-portfolio">
                    <h2 className="animate__animated animate__fadeInDown">Portafolio de trabajos</h2>
                    <p className="animate__animated animate__backInUp">
                        En esta sección usted podrá encontrar los trabajos realizados por nosotros.</p>
                </div>
                <div id="portfolio-center">
                    <div className="itm">
                        <div className="work-photo">
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="work-text">
                            <h3>Interfaz para restaurante</h3>
                            <p>
                                Aplicación de ecritorio con el objetivo de hacer consultas a una base de datos alojada en un servidor de
                                SQLserver, la aplicación facilita la administración de facturas a un restaurante de mariscos de Guadalajara.
                            </p>
                            <div id="tags">
                                <span>
                                    #Java
                                </span>
                                <span>
                                    #FXML
                                </span>
                                <span>
                                    #SQL
                                </span>
                            </div>
                            <div className="work-buttons">
                                <button>
                                    Ver Detallles
                            </button>
                            </div>
                        </div>
                    </div>

                    <div id="clear-fix"></div>

                    <div className="itm">
                        <div className="work-photo">
                            <img src="https://source.unsplash.com/random" />
                        </div>
                        <div className="work-text">
                            <h3>Página de portafolio de CHAM programmers</h3>
                            <p>
                                Es una página web reactiva (SPA) tiene como objetivo mostrar el portafolio de la empresa, sus servicios y
                                una sección para que los clientes se puedan poner en contacto.
                                Es la misma página web que usted está viendo en este momento.
                            </p>
                            <div id="tags">
                                <span>
                                    #ReactJS
                                </span>
                                <span>
                                    #JavaScript
                                </span>
                                <span>
                                    #PHP
                                </span>
                                <span>
                                    #CSS3
                                </span>
                                <span>
                                    #HTML5
                                </span>
                            </div>
                            <div className="work-buttons">
                                <button> Ver Detallles </button>
                            </div>
                        </div>
                    </div>

                    <div className="coming-soon">
                        <span>
                            Próximamente más desarrollos...
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio;