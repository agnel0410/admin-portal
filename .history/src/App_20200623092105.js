import React from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';

const App = () =>{
  return (
    <div className="App">
      <h1> Admin Portal</h1>
    </div>
  );
}

export default withAuthenticator(App);
