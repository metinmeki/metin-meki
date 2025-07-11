import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>

      <div className="mt-5">
        <Flip top cascade>
          <h1>Professional Experience</h1>
        </Flip>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2023 – Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">Freelance Software Developer</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">Remote | Global Clients</h6>
          <ul>
            <li>Built and deployed AI-powered applications (e.g., brain tumor classification with Grad-CAM).</li>
            <li>Designed responsive, full-stack web apps using React, Node.js, and Firebase.</li>
            <li>Contributed to open-source and published educational content on GitHub and YouTube.</li>
            <li>Focused on clean UI, performance, and accessibility across devices.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2022 – 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">Academic Research Assistant</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">Nawroz University · Department of Computer Science</h6>
          <ul>
            <li>Supported faculty in research on deep learning and real-time AI applications.</li>
            <li>Helped design course material for machine learning and programming fundamentals.</li>
            <li>Conducted workshops and tutorials for junior students on OpenCV, Python, and data preprocessing.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 – Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">Open Source & Kaggle Contributor</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">GitHub · Kaggle · YouTube</h6>
          <ul>
            <li>Active in data science competitions and model improvement tasks on Kaggle.</li>
            <li>Published React-based AI projects (e.g., handwriting recognition with voice feedback).</li>
            <li>Created and shared coding tutorials with deep explanations for beginners.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
