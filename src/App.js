import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bubble from './components/Bubble/Bubble';
import Nav from './components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick';
import './App.css';
import CenterMode from './components/Slider/Slider';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Row>
          <div className="col-4">
            <input type='text' className='recherche' />
          </div>
          <div className="col-4" id='logo'>
            <img src='/image/logo.png' width='200' height='200' />
          </div>
          <div className="col-4 ">
            <a href='' className='auth'>Login/Register</a>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </div>
        </Row>
      </div>
      <Nav />
      <Bubble />
      <Container>



        <CenterMode />



      </Container>

    </>
  )

}

export default App;