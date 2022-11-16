import { useState, useEffect } from "react";

export default function GetAccess() {
  const [emailInput, setEmailInput] = useState({ email: "" });
  const [emailError, setEmailError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
    <section className="access-section">
      <div className="access-container">
        <div>
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler} autoComplete="off">
            <input
              type="text"
              name="email"
              placeholder="email@example.com"
              value={emailInput.email}
              onChange={changeHandler}
            />
            <button>Get Started For Free</button>
          </form>
          {emailError.email && <p className="error">{emailError.email}</p>}
        </div>
      </div>
    </section>
  );
}
