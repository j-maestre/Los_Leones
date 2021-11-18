/**
 * This is a simple redux-like state management pattern for React using hooks
 * that might be useful in your simpler Ionic React apps that don't
 * require something as complex as Redux.
 *
 * See each page for an example of how to read from state and
 * dispatch actions.
 *
 * Learn more:
 * https://ionicframework.com/blog/a-state-management-pattern-for-ionic-react-with-react-hooks/
 */

import React, { useReducer, useEffect } from "react";
// import event_model from "./components/Event/Event.model";

let AppContext = React.createContext(null);

const initialState = {
  language: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : "es-ES",
  theme: "Light",
  user: "",
  coordinates: "",
  user_coordinates: "no",
  segment: "recent",
  filter: "all",
  articles: []
};

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE": {
      return { ...state, ...action.value };
    }
    case "SET_USER": {
      return { ...state, user: action.value };
    }
    case "SET_ARTICLES": {
      return { ...state, articles: action.value };
    }
    case "SET_FILTER":{
      return {...state, filter:action.value};
    }
    case "LOGOUT": {
      return { ...state, user: "" };
    }
    case "SET_THEME": {
      action.value === "Dark"
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
      return { ...state, theme: action.value };
    }
    case "SET_LANG": {
      localStorage.setItem('i18nextLng', action.value);
      return { ...state, language: action.value};
    }
    case "ALL_COORDINATES": {
      //Cambiamos la latitud y longitud de lo que queremos mostrar en el map, ya sea uno solo o todos
      return { ...state, coordinates: action.value };
    }
    case "SET_FILTERS": {
      return { ...state, filters: action.value };
    }
    case "USER_COORDINATES": {
      return { ...state, user_coordinates: action.value }; //Aqui estan las coordenadas del usuario
    }


  }
  return state;
};

const logger = (reducer) => {
  const reducerWithLogger = (state, action) => {
    console.log(
      "%cPrevious State:",
      "color: #9E9E9E; font-weight: 700;",
      state
    );
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    const actionReducer = reducer(state, action);
    console.log(
      "%cNext State:",
      "color: #47B04B; font-weight: 700;",
      actionReducer
    );
    return actionReducer;
  };
  return reducerWithLogger;
};

const loggerReducer = logger(reducer);

function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
  };

  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);

  // SAVE IN LOCALSTORAGE THE LOGGED USER
  useEffect(() => {
    window.localStorage.setItem(
      "persistedState",
      JSON.stringify({
        user: state.user,
        segment: state.segment,
        theme: state.theme,
        welcome: state.welcome,
        currentAvatar: state.currentAvatar
      })
    );
  }, [state]);

  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };

export const isLogin = (state) => {
  return state.user ? true : false;
};
