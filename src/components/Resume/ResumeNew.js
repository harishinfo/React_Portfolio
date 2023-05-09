import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="github">View CV IN GITHUB</h1>
          <Button
            variant="primary"
            href="https://github.com/harishinfo/React-Portfolio/blob/gh-pages/HARISH'S%20Resume%20(1).pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

 

        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
        <ScrollToTop />
      </Container>
    </div>
  );
}

export default ResumeNew;
