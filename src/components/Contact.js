import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          <Fade bottom cascade>
            Contact.
          </Fade>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <h1>
              Let’s create your next<br></br>
              <span className="amazing-color">experience together</span>
            </h1>
            <a href={`mailto:${data.contactEmail}`} className="email">
              {data.contactEmail}
            </a>
            <ul className="social__container">
              {data.social.map((link, index) => (
                <li className="social__icons" key={index}>
                  <a target="_blank" rel="noopener noreferrer" href={link.url}>
                    {link.icon === null ? (
                      <i className={`fas fa-file-pdf fa-3x`}></i>
                    ) : (
                      <i className={`fab fa-${link.icon} fa-3x`}></i>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        {/* <span className="footer">
          Made With ❤ by <a href="http://chetanverma.com/">Chetan Verma</a>
        </span> */}
      </div>
    );
  }
}

export default Contact;
