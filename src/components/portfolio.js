import React, { Component } from 'react';
import alertify from 'alertifyjs';
import web from '../res/iconos/internet.svg';
import zona from '../res/iconos/zona.svg';
import codigo from '../res/iconos/codigo.svg';

class Portfolio extends Component {

    //Click en icono de escritorio
    showDesktopComponent = () => {
        alertify.notify('Trabajos de escritorio');
        setTimeout( () => {
            this.props.history.push('/desktopApps')
        }, 900)
    }
    
    //Click en icono android
    showAndroidComponent(){
        alertify.notify('Aún no tenemos aplicaciónes android en portafolio');
    }

    //Click en icono web
    showWebComponent = () => {
        alertify.notify('Trabajos web');
        setTimeout ( () => {
            this.props.history.push('/webApps');
        }, 900 )
    }

    render() {
        window.scroll(0, 0);
        return (
            <React.Fragment>
                <div className="portfolio">
                    <div className="txt-contact">
                        <h2>Nuestro portafolio hasta ahora</h2>
                        <div id="container-works">

                            <div className="item-portfolio">
                                <h4>Web</h4>
                                <span>Te invitamos a que mires nuestro catálogo de aplicaciones web y las tecnologías que usamos para hacerlas posibles.</span>
                                <div className="icon-portfolio" onClick={this.showWebComponent}>
                                   <img src={web} alt="icono paginas web"></img> 
                                </div>
                                <div className="indication">
                                    Haz click en el icono para ver más
                                </div>
                            </div>

                            <div className="item-portfolio">
                                <h4>Android</h4>
                                <span>Te invitamos a que mires nuestro catalógo de aplicaciones Android así como las tecnologías que usamos para hacerlas posibles.</span>
                                <div className="icon-portfolio" onClick={this.showAndroidComponent}>
                                   <img src={zona} alt="icono android"></img> 
                                </div>
                                <div className="indication">
                                    Haz click en el icono para ver más
                                </div>
                            </div>

                            <div className="item-portfolio">
                                <h4>Escritorio</h4>
                                <span>Te invitamos a que mires nuestro catalógo de aplicaciones de escritorio así como las tecnologías que usamos para hacerlas posibles.</span>
                                <div className="icon-portfolio" onClick={this.showDesktopComponent}>
                                   <img src={codigo} alt="icono aplicaciones escritorio"></img> 
                                </div>
                                <div className="indication">
                                    Haz click en el icono para ver más
                                </div>
                            </div>

                        </div>

                        <div id="txt-portfolio">
                            <p>Todos los proyectos han sido desarrollados en base a los requerimientos de los clientes.</p>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio;