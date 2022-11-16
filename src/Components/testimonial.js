export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <img src="images/icon-quotes.svg" alt="" className="quotes" />
        <p className="testimonial-text">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="testimonial-row">
          <div>
            <img
              src="images/avatar-testimonial.jpg"
              alt=""
              className="avatar"
            />
          </div>
          <div>
            <h3>Kyle Burton</h3>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
