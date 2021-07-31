import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Canvas from "./components/Canvas/Canvas";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/canvas">
            <Canvas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
