import { useState, useEffect } from "react";

const EmailSubscriptionPopup = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    console.log(`Subscribed with email: ${email}`);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="overlay" onClick={handleClose}></div>
      <aside className="popup-container" aria-hidden={!isVisible}>
        <button
          className="popup-close"
          onClick={handleClose}
          aria-label="Close popup"
        >
          ×
        </button>
        <div className="popup-content" aria-labelledby="popup-heading">
          <h2 className="popup-heading">
            Become a member of our Hidden Gems Insider Circle
          </h2>
          <p>
            Subscribe to our newsletter for insider access and be the first to
            get the scoop!
          </p>
          <form onSubmit={handleSubscribe} className="popup-form">
            <label htmlFor="emailInput">Email Address</label>
            <input
              type="email"
              id="emailInput"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email"
            />
            <button className="popup-button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </aside>
    </>
  );
};

export default EmailSubscriptionPopup;
