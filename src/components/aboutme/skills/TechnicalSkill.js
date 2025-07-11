import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

const skills = {
  languages: [
    { label: 'C#', percent: 85, color: '#54faae' },
    { label: 'Python', percent: 90, color: '#39c4ff' },
    { label: 'JavaScript', percent: 81, color: '#f1f965' },
    { label: 'PHP', percent: 85, color: '#fe3e57' },
    { label: 'Java', percent: 85, color: '#54faae' },
    { label: 'MySQL', percent: 88, color: '#ff0173' },
  ],
  frameworksAndLibraries: [
    { label: '.NET', percent: 84, color: '#512bd4' },  // Added .NET framework
    { label: 'React JS', percent: 86, color: '#41f2ff' },
    { label: 'Flask', percent: 85, color: '#54faae' },
    { label: 'Django', percent: 84, color: '#092e20' },
    { label: 'Bootstrap', percent: 87, color: '#7952b3' },
    { label: 'jQuery', percent: 80, color: '#0769ad' },
    { label: 'Express.js', percent: 83, color: '#303030' },
    { label: 'TensorFlow', percent: 82, color: '#ff6f00' },
    { label: 'Keras', percent: 80, color: '#d00000' },
  ],
 runtimeAndTools: [
  { label: 'NodeJS', percent: 86, color: '#ff8c2f' },
  { label: 'Docker', percent: 78, color: '#0db7ed' },
  { label: 'Git', percent: 90, color: '#f1502f' },
  { label: 'VS Code', percent: 92, color: '#007acc' },
  { label: 'Postman', percent: 84, color: '#ff6c37' },
  { label: 'Spyder', percent: 80, color: '#1dc832' },         // Green for Spyder
  { label: 'Visual Studio', percent: 88, color: '#5c2d91' }, // Purple for Visual Studio
  { label: 'PyCharm', percent: 85, color: '#830340' },       // Black for PyCharm
]
};

export default function TechnicalSkill() {
  const renderSkillSection = (title, skillArray) => (
    <>
      <h2 className="mt-5 mb-3 text-center">{title}</h2>
      <Row className="g-5">
        {skillArray.map((skill, index) => (
          <Col md={4} key={index}>
            <h1 style={{ fontSize: "100px", color: skill.color, fontWeight: 700 }}>
              {skill.percent}%
            </h1>
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.percent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${skill.percent}%`, backgroundColor: skill.color }}
                />
              </div>
              <h2
                style={{
                  color: skill.color,
                  fontSize: "25px",
                  marginTop: "13px",
                  fontWeight: 700,
                }}
              >
                {skill.label}
              </h2>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
        <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
      </div>

      <Tada>
        <h1 className="mt-4 text-center">Technical Skills – Metin Meki</h1>
      </Tada>

      <Container className="mt-5">
        {renderSkillSection(" Programming Languages", skills.languages)}
        {renderSkillSection(" Frameworks & Libraries", skills.frameworksAndLibraries)}
        {renderSkillSection(" Runtime Environments / Tools", skills.runtimeAndTools)}
      </Container>
    </div>
  );
}
