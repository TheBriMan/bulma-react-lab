import React from 'react';
import './App.css';
//import Navbar from './navbar/Navbar.js';
//import FormField from './formfield/FormField.js';
//import CoolButton from './coolbutton/CoolButton.js';
import Signup from './components/Signup.js';

const App = () => {
  return (
    /*<>
      <Navbar />
      <h1>Bulma</h1>
      <FormField inputId="firstName" label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField inputId="email" label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
      <CoolButton className="btn_danger" btnText="Button 1" />
      <CoolButton className="btn_success"  btnText="Button 2" />
    </>*/
    <div className="App">
      <Signup />
    </div>
  );
};

export default App;
