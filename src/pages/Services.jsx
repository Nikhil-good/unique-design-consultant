import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaCube,
  FaCode,
  FaComments,
  FaSync,
  FaChalkboardTeacher,
  FaLifeRing,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const serviceData = [
  {
    icon: <FaCube size={40} className="icon-hover text-primary" />,
    title: "Bitrix24 CRM Implementation",
    description:
      "We are Authorised GOLD Partner of Bitrix24 with presence in 3+ cities across India and provided services to more than 100+ customers.",
  },
  {
    icon: <FaCode size={40} className="icon-hover text-warning" />,
    title: "Custom Software Development",
    description:
      "We specialize in creating software solutions that are tailored to the specific needs and requirements of its clients Software.",
  },
  {
    icon: <FaComments size={40} className="icon-hover text-success" />,
    title: "Software Consultation",
    description:
      "We provide expert advice and guidance on software-related issues and challenges. Services include software design, audits, and project rescue.",
  },
  {
    icon: (
      <div className="d-flex gap-3 icon-hover">
        <FaWhatsapp size={28} color="#25D366" />
        <FaPhoneAlt size={28} color="#0dcaf0" />
        <FaEnvelope size={28} color="#ffc107" />
      </div>
    ),
    title: "Third-Party Integrations",
    description:
      "Integrate tools like WhatsApp, Telephony, Email, Facebook and other third-party apps with your CRM or custom platforms.",
  },
  {
    icon: <FaChalkboardTeacher size={40} className="icon-hover text-info" />,
    title: "Software Training",
    description:
      "We bridge the skills gap by offering role-specific software training tailored to your employees’ levels and workflows.",
  },
  {
    icon: <FaLifeRing size={40} className="icon-hover text-danger" />,
    title: "Software Support",
    description:
      "We provide reliable support, updates, and maintenance services to ensure your business-critical systems perform optimally.",
  },
  {
    icon: <FaSync size={40} className="icon-hover text-light" />,
    title: "Software Migration",
    description:
      "Our professionals provide completely secured data migration which helps you retain historical data accurately and seamlessly.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   <Container fluid className="py-5 px-4 bg-dark text-light" id="services">
      <h2 className="text-center fw-bold mb-4 text-white">Our Services</h2>
      <p className="text-center text-light mb-5">
        We specialize in delivering tailored digital solutions from apps and websites to CRM integrations and cloud infrastructure.
      </p>
      <Row>
        {serviceData.map((service, index) => (
          <Col
            lg={4}
            md={6}
            sm={12}
            className="mb-4"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Card className="h-100 bg-secondary text-light shadow service-card-dark border-0 rounded-4">
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">{service.icon}</div>
                <Card.Title className="fw-bold text-white">{service.title}</Card.Title>
                <Card.Text className="flex-grow-1">{service.description}</Card.Text>
                <Button variant="outline-light" className="mt-3 align-self-start">
                  Learn more →
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
