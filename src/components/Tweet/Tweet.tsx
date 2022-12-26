import React from "react";
import { Tweet } from "Api";
import { Divider } from "@aws-amplify/ui-react";

const TweetUI = ({ tweet }: { tweet: Tweet }) => {
  return (
    <>
      <div>user {tweet.user}</div>
      <div>content : {tweet.content}</div>
      <div>createdAt : {tweet.createdAt}</div>
      <Divider />
    </>
  )
}

export default TweetUI;