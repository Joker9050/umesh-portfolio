import React from "react";
import "./TechInterests.scss";
import { Fade } from "react-awesome-reveal";

function TechInterests({ interests }) {
  return (
    <Fade duration={1500}>
      <section className="tech-section" id="tech-interests">
        <h1 className="tech-title">Areas of Interest 💡</h1>
        <p className="tech-subtitle">
          Exploring backend architectures and optimizing SaaS systems for
          scalability and performance.
        </p>

        <div className="tech-grid">
          {interests.map((item, index) => (
            <div key={index} className="tech-card">
              <span className="tech-icon">{item.icon}</span>
              <p className="tech-label">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}

export default TechInterests;
