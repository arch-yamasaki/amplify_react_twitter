/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTweetInput = {
  id?: string | null,
  type: string,
  content: string,
  timestamp: number,
  user?: string | null,
  _version?: number | null,
};

export type ModelTweetConditionInput = {
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  user?: ModelStringInput | null,
  and?: Array< ModelTweetConditionInput | null > | null,
  or?: Array< ModelTweetConditionInput | null > | null,
  not?: ModelTweetConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Tweet = {
  __typename: "Tweet",
  id: string,
  type: string,
  content: string,
  timestamp: number,
  user?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type DeleteTweetInput = {
  id: string,
  _version?: number | null,
};

export type ModelTweetFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  user?: ModelStringInput | null,
  and?: Array< ModelTweetFilterInput | null > | null,
  or?: Array< ModelTweetFilterInput | null > | null,
  not?: ModelTweetFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTweetConnection = {
  __typename: "ModelTweetConnection",
  items:  Array<Tweet | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionTweetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTweetFilterInput | null > | null,
  or?: Array< ModelSubscriptionTweetFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTweetMutationVariables = {
  input: CreateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type CreateTweetMutation = {
  createTweet?:  {
    __typename: "Tweet",
    id: string,
    type: string,
    content: string,
    timestamp: number,
    user?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTweetMutationVariables = {
  input: DeleteTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type DeleteTweetMutation = {
  deleteTweet?:  {
    __typename: "Tweet",
    id: string,
    type: string,
    content: string,
    timestamp: number,
    user?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTweetQueryVariables = {
  id: string,
};

export type GetTweetQuery = {
  getTweet?:  {
    __typename: "Tweet",
    id: string,
    type: string,
    content: string,
    timestamp: number,
    user?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTweetsQueryVariables = {
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTweetsQuery = {
  listTweets?:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      type: string,
      content: string,
      timestamp: number,
      user?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTweetsQueryVariables = {
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTweetsQuery = {
  syncTweets?:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      type: string,
      content: string,
      timestamp: number,
      user?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TweetsByTypeAndTimestampQueryVariables = {
  type: string,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TweetsByTypeAndTimestampQuery = {
  tweetsByTypeAndTimestamp?:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      type: string,
      content: string,
      timestamp: number,
      user?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTweetSubscriptionVariables = {
  filter?: ModelSubscriptionTweetFilterInput | null,
};

export type OnCreateTweetSubscription = {
  onCreateTweet?:  {
    __typename: "Tweet",
    id: string,
    type: string,
    content: string,
    timestamp: number,
    user?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTweetSubscriptionVariables = {
  filter?: ModelSubscriptionTweetFilterInput | null,
};

export type OnDeleteTweetSubscription = {
  onDeleteTweet?:  {
    __typename: "Tweet",
    id: string,
    type: string,
    content: string,
    timestamp: number,
    user?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
