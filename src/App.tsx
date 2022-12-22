import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator, Button, Heading } from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css';

import awsconfig from "./aws-exports"
// import './App.moduels.scss';
Amplify.configure(awsconfig)

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1> Hello {user?.username}</h1>
          <Button onClick={signOut}> Sign Out </Button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
