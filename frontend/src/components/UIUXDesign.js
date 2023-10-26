import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const UIUXDesign = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to TrustIndex</h1>
                    <p>TrustIndex is a comprehensive platform for evaluating trustworthiness and value alignment of individuals and entities in the startup and venture capital realm.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Our Mission</h2>
                    <p>We aim to provide a user-centric design focusing on ease of use and accessibility. Our platform is compliant with Web Content Accessibility Guidelines (WCAG).</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Get Started</h2>
                    <p>Create your profile, link your accounts, and share your public stances. Start gauging the trustworthiness of individuals and entities today.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default UIUXDesign;