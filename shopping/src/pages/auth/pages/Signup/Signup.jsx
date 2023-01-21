import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Signup.css";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const nameRegex = /^[A-Za-z ]{2,30}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameRegex.test(name)) {
      setNameError(
        "Invalid name, only alphabets and spaces are allowed, min 2 max 30 characters"
      );
      return;
    }
    setNameError("");
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    }
    setEmailError("");
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Invalid password, it should contain at least one letter and one number, min 8 characters"
      );
      return;
    }
    setPasswordError("");

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    navigate("/auth/login");
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p>{nameError}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p>{emailError}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p>{passwordError}</p>}
        </div>
        <button type="submit">Register</button>

        <br />
        <h6>already registered? click login</h6>
        <Link to="/auth/login"> Login</Link>
        <br />
      </form>
    </div>
  );
};

export default Signup;
