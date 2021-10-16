import React from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MultiPageFetchUserApi from './MultiPageFetchUsersApi';

class MultiPageFetchUserData extends Component{
    render() {
        return(
            <Router>
                <div className="text-center">
                    <h1 className="text-xl">Multi Page Fetch User Data</h1>
                    <nav >
                        <ul>
                        <li ><Link to={'/'}></Link></li>
                            
                        </ul>
                    </nav>
                    <hr/>
                    {/* A <Switch> looks through its children <Route>s and
                         renders the first one that matches the current URL. */}
                    <Switch>
                        
                        <Route path='/' exact><MultiPageFetchUserApi/></Route>
                        
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default MultiPageFetchUserData;