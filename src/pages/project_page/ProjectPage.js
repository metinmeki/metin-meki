import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/firedetection.jpeg";
import ci from "../../images/e-commerce.png";
import hd from "../../images/Diabetes.jpg";
import pp from "../../images/handwrite digit.jpeg";
import spine from "../../images/spineclassification.png";
import handdigi from "../../images/handdigi.png";
import brain from "../../images/braintumor.jpg";
import titanic from "../../images/titanic.jpeg";
import aipark from "../../images/aiparking.jpg";
import thd from "../../images/thermalHumanDetection.jpg";
import hp from "../../images/healythplant.png";
import eyetrack from "../../images/eye tracking.jpg";
import drowing from "../../images/drowing.jpg";  // <--- New import
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>

            {/* Fire Detection */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Fire Detection</h5>
                    <img src={nyc} alt="fire detection" />
                    <div className="project--showcaseBtn">
                      
                    </div>
                  </div>
                  <p
                    className="project--desc"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                    Real-time fire detection using YOLO. Quickly alerts from live feed.
                  </p>
                  <div className="project--lang">OpenCV, TensorFlow, NumPy</div>
                </div>
              </Fade>
            </Col>

            {/* Diabetes Prediction */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Diabetes Prediction</h5>
                    <img src={hd} alt="diabetes" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://www.kaggle.com/code/metinmekiabullrahman/diabetes-prediction-random-forest-accuracy0-75"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                      >
                        <FaCode className="icon" />
                      </a>
                    </div>
                  </div>
                  <p
                    className="project--desc"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                    AI-based system to predict diabetes using machine learning models.
                  </p>
                  <div className="project--lang">Scikit-learn, Pandas, Matplotlib, Random Forest</div>
                </div>
              </Fade>
            </Col>
{/* Titanic Survival Analysis */}
<Col md={3}>
  <Fade bottom>
    <div
      className="singleProject"
      style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
    >
      <div className="projectContent">
        <h5 style={{ color: "#fbd9ad" }}>Titanic Survival Analysis</h5>
        <img src={titanic} alt="Titanic" />
        <div className="project--showcaseBtn">
          <a
            href="https://www.kaggle.com/code/metinmekiabullrahman/titanic-survival-analysis"
            target="_blank"
            rel="noreferrer"
            className="iconBtn"
          >
            <FaCode className="icon" />
          </a>
        </div>
      </div>
      <p
        className="project--desc"
        style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
      >
        Data analysis and prediction of Titanic passenger survival using ML techniques.
      </p>
      <div className="project--lang">Pandas, Seaborn, Logistic Regression, Python</div>
    </div>
  </Fade>
</Col>
      <Col md={3}>
  <Fade bottom>
    <div
      key={5}
      className="singleProject"
      style={{
        backgroundColor: "rgb(142 70 186 / 31%)",
        border: "1px solid",
      }}
    >
      <div className="projectContent">
        <h5 id={"first"} style={{ color: "#fbd9ad" }}>
          Thermal Human Detection
        </h5>
        <img src={thd} alt="Thermal Human Detection" />
        <div className="project--showcaseBtn">
         
          
        </div>
      </div>
      <h6>
        <p
          className="project--desc"
          style={{
            background: "#fbd9ad",
            color: "#b061df",
            fontWeight: 600,
          }}
        >
          This AI project detects human presence in thermal images or infrared video streams using deep learning models. It enhances security and surveillance by accurately identifying human silhouettes in low-light or complete darkness.
        </p>
      </h6>
      <div
        className="project--lang"
        style={{
          background: "#fbd9ad",
          color: "#b061df",
          fontWeight: 600,
        }}
      >
        YOLOv8, OpenCV, Python
      </div>
    </div>
  </Fade>
</Col>
<Col md={3}>
  <Fade bottom>
    <div
      key={6}
      className="singleProject"
      style={{
        backgroundColor: "rgb(142 70 186 / 31%)",
        border: "1px solid",
      }}
    >
      <div className="projectContent">
        <h5 id={"first"} style={{ color: "#fbd9ad" }}>
          Plant Health Detection
        </h5>
        <img src={hp} alt="Plant Health Detection" />
        <div className="project--showcaseBtn">
          
        </div>
      </div>
      <h6>
        <p
          className="project--desc"
          style={{
            background: "#fbd9ad",
            color: "#b061df",
            fontWeight: 600,
          }}
        >
          A smart AI system that classifies the health status of plants by analyzing images of their leaves. It helps in early disease detection and suggests potential treatments using deep learning models.
        </p>
      </h6>
      <div
        className="project--lang"
        style={{
          background: "#fbd9ad",
          color: "#b061df",
          fontWeight: 600,
        }}
      >
        YOLOV10, Keras, OpenCV, Python
      </div>
    </div>
  </Fade>
</Col>


            {/* Online Shopping */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>AA Online Shopping</h5>
                    <img src={ci} alt="ecommerce" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/metinmeki/AA_Online_Shoping"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                      >
                        <FaCode className="icon" />
                      </a>
                    </div>
                  </div>
                  <p
                    className="project--desc"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                    Full e-commerce platform with cart, chat, and admin features.
                  </p>
                  <div className="project--lang">JavaScript, HTML, CSS</div>
                </div>
              </Fade>
            </Col>
            {/* Eye Tracking AI Project */}
<Col md={3}>
  <Fade bottom>
    <div
      className="singleProject"
      style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
    >
      <div className="projectContent">
        <h5 style={{ color: "#fbd9ad" }}>Eye Tracking Mouse control AI</h5>
        <img src={eyetrack} alt="eye tracking" />
        <div className="project--showcaseBtn">
          <a
            href="https://github.com/metinmeki/Eye-Tracking-AI"
            target="_blank"
            rel="noreferrer"
            className="iconBtn"
          >
            <FaCode className="icon" />
          </a>
        </div>
      </div>
      <p
        className="project--desc"
        style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
      >
        Real-time eye tracking system using MediaPipe, OpenCV, and Python to control screen with gaze.
      </p>
      <div className="project--lang">MediaPipe, OpenCV, Python, PyAutoGUI</div>
    </div>
  </Fade>
</Col>


            {/* Handwritten Digit with Voice */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Digit Recognition (Voice)</h5>
                    <img src={pp} alt="handwritten digit" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/metinmeki/Handwritten-Digit-Recognition-With-Voice-"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                      >
                        <FaCode className="icon" />
                      </a>
                    </div>
                  </div>
                  <p
                    className="project--desc"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                    TensorFlow.js web app to recognize digits and speak result.
                  </p>
                  <div className="project--lang">Python, CNN, HTML, CSS, JS, TensorFlow.js</div>
                </div>
              </Fade>
            </Col>

            {/* Brain Tumor */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Brain Tumor Classification</h5>
                    <img src={brain} alt="brain tumor" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/metinmeki/Brain-Tumor-Classification"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                      >
                        <FaCode className="icon" />
                      </a>
                    </div>
                  </div>
                  <p
                    className="project--desc"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                    GUI app using CNN & Grad-CAM to detect brain tumors.
                  </p>
                  <div className="project--lang">TensorFlow, Tkinter, Python, CNN</div>
                </div>
              </Fade>
            </Col>

            {/* Spine Classification */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Spine Disease Classification</h5>
                    <img src={spine} alt="spine" />
                    <div className="project--showcaseBtn">
                      
                      
                    </div>
                  </div>
                  <p
                    className="project--desc"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                    Detects spine conditions using machine learning.
                  </p>
                  <div className="project--lang">
                    Scikit-learn, Pandas, Resnet50, Python, Flask Framework
                  </div>
                </div>
              </Fade>
            </Col>

            {/* Hand Digit Classifier */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Hand Digit Classifier</h5>
                    <img src={handdigi} alt="hand digit" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/metinmeki/Hand-Digit-Classifier"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                      >
                        <FaCode className="icon" />
                      </a>
                    </div>
                  </div>
                  <p
                    className="project--desc"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                    Real-time digit classification using OpenCV + CNN.
                  </p>
                  <div className="project--lang">OpenCV, Python, Keras</div>
                </div>
              </Fade>
            </Col>

            {/* AI Parking Detection */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>AI Parking Detection</h5>
                    <img src={aipark} alt="AI parking" />
                    <div className="project--showcaseBtn">
                      
                    </div>
                  </div>
                  <p
                    className="project--desc"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                    Real-time parking space detection using YOLOv8 to identify free spots from CCTV video streams with OpenCV and Python.
                  </p>
                  <div className="project--lang">YOLOv8, OpenCV, Python, Flask</div>
                </div>
              </Fade>
            </Col>

            {/* Drawing Project - NEW */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Drawing and Swimming Project</h5>
                    <img src={drowing} alt="drawing project" />
                    <div className="project--showcaseBtn">
                      
                    </div>
                  </div>
                  <p
                    className="project--desc"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                     AI system to detect if a person is drowning or swimming in real-time video.                  </p>
                  <div className="project--lang">Python , YOLOV8 , OpenCV </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
