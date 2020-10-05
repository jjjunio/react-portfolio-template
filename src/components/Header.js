import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className="heading-background">CREATIVE</h1>
        <header>
          <h1 className="heading__name">
            <Fade bottom cascade>
              {data.name}
            </Fade>
          </h1>
        </header>
        <Fade bottom>
          <p className="header-title">
            <span>{data.headerTagline[0]}</span>
            <span className="wave">{data.headerTagline[1]}</span>
            <br></br>
            {data.headerTagline[2]}
            <br></br>
            {data.headerTagline[3]}
            <br></br>
            {data.headerTagline[4]}
            <br></br>
            <button>
              <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">
                Contact
              </a>
            </button>
          </p>
        </Fade>
      </div>
    );
  }
}

export default Header;
