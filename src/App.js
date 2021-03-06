import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Home from './components/pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
        <Navbar bg="dark" variant="dark" fixed="top" className="pl-4 pr-4">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <img
              alt=""
              src="images/company-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#cart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
