import React from 'react';
import logo from './logo.ico';

//IMPORTAR COMPONENTES
import Navbar from '../src/components/navbar';
import MainSection from '../src/components/mainSection';
import Footer from '../src/components/footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <section class="center">
        <MainSection />
      </section>

      <Footer />

    </React.Fragment>



  );
}

export default App;
