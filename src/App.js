import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Blog from './components/Blog/Blog';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div >
      <Container>
        <Router>
        <div>
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <Link to="/"> 
                SR Sohan
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
              <ul className="d-flex align-items-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li> 
                <a class="btn text-success" href="https://drive.google.com/uc?export=download&amp;id=1_Wd-uKdPZOFOrTDAtwZuAmYpvb7hHwoI" >Download Resume</a>
                </li>
              </ul>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blog"> 
              <Blog/>
            </Route>
            <Route path="/projects"> 
              <Projects/>
            </Route>
            <Route path="/contact"> 
              <Contact/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
    </div>
  );
}

export default App;
