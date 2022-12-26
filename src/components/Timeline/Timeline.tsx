import React from "react";
import { Tweet } from "Api";
import TweetUI from "components/Tweet/Tweet";

const TimelineUI = ({ tweets }: { tweets: Tweet[] }) => {
  return (
    <>
      <h2> Timeline </h2>
      {
        tweets.map((tweet) => {
          return (
            <TweetUI tweet={tweet} />
          )
        })
      }
    </>
  )
}

export default TimelineUI