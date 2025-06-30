import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    // Inject Bitrix24 form script directly into the form container
    const script = document.createElement("script");
    script.src = "https://cdn.bitrix24.com/b21918073/crm/form/loader_1.js";
    script.async = true;
    script.setAttribute("data-b24-form", "inline/1/ytigoz");
    script.setAttribute("data-skip-moving", "true");

    const container = document.getElementById("b24form-container");
    if (container) {
      container.innerHTML = ""; // Clear any previous script/form
      container.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="banner-wrapper">
        <img
          src="/assets/img/header-banner.jpg"
          alt="Contact Banner"
          className="img-fluid w-100"
        />
      </div>

      {/* Contact Form and Info */}
      <div className="contact-section py-5">
        <Container>
          <Row>
            {/* Left: Form */}
            <Col md={7}>
              <h2 className="form-headline">Send us a message</h2>
              <div id="b24form-container" />
            </Col>

            {/* Right: Info */}
            <Col md={5} className="contact-info mt-4 mt-md-0">
              <p>
                Unique Design Consultant is one of the leading consulting
                companies in India, renowned for its products, services and
                after-sales support.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-envelope mr-2"></i>{" "}
                  info@uniquedesignconsultnt.in
                </li>
                <li>
                  <i className="fa fa-phone mr-2"></i> +91-8958847686
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Company Info Section */}
<section className="about-contact-section py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <img
          src="/assets/img/project_06.jpg"
          alt="Business Automation"
          className="img-fluid rounded"
        />
      </div>
      <div className="col-md-6">
        <p>
          <strong>Unique Design Consultant</strong> is one of the leading consulting company in India,
          renowned for its products, services and after-sales support.
        </p>
        <p>
          UDC is engaged in bringing new ways of simplifying the corporate life. Our team provides
          consultation to companies with good conduct, right business techniques and sensible rates.
          We are known as complete solution destination. We are the Consultant. We help companies to reduce
          their current running cost by implementing the latest technology which are running in the market.
        </p>
        <p>
          Our founder Mr. Deepak Kumar started Unique Design Consultant in 2021. By his continuous hard work,
          he achieved great success and today is an expert in this sector.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Contact;
