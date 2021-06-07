import React from 'react';
import "../navbar/Navbar.css";
import "../formfield/FormField.css";
import "../coolbutton/CoolButton.css";
import "../components/Signup.css";
import Navbar from '../navbar/Navbar.js';
import FormField from '../formfield/FormField.js';
import CoolButton from '../coolbutton/CoolButton.js';

function Signup() {
    return (
      <>
        <Navbar />
        <div className="signup">
          <h1>Sign up!</h1>
          <form>
              <FormField inputId="firstName" label="Name" type="text" placeholder="e.g Alex Smith"/>
              <FormField inputId="email" label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
              <FormField inputId="password" label="Password" type="password" placeholder="ssfssfss11223"/>
              <CoolButton className="btn_success" btnText="Submit">
                  <FormField type="submit" />
              </CoolButton>
          </form>
        </div>
      </>
    );
}

export default Signup