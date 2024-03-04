import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    message: "",
    showMessage: false,
    messageClass: "",
    nameError: "",
    emailError: "",
    titleError: "",
    descriptionError: "",
    buttonText: "Submit",
  });
  const {
    name,
    email,
    title,
    description,
    showMessage,
    message,
    messageClass,
    nameError,
    emailError,
    titleError,
    descriptionError,
    buttonText,
  } = formData;

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setFormData((formData) => ({ ...formData, name: newName }));
    if (newName) setFormData((formData) => ({ ...formData, nameError: "" }));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setFormData((formData) => ({ ...formData, email: newEmail }));
    if (newEmail && validateEmail(newEmail))
      setFormData((formData) => ({ ...formData, emailError: "" }));
    else if (!newEmail)
      setFormData((formData) => ({ ...formData, emailError: "" }));
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setFormData((formData) => ({ ...formData, title: newTitle }));
    if (newTitle) setFormData((formData) => ({ ...formData, titleError: "" }));
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setFormData((formData) => ({ ...formData, description: newDescription }));
    if (newDescription)
      setFormData((formData) => ({ ...formData, descriptionError: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    setFormData((formData) => ({
      ...formData,
      nameError: "",
      emailError: "",
      titleError: "",
      descriptionError: "",
    }));

    if (!name) {
      setFormData((formData) => ({
        ...formData,
        nameError: "Name is required",
      }));
      isValid = false;
    }
    if (!email) {
      setFormData((formData) => ({
        ...formData,
        emailError: "Email is required",
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormData((formData) => ({
        ...formData,
        emailError: "Email is invalid",
      }));
      isValid = false;
    }
    if (!title) {
      setFormData((formData) => ({
        ...formData,
        titleError: "Title is required",
      }));
      isValid = false;
    }
    if (!description) {
      setFormData((formData) => ({
        ...formData,
        descriptionError: "Description is required",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    setFormData((formData) => ({ ...formData, buttonText: "Submitting..." }));
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
          setFormData((formData) => ({
            ...formData,
            message: response.data.data.message,
            messageClass: "success",
            showMessage: true,
            name: "",
            email: "",
            title: "",
            description: "",
            buttonText: "Submit",
          }));
        } else {
          setFormData((formData) => ({
            ...formData,
            message: response.data.data.message,
            messageClass: "warning",
            showMessage: true,
            buttonText: "Submit",
          }));
        }
      })
      .catch((error) => {
        setFormData((formData) => ({
          ...formData,
          message: "An error occurred, please try again later.",
          messageClass: "warning",
          showMessage: true,
          buttonText: "Submit",
        }));
      });
  };

  return (
    <>
      <section className="tips--section">
        <div className="container">
          <h2 className="contact--title">Submit your own Hidden Gem</h2>
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
                <a
                  href="#"
                  onClick={handleSubmit}
                  style={{ marginTop: "20px" }}
                >
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
