import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [newsLetter, setNewsLetter] = useState("");

  const emailType = (event) => {
    setNewsLetter(event.target.value);
  };

  const clearMessage = () => {
    alert(`Dear ${newsLetter}, You Are Now Subscribed To Our NewsLetter!`);
    setNewsLetter("");
  };

  return (
    <div>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">Contact Us</h5>
              <p className="small text-muted">
                Art Gallery Of Dreams - Find Abstract Authentic Cubic Art. To
                Visit The Complete Gallery, Visit{" "}
                <a href="https://www.deviantart.com/abhideepghosh">
                  {" "}
                  Our Deviant Art Page
                </a>
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a className="text-primary" href="/">
                  Dreamer's Lane
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Get started</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Get started</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-muted">
                A newsletter is a printed or electronic report containing news
                concerning the activities of a business or an organization that
                is sent to its members, customers, employees or other
                subscribers.
              </p>
              <form action="/">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    value={newsLetter}
                    onChange={emailType}
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                    onClick={clearMessage}
                  >
                    &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
