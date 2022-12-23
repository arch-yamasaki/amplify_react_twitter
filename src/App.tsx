import React from 'react';
import { useState, useEffect } from 'react';

import { Amplify, Auth } from 'aws-amplify';
import { Authenticator, Button, Divider, Heading, TextField } from "@aws-amplify/ui-react"
import cognitoUserInterface from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css';

import { graphqlOperation, API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { listTweets, tweetsByOwnerAndTimestamp } from './graphql/queries';
import { createTweet } from './graphql/mutations';
import { Tweet, CreateTweetInput, ListTweetsQuery } from './Api';


import awsconfig from "./aws-exports"
import { randomUUID } from 'crypto';
// import './App.moduels.scss';
Amplify.configure(awsconfig)

const initialContent: string = ""

function App() {

  const [newContent, setNewContent] = useState(initialContent);
  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    fetchTweets()
  })

  const fetchTweets = async () => {
    try {
      const res = await API.graphql(graphqlOperation(listTweets)) as GraphQLResult<ListTweetsQuery>
      if (res.data?.listTweets?.items) {
        const fetchedTweets = res.data?.listTweets?.items as Tweet[];
        setTweets(fetchedTweets);
      }
    } catch (error) {
      console.log("error fetching Tweets", error)
    }
  }

  // "Variable "$input" got invalid value 1671777525.935 at "input.timestamp"; Expected type Int. Int cannot represent non-integer value: 1671777525.935"
  const createNewTweet = async () => {
    try {
      const tweetInput: CreateTweetInput = {
        // id: new Date().getTime().toString(),
        content: newContent,
        type: "post",
        // owner: user.owner,
        timestamp: Math.floor(Date.now() / 1000)
      }
      const res = await API.graphql(graphqlOperation(createTweet, { input: tweetInput }))

      const newTweets = [...tweets, tweetInput] as Tweet[]
      setNewContent(initialContent)
      setTweets(newTweets)
    } catch (error) {
      console.log("error adding Tweets", error)
    }

  }
  return (
    <Authenticator >
      {({ signOut, user }) => (
        <>
          <h1> Hello {user?.username}</h1>
          <TextField
            descriptiveText="Enter a tweet"
            label="tweet area"
            onChange={(e) => setNewContent(e.target.value)}
            value={newContent}
          />
          <Button onClick={createNewTweet}> Tweet </Button>
          <Divider />
          {
            tweets.map((tweet, idx) => {
              return (
                <div key={idx}>
                  <div> owner : {tweet.owner}</div>
                  <div> content : {tweet.content}</div>
                  <div> time : {tweet.timestamp}</div>
                  <div> ------------ </div>
                </div>
              )
            })
          }
          <Button onClick={signOut}> Sign Out </Button>
        </>
      )}
    </Authenticator>
  );
}

export default App;
