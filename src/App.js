import React from 'react';
import './App.css';
import Login from './util/Login/Index'
import pwdBack from './util/pwdBack/Index'
import Home from './util/Home'
import Info from './pages/UserInfo/Info'
import Error from './util/Error'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends
    React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    render()
    {
        return (
            <div className="App">
              <Router>
                <Switch>
                  <Route path='/' exact component={Home} key='1'/>
                  <Route path='/home' component={Home} key='2'/>
                  <Route path='/login' exact component={Login} key='3'/>
                  <Route path='/pwdBack' exact component={pwdBack} key='4'/>
                  <Route path='/Info' exact component={Info} key='5'/>
                  <Route component={Error}/>
                </Switch>
              </Router>
            </div>
        );
    }
}

export {App as default} ;
