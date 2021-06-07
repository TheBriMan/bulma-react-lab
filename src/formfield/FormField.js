import React from 'react';
import "./FormField.css";

function FormField(props) {
    return (
      <div className='field'>
        <label forHtml={props.inputId} className='label'>{props.label}</label>
        <input type={props.type} id={props.inputId} name={props.inputId} placeholder={props.placeholder} /><br></br>
      </div>
    );
  };

  export default FormField