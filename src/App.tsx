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
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import Catalogos from "./pages/Catalogos";
import articles from './data/articles.json';
import PublicRoute from './components/routes/PublicRoute';
import './App.css';


const Autoload = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({type:'SET_ARTICLES',value: articles.products}) 
    
  },[]);
  return (<></>);
}

const App: React.FC = () =>(
  <AppContextProvider>
    <Autoload/>
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
          <Route component={AboutUs} path="/about"></Route>
          <Route component={ContactUs} path="/contact"></Route>
          <Route component={Catalogos} path="/catalogos"></Route>
          {/* <Route component={Error404} /> */}

            <Route
              path=""
              render={() => <Redirect to="/home" />}
              exact={true}
            />
            {/* <Route path="/app" component={Tabs} />  MENU HEADER*/}

          </Router>
        {/* </IonPage> */}
        </Suspense>
      </Router>
    {/* </IonApp> */}
  </AppContextProvider>
);

export default App;
