
import { profile } from "../data/portfolio";
import Section from "./Section";

const coreSkills = [
  { name: "Web Development", width: "90%" },
  { name: "Backend Development", width: "85%" },
  { name: "Mobile Application Development", width: "75%" },
  { name: "Database Management", width: "80%" },
  { name: "Machine Learning & Computer Vision Systems", width: "70%" },
];

export default function About() {
  return (
    <Section
      id="about"
      labelledBy="about-heading"
      className="about"
    >
      <div className="about__layout">
        <div className="about__intro about__slide-left">
          <p className="section__eyebrow">A LITTLE ABOUT ME</p>

          <h2 id="about-heading" className="about__heading">
            {profile.aboutHeading}
          </h2>

          <p className="about__text">
            I am a Computer Science graduate with First Class Honours from the University of Bedfordshire, through SLIIT City Uni. Passionate about building reliable, practical software solutions, I combine technical knowledge with creative thinking to turn ideas into functional applications. I am committed to writing clean, maintainable code and continuously expanding my technical knowledge by exploring new technologies.
          </p>

        </div>

        <aside
          className="about__skills about__slide-right"
          aria-label="Core development areas"
        >
          <p className="about__skills-eyebrow">WHAT I WORK WITH</p>

          <h3 className="about__skills-heading">
            Core Development Areas
          </h3>

          <p className="about__skills-description">
          
          </p>

          <div className="about__skill-list">
          {coreSkills.map((skill) => (
            <div className="about__skill" key={skill.name}>
              <div className="about__skill-header">
                <span>{skill.name}</span>

                <div className="about__skill-meta">
                  <span className="about__skill-percentage">
                    {skill.width}
                  </span>
                </div>
              </div>

              <div className="about__skill-track" aria-hidden="true">
                <span
                  className="about__skill-fill"
                  style={
                    { "--skill-width": skill.width } as React.CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>
        </aside>
      </div>
    </Section>
  );
}
