import React from 'react';
import './App.css';
import { ROUTES } from './shared/router/routes';
import { IRoute } from './shared/models/IRoute.model';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>React Tests App</div>
      <Router>
        <Routes>
          { ROUTES.map((route: IRoute, index: number) => {
            return (
              <Route key={index} path={route.path} element={route.component}/>
            );
          }) }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
