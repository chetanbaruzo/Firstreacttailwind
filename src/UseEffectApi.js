import React from 'react'
import { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams, useHistory
  } from "react-router-dom";

const UseEffectApi = () => {
    const [users, setUsers] = useState([]);
    let history = useHistory();
    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        
        setUsers(await response.json());
    }
    
    useEffect(() => {
        getUsers();
    }, []);

    return (
        
        <div>


            <h1>hello api</h1>

            <button onClick={() => {
    history.push("/about")
}}><img
                          className="rounded-xl h-36 w-36"
                          src="https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png"
                          alt="Avatar"
                        /></button>


            {
                users.map((element, index) => {
                    return(
                            <div key={index}>
                            
                                     <img src={element.avatar_url} alt="avatar"/>
    
                
                            </div>
                    );
                    
                })
            }

            <Switch>
          <Route path="/about">
            <About />
          </Route>
          </Switch>
        </div>
    )
}

export default UseEffectApi

function About() {
    return <h2>About</h2>;
  }
