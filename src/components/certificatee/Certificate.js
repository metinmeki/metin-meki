import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EnglishforIT1 from "../../images/EnglishforIT1.jpg";
import iq from "../../images/IntrotoDataScienceUpdate.jpg";
import modernAI from "../../images/IntrotoModernAI.jpg";
import mlExplainability from "../../images/machine learning explainability kaggle.jpg";
import introProgramming from "../../images/intro to programming kaggle.jpg";
import introML from "../../images/intro to machine learning kaggle.jpg";
import gameDevJS from "../../images/game development with js.jpg";
import hpLifee from "../../images/hplifee.jpg";
import teachForEveryone from "../../images/teachforeveryone.png";
import nawrozUni from "../../images/nawroz uni cer.jpg";
import pythonCert from "../../images/python.jpg"; // ✅ NEW
import Fade from "react-reveal/Fade";

export default function CertificatePage() {
  const certificates = [
    { src: pythonCert, alt: "Python Certificate" }, // ✅ NEW
    { src: EnglishforIT1, alt: "English for IT Certificate" },
    { src: iq, alt: "Intro to Data Science Certificate" },
    { src: modernAI, alt: "Intro to Modern AI Certificate" },
    { src: mlExplainability, alt: "Machine Learning Explainability - Kaggle" },
    { src: introProgramming, alt: "Intro to Programming - Kaggle" },
    { src: introML, alt: "Intro to Machine Learning - Kaggle" },
    { src: gameDevJS, alt: "Game Development with JS" },
    { src: hpLifee, alt: "HP Life Certificate" },
    { src: teachForEveryone, alt: "Teach for Everyone Certificate" },
    { src: nawrozUni, alt: "Nawroz University Certificate" },
  ];

  return (
    <div className="mt-5">
      <Container>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            {certificates.map((cert, index) => (
              <Col md={4} key={index}>
                <img
                  src={cert.src}
                  alt={cert.alt}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
