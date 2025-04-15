// App.js
import React, { useState } from "react";
import "./Form.scss";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    Phone: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [hoverMessage, setHoverMessage] = useState("");
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMouseEnter = () => {
    setHoverMessage("Make sure all thing is correct!");
  };

  const handleMouseLeave = () => {
    setHoverMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setSuccessMessage("");
    } else {
      setErrorMessage("");
      setSuccessMessage("Registration Successful!");
    }
    console.log("Form Submitted :", formData);
  };

  const handleScroll = () => {
    console.log("you scroll the gender section");
  };

  const handleInput = (e) => {
    console.log(`${e.target.name} input event start`);
  };

  const handleKeyPress = (e) => {
    console.log(`Key pressed: ${e.key}`);
  };

  const handleKeyDown = (e) => {
    console.log(`Key down: ${e.key}`);
  };

  const handleKeyUp = (e) => {
    console.log(`Key released: ${e.key}`);
  };

  return (
    <div
      className="form-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>User Registration</h2>
      {hoverMessage && <p className="hover-message">{hoverMessage}</p>}

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onInput={handleInput}
            onKeyPress={handleKeyPress}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onPaste={() => alert("Please enter manually.")}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            onFocus={handleScroll}
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="Transgender">Transgender</option>
            <option value="Non-binary">Non-binary</option>
            <option value="other">Other</option>
          </select>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button
          type="submit"
          className="submit-button"
          onClick={() => console.log("Form Submitted!")}
        >
          Register
        </button>

        <button
          type="button"
          className="reset-button"
          onClick={() => {
            setFormData({
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
              gender: "",
              dob: "",
              phone: "",
            });
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
