import { Col, Container, Row } from "react-bootstrap";
import '../../App.css';

function Footer() {


    return (
        <footer>
            <Container fluid className="footer">
                <Row className="bg-footer ">
                    <Col xs={12} md={12} className="footer-links">
                        <a href="/mentions-legales">Mentions légales</a>
                        <a href="/cgu">CGU</a>
                        <a href="/newsletter">Newsletter</a>
                        <a href="/politique-confidentialite">Politique de confidentialité</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
