
const technologies = [
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
];

function TechItem({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <div className="tech-marquee__item">
      <i className={icon} aria-hidden="true" />
      <span>{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section
      className="tech-marquee"
    >
      

      <div className="tech-marquee__viewport">
        <div className="tech-marquee__track">
          {[0, 1].map((copy) => (
            <div
              className="tech-marquee__group"
              key={copy}
              aria-hidden={copy === 1}
            >
              {technologies.map((technology) => (
                <TechItem
                  key={technology.name}
                  {...technology}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
