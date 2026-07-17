import { useState, useEffect, useRef } from "react";
import "./AviationHero.css";

export default function AviationHero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const [activeCity, setActiveCity] = useState("Ibiza");

  const destinations = {
    Barcelona: "/Barcelona.png",
    Ibiza: "/Ibiza.png",
    Cannes: "/Cannes.png",
    Paris: "/Paris.png",
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const progress = Math.min(Math.max(scrollY / vh, 0), 1);
  const planeScale = 1.1 + progress * 0.75;
  const textOpacity = Math.max(1 - progress * 2, 0);

  const scrollUp = () =>
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  const scrollDown = () =>
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });

  return (
    <>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="nav-btn" aria-label="Book flight">
            <img src="/bxs_plane.png" alt="" />
          </button>
          <button className="nav-btn" aria-label="Menu">
            <svg viewBox="0 0 24 24">
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          </button>
        </div>
      </nav>

      <section className="hero" ref={heroRef}>
        <div className="hero-sticky">
          <h1 className="hero-title" style={{ opacity: textOpacity }}>
            Wind
          </h1>

          <p className="hero-tagline" style={{ opacity: textOpacity }}>
            Aviation
            <br />
            Tailored To You
          </p>

          <div
            className="plane-wrap"
            style={{ transform: `translateX(-50%) scale(${planeScale})` }}
          >
            <img src="/plane.png" alt="Wind private jet front view" />
          </div>

          <div className="scroll-indicator" onClick={scrollDown}>
            <img src="/Group 7.png" alt="Previous" className="s2-arrow-btn" />
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="s2-plane">
          <img src="/Plane2x.png" alt="Wind private jet" />
        </div>
        <div className="s2-text">
          <p className="s2-headline">
            We believe that in a world where passengers have become numbers, a
            personal approach is key to ensure you get the most out of your
            flying experience.
          </p>
          <div className="s2-dots">
            <div className="s2-dot active" />
            <div className="s2-dot" />
          </div>
        </div>
        <div className="s2-arrows">
          <img
            src="/Group 7.png"
            alt="Scroll up"
            className="s2-arrow-btn"
            onClick={scrollDown}
          />
          <img
            src="/Group 6.png"
            alt="Scroll down"
            className="s2-arrow-btn"
            onClick={scrollUp}
          />
        </div>
      </section>

      <section className="section-three">
        <div className="s3-left">
          <div className="s3-left-top">
            <h2 className="s3-heading">
              Flexible
              <br />
              Services
            </h2>
          </div>
          <div className="s3-left-bottom">
            <p className="s3-subtext">
              Smart solutions for all your
              <br />
              charter requirements
            </p>
            <button className="s3-cta">All Solutions</button>
          </div>
        </div>

        <div className="s3-imagewrap">
          <img
            src="/image 9.png"
            alt="Wind jet over ocean"
            className="s3-full-img"
          />
          <div className="s3-right-overlay" />
          <div className="s3-nav-btns">
            <img
              src="/Group 7.png"
              alt="Scroll up"
              className="inline-arrow-btn"
              onClick={scrollDown}
            />
            <img
              src="/Group 6.png"
              alt="Scroll down"
              className="inline-arrow-btn"
              onClick={scrollUp}
            />
          </div>
        </div>
      </section>

      <section className="section-four">
        <h2 className="s4-heading">Popular Destinations</h2>

        <div className="s4-imagewrap">
          <img
            src={destinations[activeCity]}
            alt={activeCity}
            className="s4-img"
          />
        </div>

        <div className="s4-footer">
          <div className="s4-tabs">
            {Object.keys(destinations).map((city) => (
              <button
                key={city}
                className={`s4-tab ${activeCity === city ? "active" : ""}`}
                onClick={() => setActiveCity(city)}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="s4-nav-btns">
            <img
              src="/Group 7.png"
              alt="Scroll up"
              className="inline-arrow-btn"
              onClick={scrollDown}
            />
            <img
              src="/Group 6.png"
              alt="Scroll down"
              className="inline-arrow-btn"
              onClick={scrollUp}
            />
          </div>
        </div>
      </section>

      <section className="section-five">
        <div className="s5-imagewrap">
          <img src="/image 10.png" alt="Flight Manager" className="s5-img" />
        </div>

        <div className="s5-content">
          <h2 className="s5-heading">Flight Manager</h2>
          <p className="s5-text">
            Lorem ipsum dolor sit amet. Ut accusantium eaque et velit tempore
            qui voluptatem temporibus qui expedita dignissimos ab optio
            molestiae. Et obcaecati blanditiis ut officiis reiciendis aut dolore
            dolores aut minima beatae in itaque quas et consequuntur sunt id
            minima quos. Est sequi odit aut enim omnis qui laborem deleniti ut
            harum distinctio.
          </p>

          <div className="s5-nav-btns">
            <img
              src="/Group 7.png"
              alt="Scroll up"
              className="inline-arrow-btn"
              onClick={scrollDown}
            />
            <img
              src="/Group 6.png"
              alt="Scroll down"
              className="inline-arrow-btn"
              onClick={scrollUp}
            />
          </div>
        </div>
      </section>

      <section className="section-six">
        <p className="s6-eyebrow">What are you waiting for?</p>

        <div className="s6-hover-zone">
          <div className="s6-title-row">
            <h2 className="s6-title">Book a flight</h2>
          </div>
          <div className="s6-plane-track">
            <img
              src="/Frame 8.png"
              alt=""
              className="s6-plane s6-plane-start"
            />
            <img
              src="/Framelong.png"
              alt=""
              className="s6-plane s6-plane-end"
            />
          </div>
        </div>

        <div className="s6-nav-btns">
          <img
            src="/Group 7.png"
            alt="Scroll up"
            className="inline-arrow-btn"
            onClick={scrollDown}
          />
          <img
            src="/Group 6.png"
            alt="Scroll down"
            className="inline-arrow-btn"
            onClick={scrollUp}
          />
        </div>
      </section>
    </>
  );
}
