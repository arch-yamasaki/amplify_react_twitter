/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
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
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
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
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
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
