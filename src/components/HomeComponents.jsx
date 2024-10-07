import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import domainVideo from "./../assets/images/domain.mp4";

export const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <div className="texts">
          <div className="bg-texts">
            <h2>Insight</h2>
            <h2>Innovation</h2>
            <h2>Vision</h2>
          </div>
          <div className="main-text">
            <h2>Setting up your business as easy as</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const DomainName = () => {
  return (
    <div className="section domain-name">
      <Container>
        <Row>
          <Col sm={4}>
            <div className="step-cards">
              <div className="card">
                <span className="step">Step 1</span>
                <div className="inner-text">
                  <span className="in-step">Step 3:</span>
                  <h5>Earn coins and website</h5>
                </div>
              </div>
              <div className="card">
                <span className="step">Step 2</span>
                <div className="inner-text">
                  <span className="in-step">Step 3:</span>
                  <h5>Earn coins and website</h5>
                </div>
              </div>
              <div className="card active">
                <span className="step">Step 3</span>
                <div className="inner-text">
                  <span className="in-step">Step 3:</span>
                  <h5>Earn coins and website</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={5}>
            <div className="domain-video">
              <video src={domainVideo} muted loop autoPlay></video>
            </div>
          </Col>
          <Col sm={3}>
            <div className="text-card">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </Col>
          <Col sm={12}>
            <div className="numbers">
              <span className="num">1</span>
              <span className="num">2</span>
              <span className="num">3</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const ExpertyBuild = () => {
  return (
    <div className="section experty-build">
      <Container fluid className="px-0">
        <div className="cta-heading">
          <h4>Expertly Build Website</h4>
        </div>
        <div className="cta-heading">
          <h4>Build by experts</h4>
        </div>
        <div className="cta-heading">
          <h4>Delivered within 24hrs</h4>
        </div>
      </Container>
    </div>
  );
};

export const ReadyToExplore = () => {
  return (
    <div className="section ready-to-explore">
      <Container>
        <h2 className="heading">
          Ready to Explore? Our Latest <br /> Innovations
        </h2>
      </Container>
    </div>
  );
};

export const Mission = () =>{
  return(
    <div className="section mission">
      <div className="content">
        <div className="container text-center">
          <h2>Your Success is Our Mission</h2>
          <a href="#!" className="button">Get Started</a>
        </div>
      </div>
      <div className="back-text">
        <h2>
          INCIPERE
          </h2>
      </div>
    </div>
  )
}