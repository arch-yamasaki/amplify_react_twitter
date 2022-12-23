/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
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
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
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
export const createSamplePost = /* GraphQL */ `
  mutation CreateSamplePost(
    $input: CreateSamplePostInput!
    $condition: ModelSamplePostConditionInput
  ) {
    createSamplePost(input: $input, condition: $condition) {
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
export const updateSamplePost = /* GraphQL */ `
  mutation UpdateSamplePost(
    $input: UpdateSamplePostInput!
    $condition: ModelSamplePostConditionInput
  ) {
    updateSamplePost(input: $input, condition: $condition) {
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
export const deleteSamplePost = /* GraphQL */ `
  mutation DeleteSamplePost(
    $input: DeleteSamplePostInput!
    $condition: ModelSamplePostConditionInput
  ) {
    deleteSamplePost(input: $input, condition: $condition) {
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
