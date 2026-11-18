import Section from "./Section";
import "../styles/skills.css";
import type { CSSProperties } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 82 },
      { name: "Python", level: 78 },
      { name: "PHP", level: 72 },
      { name: "C", level: 65 },
      { name: "C++", level: 65 },
    ],
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: "React.js", level: 78 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "jQuery", level: 65 },
      { name: "Bootstrap", level: 75 },
      { name: "Material UI", level: 65 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 65 },
      { name: "REST APIs", level: 75 },
      { name: "Axios", level: 60 },
      { name: "Mongoose", level: 60 },
      { name: "Spring Boot", level: 55 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 88 },
      { name: "SQLite", level: 65 },
      { name: "Firebase", level: 78 },
      { name: "Firestore", level: 75 },
      { name: "PostgreSQL", level: 55 },
    ],
  },
  {
    title: "Application Development",
    skills: [
      { name: "Java Swing", level: 90 },
      { name: "Android SDK", level: 72 },
      { name: "JDBC", level: 85 },
    ],
  },
  {
    title: "AI & Computer Vision",
    skills: [
      { name: "OpenCV", level: 85 },
      { name: "Ultralytics YOLO", level: 82 },
      { name: "SSD MobileNet", level: 78 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", level: 45 },
      { name: "EC2", level: 40 },
      { name: "PM2", level: 50 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 85 },
      { name: "NetBeans", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="skills">
      <div className="skills__intro">
        <p className="section__eyebrow">CAPABILITIES</p>
        <h2 className="skills__title">Technical Skills</h2>
      </div>

      <div className="skills__grid">
        {skillCategories.map((category, index) => (
          <article
            className="skills__card"
            key={category.title}
            style={{ "--card-index": index } as CSSProperties}
          >
            <h3 className="skills__card-title">{category.title}</h3>

            <ul className="skills__list">
              {category.skills.map((skill) => (
                <li className="skills__item" key={skill.name}>
                  <div className="skills__item-header">
                    <span className="skills__marker" aria-hidden="true">
                      ›
                    </span>
                    <span>{skill.name}</span>
                  </div>

                  <div className="skills__track" aria-hidden="true">
                    <span
                      className="skills__fill"
                      style={
                        {
                          "--skill-width": `${skill.level}%`,
                        } as CSSProperties
                      }
                    />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
