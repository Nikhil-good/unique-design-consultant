import React, { useEffect } from "react";
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  FaBuilding,
  FaCar,
  FaHeartbeat,
  FaChalkboardTeacher,
  FaPlane,
  FaShoppingCart,
  FaLaptopCode,
  FaMoneyBillWave,
  FaUtensils,
  FaWarehouse,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./IndustryVertical.css";

const industryCards = [
  { title: "Government Projects", icon: <FaBuilding />, bgClass: "bg-primary text-white" },
  { title: "Automobile CRM", icon: <FaCar />, bgClass: "bg-danger text-white" },
  { title: "Healthcare", icon: <FaHeartbeat />, bgClass: "bg-success text-white" },
  { title: "Education", icon: <FaChalkboardTeacher />, bgClass: "bg-warning text-dark" },
  { title: "Travel CRM", icon: <FaPlane />, bgClass: "bg-info text-white" },
  { title: "Retail CRM", icon: <FaShoppingCart />, bgClass: "bg-dark text-white" },
  { title: "IT & Software", icon: <FaLaptopCode />, bgClass: "bg-secondary text-white" },
  { title: "Finance & Banking", icon: <FaMoneyBillWave />, bgClass: "bg-success text-white" },
  { title: "Food Industry", icon: <FaUtensils />, bgClass: "bg-danger text-white" },
  { title: "Logistics & Supply", icon: <FaWarehouse />, bgClass: "bg-warning text-dark" },
  { title: "Human Resources", icon: <FaUsers />, bgClass: "bg-info text-white" },
  { title: "Professional Services", icon: <FaBriefcase />, bgClass: "bg-dark text-white" },
];

const IndustryVertical = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="industry-section py-5 text-center">

      <Container>
        <h2 className="text-Black fw-bold mb-5">Industry Verticals</h2>
        <Row className="justify-content-center">
          {industryCards.map((card, index) => (
            <Col key={index} lg={2} md={4} sm={6} xs={6} className="mb-4" data-aos="fade-up">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{card.title}</Tooltip>}
              >
                <Card
                  className={`text-center rounded-4 shadow-sm industry-card ${card.bgClass}`}
                  style={{ minHeight: "140px", padding: "20px", cursor: "pointer" }}
                >
                  <div className="icon-wrapper fs-2 mb-2">{card.icon}</div>
                  <Card.Text
                    className="fw-semibold"
                    style={{ whiteSpace: "nowrap", fontSize: "1rem" }}
                  >
                    {card.title}
                  </Card.Text>
                </Card>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default IndustryVertical;
