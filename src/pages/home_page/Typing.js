import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                   "Software Engineer",
  "AI/ML Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
            }}
        />
    );
}

export default Typing;
