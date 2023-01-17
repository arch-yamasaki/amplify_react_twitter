import { useState, useEffect } from 'react';
import { fetchTweets, fetchUserTweets, createNewTweet } from 'functional/tweets';
import { Tweet } from 'Api';

import { AmplifyUser } from "@aws-amplify/ui"
import { TextField, Button, Divider } from "@aws-amplify/ui-react"
import TimelineUI from 'components/Timeline/Timeline';

import { alpha, styled } from '@mui/material/styles';
import { Stack } from "@mui/material"



const initialContent: string = ""


const UserHome = ({ user }: { user: AmplifyUser }) => {

  const [pageUser, setPageUser] = useState<AmplifyUser | null>(null);
  const [newContent, setNewContent] = useState(initialContent);
  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    const _pageUser = getUser() as AmplifyUser;
    setPageUser(_pageUser)
    fetchTweets().then((tweets) =>
      setTweets(tweets as Tweet[])
    )
  })

  const createAndSetNewTweet = (newContent: string) => {
    createNewTweet(newContent).then((newTweet) => setTweets([newTweet as Tweet, ...tweets]))
  }

  return (
    <Stack>
      <div>
        <h2> Hello {user?.username}</h2>
        <TextField
          descriptiveText="Enter a tweet"
          label="tweet area"
          onChange={(e) => setNewContent(e.target.value)}
          value={newContent}
        />
        <Button onClick={() => createAndSetNewTweet(newContent)}> Tweet </Button>
        <Divider />
      </div>
      <div>
        <TimelineUI tweets={tweets} />
      </div>
    </Stack>
  )
}

export default UserHome;