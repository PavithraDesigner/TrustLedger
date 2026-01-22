import React, { useState } from "react";
import Webcam from "react-webcam";
import "./LoginPage.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.cpassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration successful!");
    console.log(formData);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>📝 Register</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          placeholder="Confirm password"
          value={formData.cpassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      <div className="webcam-container">
        <h3>Webcam Preview</h3>
        <Webcam
          audio={false}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      </div>
    </div>
  );
};

export default Register;

