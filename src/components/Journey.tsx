
import Section from "./Section";
import "../styles/journey.css";

const education = [
  {
    date: "Sep 2025 – Jun 2026",
    title: "BSc (Hons) Computer Science",
    subtitle: "University of Bedfordshire, UK",
    description: "First Class Honours",
  },
  {
    date: "Dec 2019 – Aug 2025",
    title: "Higher Diploma in Information Technology",
    subtitle: "SLIIT City University, Colombo, Sri Lanka",
  },
  {
    date: "Jan 2017 – Aug 2019",
    title: "GCE Advanced Level – Physical Science",
    subtitle: "Richmond College, Galle",
  },
];

const experience = [
  {
    date: "Aug 2025 – Feb 2026",
    title: "Associate – Production",
    subtitle: "Innodata Lanka (Pvt) Ltd",
    points: [
      "Managed large-scale data-processing tasks, processing and validating 200+ records daily with 99% quality, achieving 100% of production targets, and earning recognition twice as the project's top-performing team member.",
    ],
  },
  {
    date: "Dec 2019 – Aug 2023",
    title: "Associate (Data Processing)",
    subtitle: "OREL IT (Pvt) Ltd",
    points: [
      "Processed, categorized, and validated data across 10+ client projects, consistently achieving 100% of production targets over 3 years and 8 months while collaborating with a 10-member team to ensure accuracy and timely delivery.",
    ],
  },
];

function JourneyColumn({
  title,
  items,
}: {
  title: string;
  items: typeof education | typeof experience;
}) {
  return (
    <div className="journey__column">
      <h3 className="journey__column-title">{title}</h3>

      <div className="journey__timeline">
        {items.map((item, index) => (
          <article className="journey__card" key={`${item.title}-${index}`}>
            <div className="journey__card-heading">
              <h4 className="journey__card-title">{item.title}</h4>
              <span className="journey__date">{item.date}</span>
            </div>
            <p className="journey__institution">{item.subtitle}</p>

            {"description" in item && item.description && (
              <p className="journey__description">{item.description}</p>
            )}

            {"points" in item && (
              <ul className="journey__points">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <Section
      id="journey"
      labelledBy="journey-title"
      className="journey"
    >
      <div className="journey__intro">
        <p className="journey__eyebrow">BACKGROUND</p>
        <h2 id="journey-title" className="journey__title">
          My Journey
        </h2>
      </div>

      <div className="journey__grid">
        <JourneyColumn title="Education" items={education} />
        <JourneyColumn title="Experience" items={experience} />
      </div>
    </Section>
  );
}
