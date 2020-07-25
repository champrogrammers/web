import React from 'react';
import Particles from 'react-particles-js';
import params from '../src/particles.json';
//IMPORTAR COMPONENTE DE RUTAS
import Router from '../src/Router';

function App() {
  return (
    <React.Fragment>

      <div id="particles">
        <Particles params={params} />
      </div>

      <div className="TODO">
        <Router></Router>
      </div>

    </React.Fragment>



  );
}

export default App;
