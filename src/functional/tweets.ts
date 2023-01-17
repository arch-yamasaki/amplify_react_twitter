
import { AmplifyUser } from "@aws-amplify/ui"
import { graphqlOperation, API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { listTweets, tweetsByUserAndCreatedAt } from 'graphql/queries';
import { createTweet } from 'graphql/mutations';
import { Tweet, CreateTweetInput, ListTweetsQuery, TweetsByUserAndCreatedAtQuery, } from 'Api';


export const fetchUserTweets = async (user: AmplifyUser) => {
  try {
    // tweetsByUserAndCreatedAtでの実施
    // console.log("user :", user)
    const subUsername = `${user.attributes?.sub}::${user.username}`
    const res = await API.graphql(graphqlOperation(tweetsByUserAndCreatedAt, { user: subUsername })) as GraphQLResult<TweetsByUserAndCreatedAtQuery>
    if (res.data?.tweetsByUserAndCreatedAt?.items) {
      const fetchedUserTweets = res.data?.tweetsByUserAndCreatedAt?.items as Tweet[];
      return fetchedUserTweets
    }
  } catch (error) {
    console.log("error fetching Tweets", error)
  }
}

export const fetchTweets = async () => {
  try {
    // listTweetsでの実施
    const res = await API.graphql(graphqlOperation(listTweets)) as GraphQLResult<ListTweetsQuery>
    if (res.data?.listTweets?.items) {
      const fetchedTweets = res.data?.listTweets?.items as Tweet[];
      return fetchedTweets
    }
  } catch (error) {
    console.log("error fetching Tweets", error)
  }
}

export const createNewTweet = async (newContent: string) => {
  try {
    const tweetInput: CreateTweetInput = {
      // id: new Date().getTime().toString(),
      content: newContent,
      type: "post",
      // owner: user.owner,
      timestamp: Math.floor(Date.now() / 1000)
    }
    const res = await API.graphql(graphqlOperation(createTweet, { input: tweetInput })) as GraphQLResult<CreateTweetInput>
    return tweetInput as Tweet;
  } catch (error) {
    console.log("error adding Tweets", error)
  }

}