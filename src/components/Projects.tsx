import Section from "./Section";
import { projects } from "../data/portfolio";
import "../styles/projects.css";
import { useState } from "react";
import { createPortal } from "react-dom";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 4h6v6M20 4l-9 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    label: string;
  } | null>(null);

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Web", "Backend", "Desktop", "Mobile", "AI & ML"];
  const [isSafeStepVideoOpen, setIsSafeStepVideoOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);

  const projectCategories: Record<string, string[]> = {
  safestep: ["AI & ML"],
  "hotel-management": ["Desktop", "Backend"],
  shipshape: ["Desktop"],
  "jewel-crush": ["Web", "Backend"],
  superland: ["Web", "Backend"],
  "food-order-app": ["Mobile"],
};

const safeStepProject = projects.find(
  (project) => project.id === "safestep"
);

  return (
    <>
    <Section id="projects" labelledBy="projects-heading" className="projects">
      <div className="projects__header">
        <div>
          <p className="projects__eyebrow">SELECTED WORK</p>
          <h2 id="projects-heading" className="projects__heading">
            Projects and Systems
          </h2>
        </div>
        
      <div className="projects__filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`projects__filter-button ${
              activeFilter === filter ? "is-active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
        </button>
        ))}
      </div>
        
      </div>
      

      <div
        key={activeFilter}
        className="projects__grid projects__grid--filtering"
      >
        {projects
          .filter(
          (project) =>
          activeFilter === "All" ||
          projectCategories[project.id]?.includes(activeFilter)
          )
          .map((project, index)=> {
          const primaryUrl = project.liveUrl ?? project.repoUrl;

          return (
            <article className="project-card" key={project.id}>
              <div className="project-card__image">
                {project.image ? (
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    loading="lazy"
                  />
                ) : (
                  <div className="project-card__placeholder">
                    <span>PROJECT {String(index + 1).padStart(2, "0")}</span>
                    <strong>{project.title}</strong>
                  </div>
                )}

                <div className="project-card__image-overlay" />

                <div className="project-card__tags">
                 
                  <span className="project-card__category">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>

                <p className="project-card__description">
                  {project.description}
                </p>

                <div
                  className="project-card__technologies"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((technology) => (
                    <span className="project-card__technology" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-card__footer">
                  {primaryUrl ? (
                    <a
                      className="project-card__view-link"
                      href={primaryUrl}
                      target="_blank"
                      rel="noreferrer"
                    >View Project<span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-card__coming-soon">
                      Links coming soon
                    </span>
                  )}
                  {project.video && (
                        <button
                          type="button"
                          className="project-card__video-button"
                          onClick={() =>
                            setActiveVideo({
                              src: project.video!.src,
                              label: project.video!.label,
                            })
                          }
                        >
                          <span style={{ fontSize: "0.75em", position: "relative", top: "-1px", }} aria-hidden="true">▶ </span>Watch Demo
                        </button>
                  )}

                  <div className="project-card__actions">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        title="GitHub"
                      >
                        <GithubIcon />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        title="Live demo"
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

    


      <div className="research-showcase">

        {/* =====================================================
            ROW 1: FULL-WIDTH PROJECT INTRODUCTION
            Project label, title, description and centered image
        ===================================================== */}
        <div className="research-showcase__intro">

          <p className="research-showcase__eyebrow">
            FINAL YEAR RESEARCH PROJECT
          </p>

          <h3 className="research-showcase__title">
            {safeStepProject?.title ?? "SafeStep Smart Headband"}
          </h3>

          <div
            className={`research-showcase__description ${
              isDescriptionExpanded ? "is-expanded" : "is-collapsed"
            }`}
          >
            <p>
              An ML-driven IoT assistive system developed to support visually
              impaired individuals in understanding their surroundings and
              navigating more confidently through real-time object detection
              and intelligent voice-based guidance. The system employs a
              hybrid object detection approach by integrating two machine
              learning models. SSD MobileNet, using its knowledge from the
              COCO dataset, identifies common everyday objects, while the
              YOLOv8 model detects navigation-specific objects, including
              doors and stairs. By combining these two machine learning
              models, SafeStep provides a more comprehensive understanding
              of the user's surroundings.
            </p>

            <button
              type="button"
              className="research-showcase__read-more"
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              aria-expanded={isDescriptionExpanded}
            >
              {isDescriptionExpanded ? "Read less" : "Read more..."}
            </button>

            <p>
              The system further analyses detected object positions and
              estimated proximity to identify potential obstacles and determine
              appropriate movement directions. These insights are converted
              into context-aware spoken instructions and timely alerts, which
              are delivered directly to the user through Bluetooth earphones.
              Built around a Raspberry Pi board, the system combines machine
              learning and computer vision in a wearable assistive prototype
              to enhance environmental awareness and independent mobility.
            </p>
          </div>

          {/* Centered project prototype image */}
          <div className="research-showcase__image">
            <img
              src="/images/safestep-headband.png"
              alt="SafeStep Smart Headband prototype"
              loading="lazy"
            />
          </div>

        </div>


        {/* =====================================================
            ROW 2: TWO-COLUMN RESEARCH DETAILS
            Left: Research points and GitHub repository
            Right: Capabilities, model result and technology stack
        ===================================================== */}
                
        {/* =====================================================
            ROW 2: TWO-COLUMN RESEARCH SHOWCASE
            Left: Research Contributions
            Right: Technical Implementation
        ===================================================== */}

        <div className="research-showcase__details">

          {/* -----------------------------------------------------
              LEFT COLUMN: RESEARCH CONTRIBUTIONS
          ----------------------------------------------------- */}
          <div className="research-showcase__left">

            <h4 className="research-showcase__section-title">
              Research Contributions
            </h4>

            <div className="research-showcase__research-points">

              {/* Hybrid Detection */}
              <article className="research-showcase__research-point">
                <span className="research-showcase__capability-icon">◎</span>
                <div>
                  <h4>Hybrid Detection Architecture</h4>
                  <p>
                    Integration of SSD MobileNet and custom YOLOv8 into
                    a unified detection pipeline.
                  </p>
                </div>
              </article>

              {/* Context-Aware Guidance */}
              <article className="research-showcase__research-point">
                <span className="research-showcase__capability-icon">
                  ⌖
                </span>
                <div>
                  <h4>Context-Aware Decision Making</h4>
                  <p>
                    Object-position and proximity analysis to determine
                    appropriate movement directions.
                  </p>
                </div>
              </article>

              {/* Accessible Interaction */}
              <article className="research-showcase__research-point">
                <span className="research-showcase__capability-icon">♫</span>
                <div>
                  <h4>Accessible Audio Feedback</h4>
                  <p>
                    Prioritised voice alerts delivered through
                    Bluetooth-connected earphones.
                  </p>
                </div>
              </article>

            </div>

            

          </div>


          {/* -----------------------------------------------------
              RIGHT COLUMN: TECHNICAL IMPLEMENTATION
          ----------------------------------------------------- */}
          <div className="research-showcase__right">

            <h4 className="research-showcase__section-title">
              Technical Implementation
            </h4>

            {/* Hardware */}
            <div className="research-showcase__technologies">
              <h5 className="research-showcase__technology-heading">
                Hardware
              </h5>

              <div className="research-showcase__technology-list">
                {[
                  "● Raspberry Pi 4 Model B (8GB)",
                  "● Camera Module",
                ].map((technology) => (
                  <span className="research-showcase__technology" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Machine Learning and Computer Vision */}
            <div className="research-showcase__technologies">
              <h5 className="research-showcase__technology-heading">
                Machine Learning & Computer Vision
              </h5>

              <div className="research-showcase__technology-list">
                {[
                  "● SSD MobileNet",
                  "● YOLOv8",
                  "● OpenCV",
                  "● NCNN",
                ].map((technology) => (
                  <span className="research-showcase__technology" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Software and Audio */}
            <div className="research-showcase__technologies">
              <h5 className="research-showcase__technology-heading">
                Software & Audio
              </h5>

              <div className="research-showcase__technology-list">
                {[
                  "● Python",
                  "● Picamera2",
                  "● eSpeak NG",
                ].map((technology) => (
                  <span className="research-showcase__technology" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Research project actions */}
            {/* Research project actions */}
            <div className="research-showcase__actions">

              {/* GitHub Repository Button */}
              {safeStepProject?.repoUrl && (
                <a
                  className="research-showcase__action-button"
                  href={safeStepProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              {/* Watch Project Video Button */}
              {safeStepProject?.video && (
                <button
                  type="button"
                  className="research-showcase__action-button"
                  onClick={() => setIsSafeStepVideoOpen(true)}
                >
                  <span
                    style={{
                      fontSize: "0.75em",
                      position: "relative",
                      top: "-1px"
                    }}
                    aria-hidden="true"
                  >
                    ▶
                  </span>
                  Demo Video
                </button>
              )}

            </div>

          </div>

        </div>


      </div>

    </Section>

    {/* SafeStep Research Video Modal: rendered in document.body via portal */}
    {isSafeStepVideoOpen && safeStepProject?.video &&
      createPortal(
        <div
          className="research-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={safeStepProject.video.label}
          onClick={() => setIsSafeStepVideoOpen(false)}
        >
          <div
            className="research-video-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="research-video-modal__close"
              onClick={() => setIsSafeStepVideoOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>

            <video
              src={safeStepProject.video.src}
              controls
              autoPlay
              playsInline
              className="research-video-modal__player"
            >
              Your browser does not support embedded video.
            </video>

            <p className="project-video-modal__label">
              {safeStepProject.video.label}
            </p>
          </div>
        </div>,
        document.body
      )}

    {/* Existing Project Card Video Modal: also rendered outside the section */}
    {activeVideo &&
      createPortal(
        <div
          className="project-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.label}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="project-video-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-video-modal__close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              ×
            </button>

            <video
              className="project-video-modal__player"
              src={activeVideo.src}
              controls
              autoPlay
              playsInline
            >
              Your browser does not support embedded video.
            </video>

            <p className="project-video-modal__label">
              {activeVideo.label}
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}