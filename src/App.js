import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Home from './components/pages/home/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Logo from './components/shared/Logo'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <style type="text/css">
        {`
        .bg-primary {
          background-color: #481919 !important;
        }
        .btn-outline-primary{
          border-color: #481919 !important;
          color: #481919 !important;
        }
        .btn-outline-primary:hover{
          color: #fff !important;
          background-color: #481919;
          border-color: #481919;
        }
        .btn-outline-primary.focus, .btn-outline-primary:focus {
          box-shadow: 0 0 0 0.2rem rgb(72 25 25);
        }
        .btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):active, .show>.btn-outline-primary.dropdown-toggle {
          color: #fff !important;
          background-color: #481919;
          border-color: #481919;
        }
        .bg-secondary {
          background-color: #e2e28a !important;
        }
        `}
      </style>
      <Router>
        <Navbar bg="primary" variant="dark" fixed="top" className="pl-4 pr-4">
          <Navbar.Brand href="/">
            <Logo></Logo>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#home">Work</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="/about">A<span className="syllable small"></span>bout</Nav.Link>
            <Nav.Link href="#features">Con<span className="syllable small"></span>tact</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
