import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../home/home';


const routes = [
  {
    component: <Home/>,
    route: '/'
  },
];

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            {
              routes.map((item) => {
                return (
                    <Route path={item.route}>
                      {item.component}
                    </Route>
                )
              })
            }
          </Switch>
        </Router>
      </div>
  );
}

export default App;
