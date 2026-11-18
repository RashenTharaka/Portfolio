
import "../styles/footer.css";


const socialLinks = [
  {
    name: "Facebook",
    url: "https://web.facebook.com/Rashen.Tharaka.99",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#0866FF" />
        <path
          fill="#FFFFFF"
          d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2h-2.8V13h2.8v8h3.4Z"
        />
      </svg>
    ),
  },
    {
    name: "Instagram",
    url: "https://www.instagram.com/___rashen___",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient
            id="footer-instagram-gradient"
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
          width="24"
          height="24"
          rx="6"
          fill="url(#footer-instagram-gradient)"
        />
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4.5"
          stroke="#FFFFFF"
          strokeWidth="1.7"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          stroke="#FFFFFF"
          strokeWidth="1.7"
          fill="none"
        />
        <circle cx="17.3" cy="6.8" r="1.1" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rashentharaka",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#0A66C2" />
        <path
          fill="#FFFFFF"
          d="M7.2 9.2H4.3V19h2.9V9.2ZM5.75 4.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM19.7 13.4c0-2.9-1.5-4.3-3.5-4.3a3 3 0 0 0-2.7 1.5V9.2h-2.9V19h2.9v-4.9c0-1.3.3-2.5 1.8-2.5s1.5 1.4 1.5 2.5V19h2.9v-5.6Z"
        />
      </svg>
    ),
  },

];


function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__socials">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name} profile`}
              className={`footer__social-link footer__social-link--${social.name.toLowerCase()}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 Tharaka Rusiru
          </p>

          <button
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
