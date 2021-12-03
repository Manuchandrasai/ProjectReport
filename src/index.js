import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';


class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/signup' exact component={SignUp} />
                        <Route path='/' exact component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));