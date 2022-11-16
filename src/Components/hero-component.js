import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroComponent() {
  const tl = gsap.timeline();
  const imageHeroRef = useRef(null);
  const titleHeroRef = useRef(null);
  const textHeroRef = useRef(null);
  const inputHeroRef = useRef(null);
  const buttonHeroRef = useRef(null);

  useEffect(() => {
    tl.from("#one-hero", { opacity: 0, y: 40, duration: 0.5 });
    tl.to("#one-hero", { opacity: 1, y: 0, duration: 0.5 });
    tl.fromTo(
      ".hero-title",
      {
        opacity: 0,
        y: -40,
        duration: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
    tl.fromTo(
      ".hero-text",
      {
        opacity: 0,
        y: -40,
        duration: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
    tl.fromTo(
      ".input",
      {
        opacity: 0,
        x: -40,
        duration: 0.5,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      }
    );
    tl.fromTo(
      ".button",
      {
        opacity: 0,
        x: 40,
        duration: 0.5,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      }
    );
  }, [tl]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div>
          <img
            src="images/illustration-1.svg"
            alt=""
            id="one-hero"
            ref={imageHeroRef}
          />
        </div>
        <div>
          <h1 className="hero-title" ref={titleHeroRef}>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="hero-text" ref={textHeroRef}>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <form>
            <input
              type="text"
              placeholder="Enter your email..."
              ref={inputHeroRef}
              className="input"
            />
            <button ref={buttonHeroRef} className="button">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
