/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet($filter: ModelSubscriptionTweetFilterInput) {
    onCreateTweet(filter: $filter) {
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
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet($filter: ModelSubscriptionTweetFilterInput) {
    onDeleteTweet(filter: $filter) {
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
export const onCreateSamplePost = /* GraphQL */ `
  subscription OnCreateSamplePost(
    $filter: ModelSubscriptionSamplePostFilterInput
    $owner: String
  ) {
    onCreateSamplePost(filter: $filter, owner: $owner) {
      id
      title
      text
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSamplePost = /* GraphQL */ `
  subscription OnUpdateSamplePost(
    $filter: ModelSubscriptionSamplePostFilterInput
    $owner: String
  ) {
    onUpdateSamplePost(filter: $filter, owner: $owner) {
      id
      title
      text
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSamplePost = /* GraphQL */ `
  subscription OnDeleteSamplePost(
    $filter: ModelSubscriptionSamplePostFilterInput
    $owner: String
  ) {
    onDeleteSamplePost(filter: $filter, owner: $owner) {
      id
      title
      text
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
