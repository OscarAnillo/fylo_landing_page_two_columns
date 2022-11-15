export default function HeroComponent() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div>
          <img src="images/illustration-1.svg" alt="" />
        </div>
        <div>
          <h1 className="hero-title">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="hero-text">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <form>
            <input type="text" placeholder="Enter your email..." />
            <button>Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
}
