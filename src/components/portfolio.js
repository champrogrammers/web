import React, { Component } from 'react';
import "../styles/portfolio.css"

//Importar elemento de portafolio
import PortfolioElement from './portfolioElement';

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
                    <div>
                        <PortfolioElement />
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