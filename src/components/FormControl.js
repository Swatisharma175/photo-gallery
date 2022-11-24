import React, { useState } from "react";
import "./FormControl.css";

function FormControl() {
  const [emailAddress, setEmailAddress] = useState("");
  const [text, setText] = useState("");

  const messageTyper = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };

  const emailTyper = (event) => {
    setEmailAddress(event.target.value);
    console.log(event.target.value);
  };

  const clearMessage = () => {
    setEmailAddress("");
    setText("");
    alert("Mail Sent!");
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={emailAddress}
          onChange={emailTyper}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Your Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          rows="10"
          onChange={messageTyper}
        ></textarea>
        <h6>Preview Of Mail</h6>
        <br />
        <p>Email: {emailAddress}</p>
        <p>Message: {text}</p>
        <button type="button" className="btn btn-dark" onClick={clearMessage}>
          &#128508; Send Message &#128508;
        </button>
      </div>
    </div>
  );
}

export default FormControl;
