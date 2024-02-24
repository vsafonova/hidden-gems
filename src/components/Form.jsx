import React from "react";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Handle form submission logic here
  };

  return (
    <>
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="contact_taital">Give us your tips about Sweden</h1>
          <div className="email_text">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Phone Number"
                  name="PhoneNumber"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="massage-bt"
                  placeholder="Message"
                  rows="5"
                  id="comment"
                  name="Message"
                ></textarea>
              </div>
              <div class="send_btn">
                <a href="#">SEND</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
