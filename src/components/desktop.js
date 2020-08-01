import React, { Component } from 'react';

class Desktop extends Component {

    componentDidMount(){
        window.scroll(0,0);
    }

    render() {
        return (
            <React.Fragment>
                <h2>Aplicaciónes de escritorio</h2>
                <div className="itm-portafolio">
                    <h3>Interfaz para administración de base de datos en restaurante de mariscos</h3>
                    <p>Aplicación de ecritorio con el objetivo de hacer consultas a una base de datos alojada en un servidor de SQLserver, la aplicación facilita la administración de facturas a un restaurante de mariscos de Guadalajara.</p>
                    <p>Se cumplió con todos los requerimientos que el cliente solicitó.</p>
                    <div id="link-imagenes">
                         <p>Imágenes de la aplicación: <a href="https://drive.google.com/drive/folders/1e4Mt-E5I25BBSusLjSWr_U32tJ6t1QJP?usp=sharing" target='_blank' rel="noopener noreferrer">Ver imágenes</a> </p> 
                         
                    </div>
                    <span>Tecnologías usadas: Java, FXML, SQLserver.</span>
                </div>
            </React.Fragment>
        )
    }

}

export default Desktop;