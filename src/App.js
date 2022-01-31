import React from 'react';
import Navbar from './componenten/Navbar.jsx';
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom';
import './App.css';

import './componenten/fonts/Teko/Teko-Regular.ttf';

import Home from './componenten/pagina/Home';

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact="exact" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
