import React from 'react';
import "./CoolButton.css";

function CoolButton(props) {
   return <a href="bulma.com" className={props.className}>{props.btnText}</a>
}

export default CoolButton