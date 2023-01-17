import React from "react";
import { Tweet } from "Api";
import TweetUI from "components/Tweet/Tweet";
import TimelineCSS from "./Timeline.module.scss"

const TimelineUI = ({ tweets }: { tweets: Tweet[] }) => {
  return (
    <div className={TimelineCSS.timeline}>
      <h2> Timeline </h2>
      {
        tweets.map((tweet, idx) => {
          return (
            <TweetUI tweet={tweet} key={idx} />
          )
        })
      }
    </div>
  )
}

export default TimelineUI