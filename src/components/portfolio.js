import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        window.scroll(0, 0);
        return (
            <React.Fragment>
                <div className="portfolio">
                    <div className="txt-contact">
                        <div className="icon-plane">
                            <i class="fa fa-folder" aria-hidden="true"></i>
                        </div>
                        <p>Por el momento no tenemos aplicaciones para mostrar en portafolio</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio;