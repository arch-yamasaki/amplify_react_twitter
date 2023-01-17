import { useState } from "react";
import { Authenticator, Button, Divider, Heading, TextField } from "@aws-amplify/ui-react"
import { createNewTweet } from "functional/tweets";

const initialContent: string = ""

const addTweetUI = () => {

  const [newContent, setNewContent] = useState(initialContent);

  return (
    <div>
      <TextField
        descriptiveText="Enter a tweet"
        label="tweet area"
        onChange={(e) => setNewContent(e.target.value)}
        value={newContent}
      />
      <Button onClick={() => createNewTweet(newContent)}> Tweet </Button>
    </div>
  )
}

export default addTweetUI;