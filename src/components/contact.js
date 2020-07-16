import React, { Component } from 'react';

class Contact extends Component {
    render(){

        const title = `Envianos un correo electrónico a example@gmail.com para cotizar el servicio que deseas.`;
        let select = false;
        //Muestra o quita el formulario
        window.scroll(0,0);
        function showForm(){
            if (select){
                select = false;
            }
            else{
                select = true
            }
        }

        return(
            <React.Fragment>
                <div className="icon-plane">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </div>
                <div className="txt-contact">
                    <p>{title}</p>
                    <p>Con gusto te atenderemos</p>
                    <p>ó</p>
                    <p>Rellena el formulario</p>
                    <button onClick={showForm}>Mostrar</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;