import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import CodeIcon from '@mui/icons-material/Code';
import Flip from "react-reveal/Flip";
import { FaPython } from "react-icons/fa";

function ProjectJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">Educational Journey</Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">Experience Journey</Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">Technical Journey</Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">Project Journey</Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Project Journey</h1>
        </Flip>
      </div>

      <VerticalTimeline>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<HtmlIcon />}
        >
          <h3 className="vertical-timeline-element-title">AA - Online Shopping Website</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">Diabetes ML Project</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">Lumber Spine Classification</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">Personal Portfolio</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CssIcon />}
        >
          <h3 className="vertical-timeline-element-title">Point Of Sale System For Hypermarket</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">Thermal Human Detection Using Drone</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">Heart Disease Prediction</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          date="2024"
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<HtmlIcon />}
        >
          <h3 className="vertical-timeline-element-title">Online Library Management System</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          date="2021"
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">AI Virtual Keyboard Using Hand Gestures</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          date="2024"
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title">Handwritten Digit Recognition with Voice Feedback</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          date="2025"
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">Enhanced Aquatic Safety: Integrating AI and Drone Technology</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaPython />}
        >
          <h3 className="vertical-timeline-element-title">Brain Tumor Classification Using Machine Learning</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          date="2022"
          icon={<StarIcon />}
        />

      </VerticalTimeline>
    </div>
  );
}

export default ProjectJourney;
