import React, { useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import {
  FaProjectDiagram,
  FaShoppingCart,
  FaBullseye,
  FaUsers,
  FaUserTie,
  FaCog,
  FaClock,
  FaFileAlt,
  FaLock,
  FaBullhorn,
} from "react-icons/fa";
import "./Departmentsection.css"
const tabData = [
  {
    key: "project",
    icon: <FaProjectDiagram size={28} />,
    title: "Project management",
    heading: "Organize and manage projects like a pro.",
    points: [
      "Assign and track tasks with deadlines.",
      "Visualize work using Kanban and Gantt charts.",
      "Monitor project progress with ease.",
      "Collaborate in real time with your team.",
    ],
    image: "/assets/img/bitrix24/tasks_and_projects-main.png",
  },
  {
    key: "sales",
    icon: <FaShoppingCart size={28} />,
    title: "Sales",
    heading: "Supercharge your sales pipeline.",
    points: [
      "Track deals through every stage.",
      "Automate repetitive sales tasks.",
      "Communicate directly via CRM.",
      "Close more deals faster.",
    ],
    image: "/assets/img/bitrix24/crm.png",
  },
  {
    key: "marketing",
    icon: <FaBullseye size={28} />,
    title: "Marketing",
    heading: "Run powerful, targeted marketing campaigns.",
    points: [
      "Create email campaigns with ease.",
      "Analyze performance metrics.",
      "Segment audiences for personalized outreach.",
      "Boost ROI with automation.",
    ],
    image: "/assets/img/bitrix24/marketing.jpg",
  },
  {
    key: "support",
    icon: <FaUsers size={28} />,
    title: "Customer service",
    heading: "Deliver top-notch support experiences.",
    points: [
      "Centralize support tickets.",
      "Respond via live chat, email, and phone.",
      "Monitor agent performance.",
      "Improve response time and satisfaction.",
    ],
    image: "/assets/img/bitrix24/support.png",
  },
  {
    key: "hr",
    icon: <FaUserTie size={28} />,
    title: "HR",
    heading: "Build a stronger team and manage employee data like a boss.",
    points: [
      "Track work time to introduce discipline without pressure",
      "Manage all HR documents and employee profiles in one place",
      "Set up company structure and manage access permissions",
      "Post memos and company-wide announcements",
    ],
    image: "/assets/img/bitrix24/hr.png",
  },
  {
    key: "solutions",
    icon: <FaCog size={28} />,
    title: "See all solutions",
    heading: "Explore everything Bitrix24 offers your team.",
    points: [
      "CRM, project management, HR tools, and more.",
      "All-in-one collaboration platform.",
      "Boost productivity across departments.",
      "Integrated mobile and desktop apps.",
    ],
    image: "/assets/img/bitrix24/solutions.png",
  },
];

const TeamDepartmentSection = () => {
  const [activeTab, setActiveTab] = useState("project");
  const currentTab = tabData.find((tab) => tab.key === activeTab);

  return (
    <section className="team-department-section py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4">
          Bitrix24 has something for every team and department
        </h2>

        <div className="d-flex flex-wrap justify-content-center gap-4 overflow-auto py-2">
          {tabData.map((tab) => (
            <div
              key={tab.key}
              className={`tab-item text-center px-3 py-2 ${
                activeTab === tab.key ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
              style={{
                cursor: "pointer",
                minWidth: 120,
                borderBottom:
                  activeTab === tab.key ? "3px solid #0d6efd" : "none",
              }}
            >
              <div className="text-primary mb-1">{tab.icon}</div>
              <div className="fw-medium">{tab.title}</div>
            </div>
          ))}
        </div>

        <Row className="align-items-center mt-4 g-4">
          <Col md={6}>
            <h4 className="fw-bold mb-3">{currentTab.heading}</h4>
            <ul className="list-unstyled">
              {currentTab.points.map((point, idx) => (
                <li key={idx} className="mb-2 d-flex align-items-start">
                  <FaBullhorn className="me-2 text-primary mt-1" />
                  {point}
                </li>
              ))}
            </ul>
            <Button variant="success" className="mt-3">
              Try This Solution
            </Button>
          </Col>
          <Col md={6}>
            <img
              src={currentTab.image}
              alt={currentTab.title}
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamDepartmentSection;
