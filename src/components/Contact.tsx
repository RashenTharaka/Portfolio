
import { useState, type FormEvent } from "react";
import Section from "./Section";
import { contact } from "../data/portfolio";
import "../styles/contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaeoobjy";

type IconName = "location" | "email" | "github" | "linkedin" | "instagram";

function ContactIcon({ name }: { name: IconName }) {
  const common = {
    width: 25,
    height: 25,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "location":
      return (
        <svg {...common}>
          <path
            fill="#EF4444"
            d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Z"
          />
          <circle cx="12" cy="10" r="2.7" fill="#FFFFFF" />
        </svg>
      );

    case "email":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="16" rx="3" fill="#19BFE5" />
          <path
            d="m3.5 6 8.5 7 8.5-7"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "github":
      return (
        <svg {...common}>
          <path
            fill="#FFFFFF"
            d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.1a10.8 10.8 0 0 1 5.7 0c2.2-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.2-5.1 5.5.4.4.8 1 .8 2v3.2c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <rect width="24" height="24" rx="3" fill="#0A66C2" />
          <path
            fill="#FFFFFF"
            d="M7.2 9.2H4.3V19h2.9V9.2ZM5.75 4.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM19.7 13.4c0-2.9-1.5-4.3-3.5-4.3a3 3 0 0 0-2.7 1.5V9.2h-2.9V19h2.9v-4.9c0-1.3.3-2.5 1.8-2.5s1.5 1.4 1.5 2.5V19h2.9v-5.6Z"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
        >
          <defs>
            <linearGradient
              id="instagram-gradient"
              x1="2"
              y1="22"
              x2="22"
              y2="2"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFB900" />
              <stop offset="30%" stopColor="#FF3040" />
              <stop offset="60%" stopColor="#FF00A6" />
              <stop offset="100%" stopColor="#7638FA" />
            </linearGradient>
          </defs>

          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            rx="6"
            fill="url(#instagram-gradient)"
          />

          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="4.5"
            stroke="white"
            strokeWidth="1.7"
          />

          <circle
            cx="12"
            cy="12"
            r="3.5"
            stroke="white"
            strokeWidth="1.7"
          />

          <circle
            cx="17.3"
            cy="6.8"
            r="1.1"
            fill="white"
          />
        </svg>
      );
  }
}

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("_gotcha")) return;

    if (!FORMSPREE_ENDPOINT) {
      setStatus("The contact form is not connected yet. Please email me directly.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("Thank you! Your message has been sent successfully.");
    } catch {
      setStatus("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" labelledBy="contact-title" className="contact">
      {/* Introduction across the full section */}
      <div className="contact__intro">
        <span className="contact__eyebrow">GET IN TOUCH</span>
        <h2 id="contact-title" className="contact__title">
          {contact.heading}
        </h2>
        <p className="contact__description">{contact.text}</p>
      </div>

      {/* Two-column layout below the introduction */}
      <div className="contact__grid">
        <div className="contact__form-wrapper">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Name"
                autoComplete="name"
                maxLength={100}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                aria-label="Phone"
                autoComplete="tel"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              autoComplete="email"
              maxLength={254}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              rows={6}
              minLength={10}
              maxLength={5000}
              required
            />

            <div className="contact__honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Leave this empty</label>
              <input
                id="contact-website"
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="contact__submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <span aria-hidden="true">➤</span>
            </button>

            {status && (
              <p className="contact__status" role="status" aria-live="polite">
                {status}
              </p>
            )}
          </form>
        </div>

        <div
          className="contact__info"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Address */}
          {contact.location && (
            <div className="contact__info-item">
              <div className="contact__info-icon contact__info-icon--location">
                <ContactIcon name="location" />
              </div>

              <div className="contact__info-text">
                <h3>Address</h3>
                <p>{contact.location}</p>
              </div>
            </div>
          )}

          {/* Email */}
          {contact.email && (
            <div className="contact__info-item">
              <div className="contact__info-icon contact__info-icon--email">
                <ContactIcon name="email" />
              </div>

              <div className="contact__info-text">
                <h3>Email</h3>
                <p>{contact.email}</p>
              </div>
            </div>
          )}

          
          {/* GitHub */}
          {contact.github && (
            <div className="contact__info-item">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-icon contact__info-icon--github"
                aria-label="Visit GitHub profile"
              >
                <ContactIcon name="github" />
              </a>

              <div className="contact__info-text">
                <h3>GitHub</h3>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/RashenTharaka
                </a>
              </div>
            </div>
          )}

          {/* LinkedIn */}
          <div className="contact__info-item">
            <a
              href="https://www.linkedin.com/in/rashentharaka"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-icon contact__info-icon--linkedin"
              aria-label="Visit LinkedIn profile"
            >
              <ContactIcon name="linkedin" />
            </a>

            <div className="contact__info-text">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/rashentharaka"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/rashentharaka
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
