import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <div className="footer-content">
          <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
            {emoji("Made with by Umesh Garg")}
          </p>
          <p className={isDark ? "dark-mode footer-text footer-reference" : "footer-text footer-reference"}>
            Reference from developerFolio
          </p>
        </div>
      </div>
    </Fade>
  );
}
