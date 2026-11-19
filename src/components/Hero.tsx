// src/components/Hero.tsx
import { useEffect, useState } from "react";
import { education, profile } from "../data/portfolio";
import TechMarquee from "./TechMarquee";


// Build "TR" from the owner's name so the temporary monogram never goes stale.
const initials = profile.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part.charAt(0).toUpperCase())
  .join("");

function TypingRole() {
  const roles = [
    "Full-Stack Engineer",
    "Java Application Developer",
    "AI & ML Innovator",
    "Software Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const delay = deleting ? 45 : text === currentRole ? 1400 : 90;

    const timer = window.setTimeout(() => {
      if (!deleting && text === currentRole) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else if (deleting) {
        setText(currentRole.slice(0, text.length - 1));
      } else {
        setText(currentRole.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <p className="hero__role" aria-label={roles[roleIndex]}>
      <span className="hero__role-text" aria-hidden="true">
        {text || "\u00A0"}
      </span>
      <span className="hero__typing-cursor" aria-hidden="true" />
    </p>
  );
}

export default function Hero() {
  const [primaryEducation] = education;
  const portrait = profile.heroPortrait;
  const cvPath = profile.cvPath;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      
      <div className="hero__inner">
        <div className="hero__content">
          

          <h1 id="hero-heading" className="hero__name">
            {profile.name}
          </h1>

          <TypingRole />

          <p className="hero__tagline">{profile.tagline}</p>

          {primaryEducation && (
            <p className="hero__credential">
              <span className="hero__credential-badge">
                {primaryEducation.classification}
              </span>
              <span className="hero__credential-text">
                {primaryEducation.degree}, {primaryEducation.institution}
              </span>
            </p>
          )}

          <div className="hero__actions">
            <a className="hero__cta hero__cta--primarybtn" href="#projects">
              View My Work
            </a>

            {/* Hidden completely until a real CV path is set in portfolio.ts */}
            {cvPath && (
              <a
                className="hero__cta hero__cta--primarybtn"
                href={cvPath}
                download
              >
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="hero__visual" aria-hidden={portrait ? undefined : true}>
          <div className="hero__frame">
            
            
        
        
        <svg
        className="hero__multi-frame"
        viewBox="0 0 500 600"
        preserveAspectRatio="none"
        aria-hidden="true"
        >

          
        <defs>
          <clipPath id="frame-inner-clip">
            <rect x="14" y="14" width="444" height="544" rx="30" />
          </clipPath>

          <filter id="frame-inner-blur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <rect
          className="frame-inner-glow"
          x="12"
          y="12"
          width="450"
          height="554"
          rx="5"
          transform="translate(-1 -3)"
        />

        <rect
            className="frame-blue"
            x="0"
            y="18"
            width="466"
            height="541"
            rx="38"
        />

        {/* <rect
            className="frame-burnt-orange"
            x="10"
            y="8"
            width="455"
            height="563"
            rx="36"
        /> */}

        <rect
            className="frame-orange"
            x="6"
            y="12"
            width="454"
            height="554"
            rx="33"
        />
        


        
        
        <g className="frame-embers" aria-hidden="true">
          <circle className="frame-ember ember-1" cx="28" cy="75" r="2.4" />
          <circle className="frame-ember ember-2" cx="82" cy="8" r="2" />
          <circle className="frame-ember ember-3" cx="210" cy="7" r="2.2" />
          <circle className="frame-ember ember-4" cx="390" cy="9" r="2.5" />
          <circle className="frame-ember ember-5" cx="463" cy="38" r="2" />
          <circle className="frame-ember ember-6" cx="477" cy="175" r="2.4" />
          <circle className="frame-ember ember-7" cx="476" cy="390" r="2" />
          <circle className="frame-ember ember-8" cx="440" cy="567" r="2.5" />
          <circle className="frame-ember ember-9" cx="300" cy="578" r="1.9" />
          <circle className="frame-ember ember-10" cx="120" cy="574" r="2.2" />
          <circle className="frame-ember ember-11" cx="9" cy="450" r="2.3" />
          <circle className="frame-ember ember-12" cx="8" cy="260" r="1.9" />
        </g>



        

        
        </svg>




            {portrait ? (
              <img
                className="hero__image"
                src={portrait.src}
                alt={portrait.alt}
                decoding="async"
              />
            ) : (
              // TEMPORARY: replace by setting `heroPortrait` in portfolio.ts
              <span className="hero__monogram">{initials}</span>
            )}
          </div>
        </div>
      </div>
      
      <TechMarquee />

      {/* <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </div> */}
    </section>
  );
}