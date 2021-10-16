import React from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class MultiPageBrowserRouter extends Component{
    render() {
        return(
            <Router>
                <div className="text-center">
                    <h1 className="text-xl">Multi Page Browser Router App</h1>
                    <nav className="bg-yellow-300 mt-5 mb-5">
                        <ul>
                            <li className="mb-3"><Link to={'/'}>Home</Link></li>
                            <li className="mb-3"><Link to={'/about'}>About</Link></li>
                            <li className="mb-3"><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    {/* A <Switch> looks through its children <Route>s and
                         renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path='/' exact><Home/></Route>
                        <Route path='/about' ><About/></Route>
                        <Route path='/contact' ><Contact/></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default MultiPageBrowserRouter;