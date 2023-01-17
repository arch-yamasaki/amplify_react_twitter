/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
      id
      type
      content
      timestamp
      user
      createdAt
      updatedAt
    }
  }
`;
export const listTweets = /* GraphQL */ `
  query ListTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        content
        timestamp
        user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tweetsByTypeAndCreatedAt = /* GraphQL */ `
  query TweetsByTypeAndCreatedAt(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tweetsByTypeAndCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        content
        timestamp
        user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tweetsByUserAndCreatedAt = /* GraphQL */ `
  query TweetsByUserAndCreatedAt(
    $user: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tweetsByUserAndCreatedAt(
      user: $user
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        content
        timestamp
        user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
