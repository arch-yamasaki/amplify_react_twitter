/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet($filter: ModelSubscriptionTweetFilterInput) {
    onCreateTweet(filter: $filter) {
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
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet($filter: ModelSubscriptionTweetFilterInput) {
    onDeleteTweet(filter: $filter) {
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
