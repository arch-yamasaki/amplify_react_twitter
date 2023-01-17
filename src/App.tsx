import React from 'react';
import { useState, useEffect } from 'react';

import awsconfig from "./aws-exports"
import { Amplify, Auth } from 'aws-amplify';
// import cognitoUserInterface from "@aws-amplify/ui-react"
// import AmplifyUser from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css';
import styles from "App.module.scss"
import { alpha, styled } from '@mui/material/styles';

import { Grid, Stack } from '@mui/material';
import { Authenticator, Button, Divider, Heading, TextField } from "@aws-amplify/ui-react"
import { AmplifyUser } from "@aws-amplify/ui"

import { fetchTweets, fetchUserTweets, createNewTweet } from 'functional/tweets';
import { Tweet, CreateTweetInput, ListTweetsQuery, TweetsByUserAndCreatedAtQuery } from './Api';

import Home from 'components/Home/Home';
import UserHome from 'components/UserHome/UserHome';
import TimelineUI from 'components/Timeline/Timeline';
import Sidebar from 'components/Sidebar/Sidebar';

import { Routes, Route, Link } from 'react-router-dom';


const SidebarGrid = styled(Grid)(({ theme }) => ({
  position: "sticky",
  backgroundColor: "blue",
  top: "0px"
}))


// import './App.moduels.scss';
Amplify.configure(awsconfig)

function App() {

  return (
    <Authenticator>
      {({ signOut, user }) => (

        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={6}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/UserHome/:username" element={<UserHome />}></Route>
            </Routes>
          </Grid>
        </Grid>

      )}
    </Authenticator>
  );
}

export default App;
