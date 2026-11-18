# BUILD-PLAN.md
## Tharaka Rusiru — Software Developer Portfolio

**Status:** Creative brief prepared for review. Do not begin full implementation until the owner approves this plan.  
**Project type:** Personal software developer portfolio  
**Primary goal:** Support software engineering and full-stack internship applications  
**Technology:** React, TypeScript, Vite, custom CSS  
**Budget constraint:** Prefer free tools, free hosting tiers, and assets the owner already has. No Hostinger requirement and no AI-generated cinematic video.

---

## 1. Website Overview

Build a premium, responsive portfolio that presents Tharaka Rusiru as a Computer Science graduate and software developer who can turn ideas into reliable software solutions. The site should help recruiters quickly understand the owner's background, technical capabilities, projects, and how to make contact.

The visual reference is the selected **Cinematic + Minimal** concept: a dramatic dark hero, a restrained reddish-orange accent, a contrasting warm off-white About section, polished project cards, and a strong closing contact section.

This is a real website, not a static image mockup. Navigation, project links, CV download, and video playback must work.

## 2. Core Positioning

**Primary positioning statement:**

> I turn ideas into reliable software solutions through clean code, creative thinking, and problem-solving.

**Audience:** Recruiters, hiring managers, software engineering teams, and internship coordinators.

**Primary conversion goal:** Encourage relevant recruiters to review the projects, download the CV, and get in touch.

**Secondary goals:**
- Make the owner's GitHub repositories easy to find.
- Explain the technical contribution and purpose of each featured project.
- Present education and technical skills clearly.
- Demonstrate frontend skills through the portfolio's own implementation.

Do not claim employment, client results, awards, or achievements that have not been verified.

## 3. Brand Personality

- Technical and capable
- Curious and continuously learning
- Thoughtful problem-solver
- Modern and creative without looking gimmicky
- Confident, clear, and approachable

Avoid excessive buzzwords, fake metrics, generic AI-generated claims, and overly corporate copy.

## 4. Visual Direction

### Selected direction
**Cinematic + Minimal**, with a charcoal/black foundation, warm off-white content panels, and reddish-orange highlights.

### Palette
Use CSS variables so the design can be tuned consistently:
- Deep background: near-black charcoal
- Surface: dark charcoal
- Light section: warm off-white
- Main text on dark: soft white
- Main text on light: deep charcoal
- Accent: reddish-orange, used selectively for buttons, links, active states, and small highlights
- Secondary text: muted grey

Confirm exact hex values during implementation and check contrast for accessibility. Avoid pink accents.

### Composition
- Strong visual hierarchy and oversized but readable typography.
- Generous whitespace and deliberate spacing.
- Thin borders, restrained glows, subtle grain only if it remains lightweight.
- Project cards with real project imagery, clear technology tags, and concise descriptions.
- Consistent corner radii and hover states.
- No unnecessary decorative clutter.

## 5. Personal Photography and Media

The owner has chosen **Option A: real photographs**.

- Use the owner's real photograph in the hero section.
- Use a second real photograph in the About section if supplied; otherwise reuse the first photograph with a different crop or use a non-personal visual.
- Do not fabricate or alter the owner's identity.
- Use image sizing, responsive crops, and overlays for readability.
- Optimize images before deployment and provide meaningful alt text.

The owner also has an existing introduction video for the SafeStep Smart Headband machine-learning project.

**Do not generate AI cinematic videos.** Integrate the existing video inside the SafeStep project detail/feature area once the owner supplies the file. Inspect its format, duration, aspect ratio, and file size before choosing the final presentation.

Video requirements:
- Native HTML video element with controls.
- Responsive 16:9 or source-matching aspect ratio.
- Poster image when a suitable still is available.
- `preload="metadata"` or similarly conservative loading.
- Provide a clear accessible label and fallback text.
- Store media in an appropriate public assets directory and use relative paths.
- Do not autoplay with sound.
- If the video is hosted externally instead, use an owner-approved source and an accessible embed; do not assume a URL.

## 6. Website Structure

Recommended one-page structure:
1. Navigation
2. Hero
3. Achievement/highlight strip
4. About
5. Featured projects
6. Technical skills
7. Education
8. Contact call-to-action
9. Footer

A project detail route or modal can be considered if it materially improves project storytelling, but keep the initial implementation focused and easy to maintain.

## 7. Hero Section

Purpose: Communicate who the owner is, the kind of work he does, and the next action within a few seconds.

Content:
- Small role label such as “SOFTWARE DEVELOPER”
- Large name: “Tharaka Rusiru”
- Positioning statement: “I turn ideas into reliable software solutions through clean code, creative thinking, and problem-solving.”
- Primary CTA: “View My Work” scrolls to projects.
- Secondary CTA: “Download CV” downloads the supplied CV PDF.
- Owner's real portrait, subject to the image being supplied.
- Subtle scroll cue.

Do not create fake job titles or claim seniority. Ensure the hero remains readable on small screens and when images fail to load.

## 8. Animated Stats / Highlight Strip

Use only accurate, supportable highlights. Candidate items:
- First Class Honours
- Featured projects (count only projects actually presented)
- Technologies (count only after the final skills list is confirmed)
- Continuous learning, or another truthful non-numeric label

Avoid fabricated client counts, years of professional experience, downloads, or user numbers. Animations should be subtle and respect `prefers-reduced-motion`.

## 9. Mission / About Section

Suggested heading: **“Passionate About Building Solutions”**

Draft direction:
“Computer Science graduate with First Class Honours from the University of Bedfordshire. Interested in building practical software that solves real-world problems, with a focus on thoughtful engineering, continuous learning, and useful user experiences.”

The final copy should remain truthful and can be refined when the CV and final project details are available. Use a warm off-white background as a deliberate visual break from the dark sections.

## 10. Three Pillars

Organize the owner's story around three useful themes:
1. **Problem-solving** — understanding the problem before choosing a solution.
2. **Building useful software** — turning requirements into working applications.
3. **Continuous learning** — expanding skills through hands-on projects and iteration.

These are presentation themes, not claims of formal credentials. Keep each description short and concrete.

## 11. Story Section

Present the owner's Computer Science background and practical project experience in a concise, chronological or narrative format.

Include the University of Bedfordshire degree and First Class Honours. Verify dates and any additional education details against the current CV before publishing. Do not invent employment history.

## 12. Featured Projects

Show real work before decorative elements. Each project should include:
- Project name
- One- or two-sentence purpose
- The owner's actual contribution, when known
- Technology tags based on actual use
- Real screenshot, photograph, or video thumbnail
- Repository link if available
- Live demo link only if it exists and works
- Optional “View details” interaction for deeper explanation

### SafeStep Smart Headband
Known technical context includes Raspberry Pi, Python, OpenCV, real-time object detection, YOLOv8/NCNN, and SSD MobileNet. The project is an assistive wearable concept with voice feedback.

Embed the owner's existing project introduction video in this project section. Use verified metrics only and explain their meaning clearly. Previously reported project evaluation values may be used only after the owner confirms that they accurately describe the final version.

### Hotel Management System
Known technologies: Java, Swing, MySQL, JDBC. Describe relevant modules only after verifying them against the project and CV.

### ShipShape Maritime Service Management System
Known as a Java Swing application. Add further technologies or feature claims only when confirmed.

### Jewel Crush
Known technologies: JavaScript, Firebase Authentication, and Firestore. Use a real game screenshot if available.

### SuperLand E-Commerce Website
Known technologies: PHP and MySQL. Use a real screenshot if available.

Use a responsive card layout: three columns on large screens where appropriate, two on medium screens, and one on small screens. Ensure card controls and links are keyboard accessible.

## 13. Technical Skills

Group skills by category rather than displaying an unstructured wall of logos.

Candidate categories:
- Programming languages
- Frontend development
- Backend development
- Databases and services
- Developer tools

Use the current CV and project evidence to determine the final list. Clearly distinguish skills used in completed projects from technologies currently being learned. Do not imply professional proficiency without evidence.

## 14. Education

Feature the BSc (Hons) Computer Science from the University of Bedfordshire and First Class Honours. Verify the dates and exact official qualification wording against the owner's CV before publication.

Additional education can be added if relevant and confirmed.

## 15. Final CTA and Contact

Suggested heading: **“Let's Build Something Meaningful”** or **“Let's Work Together.”**

Support the primary goal of internship and software engineering opportunities. Provide:
- Email link using the owner's confirmed public contact email
- GitHub link
- LinkedIn link
- Optional location at city/country level if the owner wants it displayed
- A clear contact button

Do not invent email addresses, profile URLs, or a working backend form. If no backend is configured, use a `mailto:` action or another clearly explained contact method.

## 16. Footer

Include the owner's name, concise role descriptor, navigation links, and social links. A dynamic current year is acceptable. Keep the footer visually simple and consistent with the design.

## 17. Complete Visual Style Guide

- Deep charcoal and near-black sections balanced with warm off-white.
- Reddish-orange accent used sparingly.
- Oversized display typography paired with highly readable body text.
- Consistent spacing scale and alignment.
- Real photography and actual project media prioritized over stock visuals.
- Subtle borders and gradients; no excessive neon or pink.
- Clear focus states, legible contrast, and predictable interactive behavior.

Use a small number of font families and load them efficiently. Choose suitable system fallbacks.

## 18. Animation Direction

Prefer purposeful, lightweight motion:
- Gentle reveal as sections enter the viewport
- Small hover and focus transitions on project cards and buttons
- Smooth anchor navigation
- Subtle hero image treatment
- Optional staggered project-card reveals

Do not make essential content depend on animation. Respect `prefers-reduced-motion`. Avoid scroll-jacking and excessive parallax. A library such as GSAP should be added only if the desired effect cannot be achieved cleanly with CSS and the Intersection Observer API.

## 19. Interaction Design

All visible controls must work:
- Navigation links scroll to the right sections.
- “View My Work” scrolls to projects.
- CV button downloads the real PDF supplied by the owner.
- Project links lead to verified destinations.
- SafeStep video supports normal playback and keyboard controls.
- Email and social links use verified destinations.
- Mobile navigation can be opened and closed accessibly.

Avoid decorative buttons that do nothing. Use clear hover, active, focus, and disabled states where appropriate.

## 20. Scroll Behavior

- Use native scrolling with smooth anchor navigation where supported.
- Keep scroll effects subtle and performant.
- Do not trap the user in forced scroll sequences.
- Ensure sticky navigation does not obscure section headings.
- Disable or simplify nonessential motion when reduced motion is requested.

## 21. Mobile Behavior

- Responsive layout from small phones to large desktop displays.
- Stack hero content logically on mobile and keep CTAs easy to tap.
- Crop the portrait intentionally without hiding the face.
- Project cards become a single-column list on narrow screens.
- Video uses the available width without overflowing.
- Navigation supports keyboard and touch.
- No horizontal overflow, tiny body text, or hover-only functionality.

## 22. Technical Implementation

### Stack
- React
- TypeScript
- Vite
- Custom CSS and CSS variables
- Git and GitHub
- Free static hosting tier such as Vercel, subject to its current terms and limits

### Proposed file structure
```text
tharaka-portfolio/
├── public/
│   ├── images/
│   ├── videos/
│   ├── Tharaka_Rusiru_CV.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── animations.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Adjust the structure if a simpler arrangement improves maintainability.

### Quality requirements
- Reusable typed components and centralized project data.
- Semantic HTML and accessible names.
- Keyboard-accessible navigation and interactions.
- Responsive images and sensible media loading.
- `npm run build` must pass before deployment.
- Check for console errors, broken links, missing assets, and layout overflow.
- Use environment variables only if a future integration truly needs secrets; never commit secrets.
- Do not add a backend unless a real requirement arises.
- Include a useful README with setup and deployment instructions.

### Free deployment
Connect the repository to a free hosting tier such as Vercel. Confirm current limits and terms before deployment. Use the Vite build command `npm run build` and output directory `dist`. Keep the repository and deployment configuration independent of Hostinger.

## 23. Content and Asset Checklist

Needed before final polish:
- [ ] Real portrait photograph for hero
- [ ] Optional second portrait for About section
- [ ] Existing SafeStep introduction video
- [ ] CV PDF
- [ ] GitHub profile and repository URLs
- [ ] LinkedIn profile URL
- [ ] Public contact email
- [ ] Actual project screenshots, where available
- [ ] Verification of project metrics and dates before publication

Do not block the initial scaffold while waiting for every asset. Use clearly named placeholders during development and replace them before launch.

## 24. Implementation Workflow and Approval Gate

1. Review and approve this creative brief.
2. Collect the portrait, CV, SafeStep video, and verified links when available.
3. Scaffold the Vite React + TypeScript project.
4. Build the layout and responsive visual system.
5. Add verified project content and real assets.
6. Implement interactions and motion.
7. Test accessibility, mobile layout, media playback, links, and production build.
8. Review the finished site before deployment.
9. Deploy to the chosen free host after approval.

**Approval required:** Do not start the full build until the owner approves this `BUILD-PLAN.md`. Deployment must also be reviewed and approved before publishing.

## 25. Asset Update — Materials Supplied

The owner has supplied four project poster images:
- `Poster-Headband.png` — SafeStep Smart Headband
- `Poster-HotelManagementSystem.png` — Hotel Management System / Kingfisher Beach Resort
- `Poster-JewelCrush.png` — Jewel Crush
- `Poster-Superland.png` — SuperLand Store e-commerce website

Use these supplied files as the initial project-card artwork. Before launch, optimize copies for the web (responsive dimensions and modern image formats where practical) while preserving the originals. The poster images are design artwork; do not imply that every interface or visual shown in a poster is a literal application screenshot unless verified. Add real screenshots when available.

No ShipShape cover image has been supplied yet. Build its card with a consistent placeholder/typographic treatment or a restrained maritime graphic, and replace it with genuine project imagery if the owner supplies it.

The owner has also supplied a screenshot showing a video file with these displayed properties: MP4, approximately 72.2 MB, 42 seconds. This is currently evidence of the video properties, not the actual video file. Request the actual MP4 before integrating and testing playback. A 72.2 MB video can be slow to load on mobile connections, so create an optimized web copy (for example, H.264 MP4 at a suitable resolution/bitrate) after inspecting the original. Keep playback user-initiated, use a poster, and avoid preloading the entire video. Do not discard the original.

The owner has chosen to use real photographs for the portfolio hero and About sections, but has not supplied a personal portrait yet. Request the portrait when ready; use a clearly identified temporary placeholder until then.
