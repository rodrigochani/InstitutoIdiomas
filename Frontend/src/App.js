import logo from "./logo.svg";
import "./App.css";
//import { Link, Route, Routes } from "react-router-dom";
import Header from "./componentes/headers/Header";
import { Carrousel } from "./componentes/carrousel/Carrousel";
import { Tarjeta } from "./componentes/tarjetas/Tarjeta";
import { Col, Container, Row } from "react-bootstrap";
import { Fragment } from "react";
import Admin from "./componentes/inicioAdmin/Admin";
import PrincipalAdmin from "./componentes/inicioAdmin/PrincipalAdmin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
 /*  return (
    <>
      <Header />
      <Carrousel />
      <Tarjeta />
      <Admin />
      <PrincipalAdmin />
    </>
  ); */
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;