import React from "react";
import { Container } from "react-bootstrap";

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
