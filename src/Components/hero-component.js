import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroComponent() {
  const tl = gsap.timeline();
  const imageHeroRef = useRef(null);
  const titleHeroRef = useRef(null);
  const textHeroRef = useRef(null);
  const inputHeroRef = useRef(null);
  const buttonHeroRef = useRef(null);

  const [emailInput, setEmailInput] = useState({ email: "" });
  const [emailError, setEmailError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
      }
    );
    tl.fromTo(
      ".button",
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
      }
    );
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmailInput({ ...emailInput, [name]: value });
  };

  const validate = (value) => {
    const error = {};

    if (!value.email) {
      error.email = "An email is required";
    } else if (!emailRegex.test(value.email)) {
      error.email = "Please enter a valid email address";
    }
    return error;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (emailRegex.test(emailInput.email)) {
      alert(`We register your email as ${emailInput.email}`);
      setEmailInput({ email: "" });
    }
    setEmailError(validate(emailInput));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(emailInput).length === 0 && isSubmitted) {
      console.log("email");
    }
  }, [emailInput, isSubmitted]);

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
          <form onSubmit={submitHandler} autoComplete="off">
            <input
              type="text"
              name="email"
              placeholder="Enter your email..."
              ref={inputHeroRef}
              className="input"
              value={emailInput.email}
              onChange={changeHandler}
            />
            <button ref={buttonHeroRef} className="button">
              Get Started
            </button>
          </form>
          {emailError.email && <p className="error">{emailError.email}</p>}
        </div>
      </div>
    </section>
  );
}
