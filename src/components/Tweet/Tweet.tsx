import React from "react";
import { Tweet } from "Api";
import { Divider, Card, CardHeader, CardContent, Avatar, IconButton } from "@mui/material";

const TweetUI = ({ tweet }: { tweet: Tweet }) => {
  return (
    <Card>
      <CardHeader
        title={tweet.user}
        subheader={tweet.createdAt}
      />
      <CardContent>
        content : {tweet.content}
      </CardContent>
    </Card>
  )
}

export default TweetUI;