import { useReducer, createContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import redirectHandler from "./utils/redirectHandler";
import MainPage from './components/pages/main-page/main-page';
import SecondPage from './components/pages/second-page/second-page';

export const CountContext = createContext();

function App() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <BrowserRouter>
    <CountContext.Provider value={{ count, dispatch }}>
      <Switch>
      <Route path="/second-page" exact>
        <SecondPage/>
      </Route>
      <Route path="/" exact>
      {redirectHandler(count) ? <Redirect to="/second-page" /> : <MainPage />}
      </Route>
      </Switch>
    </CountContext.Provider>
    </BrowserRouter>
  );
}

export default App;