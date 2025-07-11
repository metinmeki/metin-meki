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
  return (
    <div className="mt-5">
      <Container>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <div>
                <img
                  src={EnglishforIT1}
                  alt="English for IT Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="text-center mt-2">English for IT</p>
              </div>
            </Col>

            <Col md={4}>
              <div>
                <img
                  src={iq}
                  alt="Intro to Data Science Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="text-center mt-2">Intro to Data Science</p>
              </div>
            </Col>

            <Col md={4}>
              <div>
                <img
                  src={modernAI}
                  alt="Intro to Modern AI Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="text-center mt-2">Intro to Modern AI</p>
              </div>
            </Col>

            <Col md={4}>
              <div>
                <img
                  src={mlExplainability}
                  alt="Machine Learning Explainability Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="text-center mt-2">ML Explainability (Kaggle)</p>
              </div>
            </Col>

            <Col md={4}>
              <div>
                <img
                  src={introProgramming}
                  alt="Intro to Programming Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="text-center mt-2">Intro to Programming (Kaggle)</p>
              </div>
            </Col>

            <Col md={4}>
              <div>
                <img
                  src={introML}
                  alt="Intro to Machine Learning Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="text-center mt-2">Intro to Machine Learning (Kaggle)</p>
              </div>
            </Col>

            <Col md={4}>
              <div>
                <img
                  src={gameDevJS}
                  alt="Game Development with JS Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="text-center mt-2">Game Dev with JS</p>
              </div>
            </Col>

            <Col md={4}>
              <div>
                <img
                  src={hpLifee}
                  alt="HP Life Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="text-center mt-2">HP Life</p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img
                  src={pythonCert}
                  alt="Python Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
                <p className="text-center mt-2">Python Certificate</p>
              </div>
            </Col>
            </Row>
        </Fade>
      </Container>
    </div>
  );
}
