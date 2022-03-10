import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faCannabis, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faLeaf, faCannabis, faSeedling);

function VertNav() {
  return (
    <div className="vertNav">
    <FontAwesomeIcon className="navIcon" icon="fa-solid fa-seedling" size="3x" />
    <FontAwesomeIcon className="navIcon" icon="fa-solid fa-cannabis" size="3x"/>
    <FontAwesomeIcon className="navIcon" icon="fa-solid fa-leaf" size="3x"/>
  </div>
  )
}

export default VertNav