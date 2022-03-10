import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedin, faFacebook, faTiktok, faInstagram, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faLinkedin, faInstagram, faFacebook, faYoutube, faTiktok);


function HorzNav() {
  return (
    <div className="horzNav">
    <FontAwesomeIcon className="navIcon" icon="fa-brands fa-youtube" size="2x" />
    <FontAwesomeIcon className="navIcon" icon="fa-brands fa-instagram" size="2x"/>
    <FontAwesomeIcon className="navIcon" icon="fa-brands fa-facebook" size="2x"/>
    <FontAwesomeIcon className="navIcon" icon="fa-brands fa-linkedin" size="2x"/>
    <FontAwesomeIcon className="navIcon" icon="fa-brands fa-tiktok" size="2x"/>
  </div>
  )
}

export default HorzNav