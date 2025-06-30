import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-area bg-dark text-light pt-5 pb-4">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <h4 className="footer-logo">Unique Design Consultant</h4>
            <p>
              Unique Design Consultant is one of the leading consulting companies in India,
              renowned for its products, services and after-sales support.
            </p>
            <div className="social-links d-flex gap-3 mt-3">
              <a href="https://www.facebook.com/profile.php?id=100084791168958" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/uniquedesignconsultant/" target="_blank"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/unique-design-consultant/" target="_blank"><FaLinkedinIn /></a>
              <a href="#" target="_blank"><FaTwitter /></a>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h6>Software</h6>
            <ul className="footer-menu">
              <li><a href="#">Bitrix24 CRM</a></li>
              <li><a href="#">Zoho CRM</a></li>
              <li><a href="#">Chat App</a></li>
              <li><a href="#">WhatsApp Business API</a></li>
              <li><a href="#">Wazzup</a></li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h6>Quick Links</h6>
            <ul className="footer-menu">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h6>Contact Us</h6>
            <p><FaMapMarkerAlt /> 596/7, Chandreshwar Nagar, Rishikesh, Dehradun (Uttrakhand)</p>
            <p><FaPhoneAlt /> +91-8958847686</p>
            <p><strong>Office Time:</strong> Mon–Sat (9am–6pm)</p>
            <p><FaEnvelope /> info@uniquedesignconsultnt.in</p>

            <div className="newsletter-box mt-4">
              <h6>Subscribe to our newsletter</h6>
              <Form className="d-flex flex-column flex-md-row gap-2">
                <Form.Control type="email" placeholder="Enter your email" />
                <Button variant="danger">Subscribe</Button>
              </Form>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 Designed by <a href="https://uniquedesignconsultant.in/" target="_blank">UDC</a>. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
