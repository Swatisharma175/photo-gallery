import React, { useState } from "react";
import "./FormControl.css";

function FormControl() {
  const [emailAddress, setEmailAddress] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Your Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
        <button type="button" class="btn btn-dark">
          &#128508; Send Message &#128508;
        </button>
      </div>
    </div>
  );
}

export default FormControl;
