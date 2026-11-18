
import { highlights } from "../data/portfolio";


export default function Highlights() {
  return (
    <section className="highlights" aria-label="Portfolio highlights">
      <div className="highlights__inner">
        {highlights.map((item) => (
          <div className="highlights__item" key={item.label}>
            <span className="highlights__value">
              {item.value !== null ? item.value : item.text}
            </span>
            <span className="highlights__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
