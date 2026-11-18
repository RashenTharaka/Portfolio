import { useEffect, useState } from "react";
import { navItems, profile } from "../data/portfolio";

const MENU_ID = "primary-navigation";
const SCROLL_THRESHOLD = 16;
const ACTIVE_SECTION_OFFSET = 150;
const TOP_OF_PAGE_THRESHOLD = 100;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(
    () => window.scrollY > SCROLL_THRESHOLD,
  );
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.targetId))
      .filter((section): section is HTMLElement => section !== null);

    let animationFrame = 0;

    const updateNavigation = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

      if (window.scrollY < TOP_OF_PAGE_THRESHOLD) {
        setActiveSection("");
        return;
      }

      let currentSection = "";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= ACTIVE_SECTION_OFFSET) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        updateNavigation();
        animationFrame = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateNavigation);
    updateNavigation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavigation);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  const headerClass = [
    "navbar",
    isScrolled ? "navbar--scrolled" : "",
    isOpen ? "navbar--open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="navbar__inner">
        
        <a
          className="navbar__brand"
          href="#top"
          onClick={closeMenu}
          aria-label={`${profile.name}, back to top`}
        >
          <img
            src="/images/tr-logo.svg"
            alt=""
            className="navbar__logo"
          />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls={MENU_ID}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={toggleMenu}
        >
          <span className="navbar__toggle-bar" aria-hidden="true" />
          <span className="navbar__toggle-bar" aria-hidden="true" />
          <span className="navbar__toggle-bar" aria-hidden="true" />
        </button>

        <nav
          id={MENU_ID}
          className={isOpen ? "navbar__menu is-open" : "navbar__menu"}
          aria-label="Primary"
        >
          <ul className="navbar__list">
            {navItems.map((item) => {
              const isActive = activeSection === item.targetId;

              return (
                <li key={item.targetId} className="navbar__item">
                  <a
                    className={[
                      "navbar__link",
                      isActive ? "is-active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    href={`#${item.targetId}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
