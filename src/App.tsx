import React,{ Suspense, useContext, useEffect } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import RouterOutlet from "react-router-outlet";

import { AppContextProvider, AppContext } from "./State";
// import Tabs from "./Tabs";
import Home from './pages/Home';
import Products from './pages/Products';
import PublicRoute from './components/routes/PublicRoute';
import './App.css';

const App: React.FC = () =>(
  <AppContextProvider>
    {/* <Autoload/> */}
    {/* <IonApp> */}
      <Router>
      <Suspense fallback="loading">
        {/* <IonPage> */}
          {/* <Menu /> */}
          <Router > {/*id="los_leones_Navigation"*/ }

          {/* <PublicRoute component={Login} path="/login" exact />
          <PublicRoute component={ChangePassword} path="/recover/:token" exact /> */}
          <Route component={Home} path="/home"></Route>
          <Route component={Products} path="/products"></Route>
            <Route
              path="/"
              render={() => <Redirect to="/home" />}
              exact={true}
            />
            {/* <Route path="/app" component={Tabs} />  MENU HEADER*/}
            {/* <Route component={Error404} /> */}

          </Router>
        {/* </IonPage> */}
        </Suspense>
      </Router>
    {/* </IonApp> */}
  </AppContextProvider>
);

export default App;