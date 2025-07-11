import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../../Particle";
import Zoom from "react-reveal/Zoom";
import Certification from "../../components/certificatee/Certificate";

// 🟢 Import the local PDF file from src/assets
import pdf from "../../assets/MetinMeki.pdf";

// 🟢 Setup the PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              width="100%"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
              </Zoom>
            </div>

            <div className="certificate-section" id="about">
              {/* 🟢 Download button (forces download) */}
              <div className="d-flex justify-content-center mt-4">
                <a href={pdf} download="MetinMeki_Resume.pdf">
                  <Button variant="primary">
                    <AiOutlineDownload />
                    &nbsp;Download Resume
                  </Button>
                </a>
              </div>

              {/* 🟢 PDF Viewer */}
              <div className="resume d-flex justify-content-center mt-3">
                <Document
                  file={pdf}
                  onLoadError={(error) => console.error("Error loading PDF:", error)}
                  onSourceError={(error) => console.error("Source error:", error)}
                >
                  <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.4} />
                </Document>
              </div>

              {/* 🟢 Another download button at the bottom */}
              <div className="d-flex justify-content-center mt-3">
                <a href={pdf} download="MetinMeki_Resume.pdf">
                  <Button variant="primary">
                    <AiOutlineDownload />
                    &nbsp;Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
