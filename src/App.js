import "./styles.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Usuarios from "./components/Usuarios";
import Usuario from "./components/Usuario";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Usuarios</Link>

        <Switch>
          <Route exact path="/">
            <Usuarios />
          </Route>
          <Route path="/usuario/:id">
            <Usuario />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
