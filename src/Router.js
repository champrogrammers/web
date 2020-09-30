import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

//IMPORTAR COMPONENTES
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import MainSection from '../src/components/mainSection';
import Contact from '../src/components/contact';
import Portfolio from './components/portfolio';
import Error404 from './components/error404';
import Form from './components/form';
import Services from './components/services';


class RouterM extends Component {
    render() {
        return (
            <HashRouter>
                <Navbar></Navbar>

                <section className="center">
                    <Switch>
                        <Route exact path="/" component={MainSection}></Route>
                        <Route exact path="/web/" component={MainSection}></Route>
                        <Route path="/Home" component={MainSection}></Route>
                        <Route path="/Services" component={Services}></Route>
                        <Route path="/Contact" component={Contact}></Route>
                        <Route path="/Portfolio" component={Portfolio}></Route>
                        <Route path="/Form" component={Form}></Route>
                        <Route path="*" component={Error404}></Route>
                    </Switch>
                </section>

                <Footer></Footer>
            </HashRouter>
        )
    }
}

export default RouterM;