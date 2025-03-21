import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bubble from './components/Bubble/Bubble';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick';
import CenterMode from './components/Slider/Slider';
import './App.css';



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
          <div className="col-4 ms-auto text-end ">
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
      <hr className="col-4 " id='ligne' />
      <div className="acceuil text-center mt-5 px-4">
        <h2 className="acceuil-titre">🚐 Bienvenue sur <span className='text-white'>RoadTrip</span><span> France</span> ! 🌍</h2>
        <p className="lead mt-4">
          Le site dédié aux amoureux de la route et de l'aventure en van ! Ici, on partage conseils, itinéraires et bons plans
          pour explorer la France autrement, en toute liberté.
        </p>
        <p className="lead mt-4">
          Voyager en van, c’est bien plus qu’un simple moyen de transport : <strong>c’est un mode de vie !</strong>
        </p>
        <div className="acceuil-liste">
          <p><span className="emoji">🚐</span> <strong>Inspirer :</strong> Proposer des idées de road trips et des destinations incontournables en France.</p>
          <p><span className="emoji">📍</span> <strong>Guider :</strong> Offrir des itinéraires détaillés, des conseils pratiques et des spots où s’arrêter.</p>
          <p><span className="emoji">🔧</span> <strong>Préparer :</strong> Aider à organiser son voyage avec des astuces sur l’équipement, le budget et la vie en van.</p>
        </div>
        <p className="lead mt-4">Que tu sois un aventurier débutant ou un passionné de vanlife, ce site est là pour t’accompagner sur la route ! 🚀</p>
      </div>
      <Footer />
    </>
  )

}

export default App;