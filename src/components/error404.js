import React, { Component } from 'react';

class Error404 extends Component {
    render(){
        return(
            <div className="Error404">
               <h2>{`4 </> 4`}</h2>
        <h3><p>{`/* No deberias haber llegado aqui */`}</p></h3>
               <h3><p><div className="txtBlue">{`Error404`}</div><div className="txtwhite">{`( ) {`}</div></p></h3> 
                <h3><p>
                    <div className="txtRed">{`message`}</div>
                    <div className="txtwhite">{`: "`}</div>
                    <div className="txtGreen">{`Página no encontrada`}</div>
                    <div className="txtwhite">{`";`}</div>
                    </p></h3>
                <h3><p><div className="txtwhite">{`}`}</div></p></h3>
            </div>
        
        )
    }
}

export default Error404;