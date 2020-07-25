import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//IMPORTAR COMPONENTES
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import MainSection from '../src/components/mainSection';
import Services from '../src/components/services';
import Contact from '../src/components/contact';
import Portfolio from './components/portfolio';
import Error404 from './components/error404';
import Form from './components/form';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar></Navbar>
                <section className="center">

                    <Switch>
                        <Route exact path="/" component={MainSection}></Route>
                        <Route  path="/Cham-portfolio/" component={MainSection}></Route>
                        <Route exact path="/Home" component={MainSection}></Route>
                        <Route exact path="/Services" component={Services}></Route>
                        <Route exact path="/Contact" component={Contact}></Route>
                        <Route exact path="/Portfolio" component={Portfolio}></Route>
                        <Route exact path="/Form" component={Form}></Route>
                        <Route path="*" component={Error404}></Route>
                    </Switch>

                </section>

                <Footer></Footer>
            </BrowserRouter>
        )
    }
}

export default Router;