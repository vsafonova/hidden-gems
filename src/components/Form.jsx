import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [buttonText, setButtonText] = useState("Submit");

  // Validation Functions
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    if (newName) setNameError("");
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail && validateEmail(newEmail)) setEmailError("");
    else if (!newEmail) setEmailError("");
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (newTitle) setTitleError("");
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    if (newDescription) setDescriptionError("");
  };

  const validateForm = () => {
    let isValid = true;
    setNameError("");
    setEmailError("");
    setTitleError("");
    setDescriptionError("");

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }
    if (!title) {
      setTitleError("Title is required");
      isValid = false;
    }
    if (!description) {
      setDescriptionError("Description is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    setButtonText("Submitting...");
    // Handle form submission logic here
    axios
      .post("https://arashbesharat.com/wp-json/hiddengems/api/v1/submit", {
        name,
        email,
        title,
        description,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.data.success == "true") {
          setMessage(response.data.data.message);
          setMessageClass("success");
          setShowMessage(true);
          setName("");
          setEmail("");
          setTitle("");
          setDescription("");
          setButtonText("Submit");
        } else {
          setMessage(response.data.data.message);
          setMessageClass("warning");
          setShowMessage(true);
          setButtonText("Submit");
        }
      })
      .catch((error) => {
        setMessage("An error occurred, please try again later.");
        setMessageClass("warning");
        setShowMessage(true);
        setButtonText("Submit");
      });
  };

  return (
    <>
      <section className="tips--section">
        <div className="container">
          <h1 className="contact--title">Submit your own Hidden Gem</h1>
          <div className="email--text">
            {showMessage && (
              <div className={`message ${messageClass}`}>{message}</div>
            )}
            <form>
              <div className="form-group">
                <input
                  id="name"
                  type="text"
                  className="form-field"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                />
                {nameError && <div className="field-error">{nameError}</div>}
              </div>
              <div className="form-group">
                <input
                  id="email"
                  type="email"
                  className="form-field"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <div className="field-error">{emailError}</div>}
              </div>
              <div className="form-group">
                <input
                  id="title"
                  type="text"
                  className="form-field"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={handleTitleChange}
                />
                {titleError && <div className="field-error">{titleError}</div>}
              </div>
              <div className="form-group">
                <textarea
                  className="form-field"
                  placeholder="Description"
                  rows="5"
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleDescriptionChange}
                ></textarea>
                {descriptionError && (
                  <div className="field-error">{descriptionError}</div>
                )}
              </div>
              <div className="send--button">
                <a href="#" onClick={handleSubmit} style={{marginTop: '20px'}}>
                  {buttonText}
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
