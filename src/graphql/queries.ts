/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
      id
      type
      content
      owner
      timestamp
      _version
      _deleted
      _lastChangedAt
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
        owner
        timestamp
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTweets = /* GraphQL */ `
  query SyncTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTweets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        content
        owner
        timestamp
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const tweetsByTypeAndTimestamp = /* GraphQL */ `
  query TweetsByTypeAndTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tweetsByTypeAndTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        content
        owner
        timestamp
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const tweetsByOwnerAndTimestamp = /* GraphQL */ `
  query TweetsByOwnerAndTimestamp(
    $owner: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tweetsByOwnerAndTimestamp(
      owner: $owner
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        content
        owner
        timestamp
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
