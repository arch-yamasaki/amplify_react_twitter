/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      is_admin
      image
      tweets {
        items {
          id
          sentence
          createdAt
          updatedAt
          userTweetsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        is_admin
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
      id
      user {
        id
        name
        is_admin
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      sentence
      createdAt
      updatedAt
      userTweetsId
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
        user {
          id
          name
          is_admin
          image
          createdAt
          updatedAt
        }
        sentence
        createdAt
        updatedAt
        userTweetsId
      }
      nextToken
    }
  }
`;