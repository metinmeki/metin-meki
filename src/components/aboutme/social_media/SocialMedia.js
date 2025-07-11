import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillYoutube,   // <-- Added YouTube icon import
} from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with Me – Metin Meki</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={2}>
            <a
              href="https://www.instagram.com/metin_amedi?igsh=N3lncThuaGN4MjB3&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiOutlineInstagram />
              </Zoom>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://github.com/metinmeki"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.linkedin.com/in/metin-amedi-2b6b74326/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>

          {/* YouTube Column */}
          <Col md={2}>
            <a
              href="https://www.youtube.com/@metinmeki"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillYoutube />
              </Zoom>
            </a>
          </Col>

          <Col md={2}>
            <a
              href="mailto:metinmeki99@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiOutlineMail />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
