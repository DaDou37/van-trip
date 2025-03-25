import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import '../App.css';

const Contact = () => {
    return (
        <>
            <div className='container-fluid py-2 border-bottom'>
                <Row className="align-items-center">
                    <Col md={6}>
                        <input type='text' className='recherche' placeholder="Rechercher..." />
                    </Col>
                    <Col md={6} className="text-end">
                        <a href='Login' className='auth'>Login/Register</a>
                    </Col>
                </Row>
            </div>
            <div className='container text-center my-3'>
                <img src='/image/logo.png' width='200' height='200' alt="Logo" />
            </div>
            <Nav />
            <Container className="mt-5" id='containercontact'>
                <h1>Contactez-nous</h1>
                <Row className="mt-4">
                    <Col md={6} className="separator pr-3">
                        <h4>Formulaire de contact</h4>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" id="form-control" placeholder="Entrez votre nom" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" id="form-control" placeholder="Entrez votre email" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} id="form-control" placeholder="Votre message" />
                            </Form.Group>

                            <Button variant="light" id="form-control" type="submit">
                                Envoyer
                            </Button>
                        </Form>

                    </Col>

                    <Col md={6} className="mr-3" id="coordonne">
                        <h4>Nos coordonnées</h4>
                        <p><strong><FontAwesomeIcon icon={faEnvelope} /> Email:</strong> riera.david94@gmail.com</p>
                        <p><strong><FontAwesomeIcon icon={faPhone} /> Téléphone:</strong> 06-66-59-35-70</p>
                        <p><strong>Adresse:</strong> rue du val de loir,72500 Montval/loir</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;
