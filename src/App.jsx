import { useState } from "react";
import "./App.css";

const drinks = [
  {
    number: "01",
    name: "Velvet Latte",
    type: "THE CLASSIC",
    description: "Smooth espresso, silky milk, perfect balance.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    name: "Midnight Mocha",
    type: "THE INDULGENCE",
    description: "Rich chocolate notes and a bold coffee finish.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    name: "Golden Cold Brew",
    type: "THE REFRESHER",
    description: "Slow-steeped coffee, served chilled and smooth.",
    image:
      "https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?auto=format&fit=crop&w=900&q=85",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          VANQUISH<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#story" onClick={closeMenu}>OUR STORY</a>
          <a href="#menu" onClick={closeMenu}>THE MENU</a>
          <a href="#experience" onClick={closeMenu}>EXPERIENCE</a>
        </div>

        <a className="nav-button" href="#visit">
          FIND YOUR MOMENT ↗
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-light" />

        <div className="hero-meta">
          <span>AN INDEPENDENT CAFÉ CONCEPT</span>
          <span>HYDERABAD · INDIA</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              YOUR DAILY RITUAL, REIMAGINED
            </p>

            <h1>
              VANQUISH
              <span className="outline-text">
                COFFEE<span className="registered">®</span>
              </span>
            </h1>

            <p className="hero-description">
              Bold in character.
              <br />
              Unforgettable by nature.
            </p>

            <a className="text-link" href="#menu">
              DISCOVER YOUR NEXT FAVOURITE <span>↘</span>
            </a>
          </div>

          <div className="hero-visual">
            <img
              className="hero-photo"
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1100&q=85"
              alt="Warm cafe interior"
            />

            <div className="photo-caption">
              <span>GOOD COFFEE.</span>
              <span>GREAT MOMENTS.</span>
            </div>

            <div className="round-stamp">
              <span>BREWED WITH</span>
              <span className="stamp-star">✳</span>
              <span>INTENTION</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>TAKE A MOMENT. MAKE IT YOURS.</span>
          <a href="#story">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section className="story section-pad" id="story">
        <div className="story-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85"
            alt="Coffee being prepared on a cafe table"
            loading="lazy"
          />
          <span className="image-number">
            THE ART OF SLOWING DOWN · 01
          </span>
        </div>

        <div className="story-copy">
          <p className="section-kicker">A LITTLE MORE THAN COFFEE</p>
          <h2>
            Find your
            <br />
            <em>own rhythm.</em>
          </h2>
          <p>
            The best moments aren't rushed. They're savoured,
            one thoughtful sip at a time. Imagine a place where
            beautiful details meet the simple pleasure of really
            good coffee.
          </p>
          <a className="dark-link" href="#experience">
            THE EXPERIENCE <span>↗</span>
          </a>
        </div>
      </section>
      <section className="menu-section section-pad" id="menu">
        <div className="section-heading">
          <div>
            <p className="section-kicker">MADE FOR YOUR MOMENTS</p>
            <h2>The coffee <em>edit.</em></h2>
          </div>
          <p className="heading-note">
            Three moods.
            <br />
            One very good ritual.
          </p>
        </div>

        <div className="drink-grid">
          {drinks.map((drink) => (
            <article className="drink-card" key={drink.number}>
              <div className="drink-image">
                <img
                  src={drink.image}
                  alt={`${drink.name} concept`}
                  loading="lazy"
                />
                <span className="drink-number">{drink.number}</span>
                <span className="drink-arrow">↗</span>
              </div>

              <div className="drink-info">
                <p>{drink.type}</p>
                <h3>{drink.name}</h3>
                <span>{drink.description}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="concept-note">
          CONCEPT MENU · ITEMS AND DESCRIPTIONS ARE ILLUSTRATIVE.
        </p>
      </section>

      <section className="experience" id="experience">
        <img
          className="experience-photo"
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1800&q=85"
          alt="Coffee shop atmosphere"
          loading="lazy"
        />

        <div className="experience-overlay" />

        <div className="experience-content">
          <p className="section-kicker">
            A PAUSE IN YOUR EVERYDAY
          </p>
          <h2>
            Make room
            <br />
            for <em>something good.</em>
          </h2>
          <a href="#visit" className="light-button">
            LET'S MAKE A MOMENT ↗
          </a>
        </div>
      </section>

      <section className="visit section-pad" id="visit">
        <p className="section-kicker">
          YOUR NEXT CHAPTER STARTS HERE
        </p>
        <h2>
          Good things
          <br />
          <em>are brewing.</em>
        </h2>
        <p>
          A creative website concept imagined for Vanquish Coffee,
          Hyderabad.
        </p>
        <a href="#home" className="dark-link">
          BACK TO THE BEGINNING ↑
        </a>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#home">
          VANQUISH<span>.</span>
        </a>
        <p>
          INDEPENDENT CONCEPT · NOT THE OFFICIAL CAFÉ WEBSITE
        </p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}