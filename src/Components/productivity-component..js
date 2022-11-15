import Testimonial from "./testimonial";

export default function ProductivityComponent() {
  return (
    <div className="productivity-bg">
      <div className="productivity-container">
        <div>
          <img src="images/illustration-2.svg" alt="" className="logo-2" />
        </div>
        <div>
          <h1 className="productivity-title">
            Stay productive, wherever you are
          </h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your life storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachment required!
          </p>
          <button>
            See how Fylo works
            <img src="images/icon-arrow.svg" alt="" />
          </button>
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
