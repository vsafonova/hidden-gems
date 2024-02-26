import React, { useState, useEffect } from 'react';

const EmailSubscriptionPopup = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

   
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
    <aside className="popup-container">
      <div className="popup-content" aria-labelledby="popup-heading">
        <button className="close-button" onClick={handleClose} aria-label="Close popup">
          Close
        </button>
        <h2 id="popup-heading">Join Our Newsletter!</h2>
        <p>Welcome to our community! Stay in the loop and be the first to know about exciting updates on hidden gems of Sweden.</p>
        <form onSubmit={handleSubscribe}>
          <label htmlFor="emailInput">Email Address:</label>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your Email"
          />
          <button type="submit">Subscribe</button>
        </form>
        <p>By subscribing, you agree to receive our newsletters and acknowledge that you have read and accepted our <a href="/privacy-policy">Privacy Policy</a>.</p>
        <p>Don't worry, we hate spam as much as you do! Unsubscribe anytime.</p>
      </div>
    </aside>
  );
};

export default EmailSubscriptionPopup;
