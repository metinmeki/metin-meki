import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Metin Meki</b>, a passionate and dedicated <b className="purple">Computer Science</b> graduate from <b className="purple">Nawroz University</b>.
                <br />
                <br />
                I have strong experience in various programming languages like&nbsp;
                <b className="purple">C#, PHP, Python, JavaScript, HTML, and CSS</b>.
                <br />
                <br />
                I also enjoy working with frameworks and libraries such as&nbsp;
                <b className="purple">ReactJS, TensorFlow, OpenCV, Pandas, NumPy</b> and more.
                <br />
                <br />
                I'm especially interested in AI/ML, full-stack web development, and building intelligent applications using modern tools and technologies.
                <br />
                <br />
                In my free time, I love exploring new tech, building creative projects, and contributing to open-source communities.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
