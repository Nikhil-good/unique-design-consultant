import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const brandLogos = [
    'Siemens-expert-partner-logo.png',
    'microsoft.webp',
    'aws-select-consulting-parnter.webp',
    'chatapp.png',
    'bitrix.png',
    'zoho.jpg'
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <>
      {/* Header Banner */}
      <div>
        <img src="/assets/img/header-banner.jpg" alt="Header Banner" style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* About Section */}
      <div className="mt-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} data-aos="fade-right">
              <h3 className="mb-3">About Unique Design Consultant</h3>
              <p><strong>Unique Design Consultant</strong> is one of the leading consulting companies in India, renowned for its products, services, and after-sales support.</p>
              <p>UDC is engaged in bringing new ways of simplifying corporate life. Our team provides consultation to companies with good conduct, right business techniques, and sensible rates. We help reduce running costs by implementing the latest technology.</p>
              <p>Our founder <strong>Mr. Deepak Kumar</strong> started Unique Design Consultant in 2021 and is now an expert in this sector.</p>
            </Col>
            <Col lg={4} data-aos="fade-left" className="mt-4 mt-lg-0 text-center">
              <Image src="/assets/img/image.jpeg" alt="About UDC" fluid rounded />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Brand Logos Carousel */}
      <div className="bg-light py-5 mt-5">
        <Container>
          <Slider {...sliderSettings}>
            {brandLogos.map((logo, idx) => (
              <div key={idx} className="text-center px-3">
                <img
                  src={`/assets/img/brands/${logo}`}
                  alt={`Brand ${idx + 1}`}
                  className="img-fluid"
                  style={{ maxHeight: '80px', margin: '0 auto', objectFit: 'contain' }}
                />
              </div>
            ))}
          </Slider>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="py-5 bg-light">
        <Container>
          <Row className="text-center g-4">
            <Col md={4} data-aos="zoom-in">
              <div style={{ backgroundColor: '#eaf6ff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img src="/assets/icons/award.svg" alt="Awards" style={{ height: 50, marginBottom: 10 }} />
                <h3 className="fw-bold text-primary">2+</h3>
                <p className="mb-0">Awards & Recognitions</p>
              </div>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-delay="100">
              <div style={{ backgroundColor: '#fff5e6', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img src="/assets/icons/location.svg" alt="Locations" style={{ height: 50, marginBottom: 10 }} />
                <h3 className="fw-bold text-warning">2+</h3>
                <p className="mb-0">Locations</p>
              </div>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-delay="200">
              <div style={{ backgroundColor: '#e6fff2', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img src="/assets/icons/users.svg" alt="Customers" style={{ height: 50, marginBottom: 10 }} />
                <h3 className="fw-bold text-success">500+</h3>
                <p className="mb-0">Customers</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: '#222' }} className="py-5 text-white text-center">
        <Container>
          <h2 className="mb-3" data-aos="fade-up">Let’s Work Together</h2>
          <p className="lead" data-aos="fade-up">
            Partner with Unique Design Consultant to transform your business with smart CRM and automation.
          </p>
          <Button variant="danger" size="lg" onClick={() => navigate('/contact')} data-aos="zoom-in">
            Contact Us
          </Button>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
