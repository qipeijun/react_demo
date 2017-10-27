import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route } from "react-router-dom";


import './style/reset.css';
import './style/index.css';
import App from './App';
import Order from './component/order';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/index" component={App}></Route>
        <Route path="/order/:time" component={Order}></Route>
        <Route  component={App}></Route>
      </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
