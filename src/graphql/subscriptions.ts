/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet($filter: ModelSubscriptionTweetFilterInput) {
    onCreateTweet(filter: $filter) {
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
export const onUpdateTweet = /* GraphQL */ `
  subscription OnUpdateTweet($filter: ModelSubscriptionTweetFilterInput) {
    onUpdateTweet(filter: $filter) {
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
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet($filter: ModelSubscriptionTweetFilterInput) {
    onDeleteTweet(filter: $filter) {
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
