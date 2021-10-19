import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AxiosFetchUserApi from './AxiosFetchUserApi';
import AxiosGetFetchApi from './AxiosGetFetchApi';
import Contact from './Contact';

class About extends Component{
    render(){
        return(
            <div>
            <Router>
                <h2>About us</h2>
                <Link to='/about/image'>
                        <img
                          className="rounded-xl h-36 w-36"
                          src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
                          alt="Avatar"
                        />
                      </Link>
                      <Route exact path="/about/image">
                          <AxiosGetFetchApi/>
                      </Route>
            </Router>
            </div>
        );
    }
}

export default About;