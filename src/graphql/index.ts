import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
};

export type Query = {
  __typename?: "Query";
  books: Array<Book>;
  booksAggregate: BookAggregateSelection;
  booksConnection: BooksConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};

export type QueryBooksArgs = {
  where?: InputMaybe<BookWhere>;
  options?: InputMaybe<BookOptions>;
};

export type QueryBooksAggregateArgs = {
  where?: InputMaybe<BookWhere>;
};

export type QueryBooksConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<BookWhere>;
  sort?: InputMaybe<Array<InputMaybe<BookSort>>>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  CreateBook?: Maybe<Book>;
  SeedBooks?: Maybe<Array<Maybe<Book>>>;
  createBooks: CreateBooksMutationResponse;
  deleteBooks: DeleteInfo;
  updateBooks: UpdateBooksMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateBookArgs = {
  title: Scalars["String"];
  author: Scalars["String"];
  description: Scalars["String"];
  image: Scalars["String"];
  published?: InputMaybe<Scalars["DateTime"]>;
  publisher?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
};

export type MutationSeedBooksArgs = {
  quantity?: InputMaybe<Scalars["Int"]>;
};

export type MutationCreateBooksArgs = {
  input: Array<BookCreateInput>;
};

export type MutationDeleteBooksArgs = {
  where?: InputMaybe<BookWhere>;
};

export type MutationUpdateBooksArgs = {
  where?: InputMaybe<BookWhere>;
  update?: InputMaybe<BookUpdateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Book = {
  __typename?: "Book";
  id?: Maybe<Scalars["ID"]>;
  assetId: Scalars["Int"];
  title: Scalars["String"];
  author: Scalars["String"];
  description: Scalars["String"];
  image: Scalars["String"];
  publisher?: Maybe<Scalars["String"]>;
  genre?: Maybe<Scalars["String"]>;
  published?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type BookAggregateSelection = {
  __typename?: "BookAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNullable;
  assetId: IntAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  author: StringAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  image: StringAggregateSelectionNonNullable;
  publisher: StringAggregateSelectionNullable;
  genre: StringAggregateSelectionNullable;
  published: DateTimeAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type BookEdge = {
  __typename?: "BookEdge";
  cursor: Scalars["String"];
  node: Book;
};

export type BooksConnection = {
  __typename?: "BooksConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<BookEdge>;
};

export type CreateBooksMutationResponse = {
  __typename?: "CreateBooksMutationResponse";
  info: CreateInfo;
  books: Array<Book>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: "DateTimeAggregateSelectionNullable";
  min?: Maybe<Scalars["DateTime"]>;
  max?: Maybe<Scalars["DateTime"]>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type IdAggregateSelectionNullable = {
  __typename?: "IDAggregateSelectionNullable";
  shortest?: Maybe<Scalars["ID"]>;
  longest?: Maybe<Scalars["ID"]>;
};

export type IntAggregateSelectionNonNullable = {
  __typename?: "IntAggregateSelectionNonNullable";
  max: Scalars["Int"];
  min: Scalars["Int"];
  average: Scalars["Float"];
  sum: Scalars["Int"];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"];
  longest: Scalars["String"];
};

export type StringAggregateSelectionNullable = {
  __typename?: "StringAggregateSelectionNullable";
  shortest?: Maybe<Scalars["String"]>;
  longest?: Maybe<Scalars["String"]>;
};

export type UpdateBooksMutationResponse = {
  __typename?: "UpdateBooksMutationResponse";
  info: UpdateInfo;
  books: Array<Book>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  avatar_url?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  avatar_url: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"];
  node: User;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type BookCreateInput = {
  assetId: Scalars["Int"];
  title: Scalars["String"];
  author: Scalars["String"];
  description: Scalars["String"];
  image: Scalars["String"];
  publisher?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
  published?: InputMaybe<Scalars["DateTime"]>;
};

export type BookOptions = {
  /** Specify one or more BookSort objects to sort Books by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BookSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort Books by. The order in which sorts are applied is not guaranteed when specifying many fields in one BookSort object. */
export type BookSort = {
  id?: InputMaybe<SortDirection>;
  assetId?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  author?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  image?: InputMaybe<SortDirection>;
  publisher?: InputMaybe<SortDirection>;
  genre?: InputMaybe<SortDirection>;
  published?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type BookUpdateInput = {
  assetId?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  author?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  publisher?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
  published?: InputMaybe<Scalars["DateTime"]>;
  assetId_INCREMENT?: InputMaybe<Scalars["Int"]>;
  assetId_DECREMENT?: InputMaybe<Scalars["Int"]>;
};

export type BookWhere = {
  OR?: InputMaybe<Array<BookWhere>>;
  AND?: InputMaybe<Array<BookWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  assetId?: InputMaybe<Scalars["Int"]>;
  assetId_NOT?: InputMaybe<Scalars["Int"]>;
  assetId_IN?: InputMaybe<Array<Scalars["Int"]>>;
  assetId_NOT_IN?: InputMaybe<Array<Scalars["Int"]>>;
  assetId_LT?: InputMaybe<Scalars["Int"]>;
  assetId_LTE?: InputMaybe<Scalars["Int"]>;
  assetId_GT?: InputMaybe<Scalars["Int"]>;
  assetId_GTE?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  title_NOT?: InputMaybe<Scalars["String"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]>>;
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  author?: InputMaybe<Scalars["String"]>;
  author_NOT?: InputMaybe<Scalars["String"]>;
  author_IN?: InputMaybe<Array<Scalars["String"]>>;
  author_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  author_CONTAINS?: InputMaybe<Scalars["String"]>;
  author_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  author_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  author_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  author_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  author_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  description_NOT?: InputMaybe<Scalars["String"]>;
  description_IN?: InputMaybe<Array<Scalars["String"]>>;
  description_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  description_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  image_NOT?: InputMaybe<Scalars["String"]>;
  image_IN?: InputMaybe<Array<Scalars["String"]>>;
  image_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  image_CONTAINS?: InputMaybe<Scalars["String"]>;
  image_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  image_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  image_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  image_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  image_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  publisher?: InputMaybe<Scalars["String"]>;
  publisher_NOT?: InputMaybe<Scalars["String"]>;
  publisher_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  publisher_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  publisher_CONTAINS?: InputMaybe<Scalars["String"]>;
  publisher_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  publisher_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  publisher_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  publisher_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  publisher_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
  genre_NOT?: InputMaybe<Scalars["String"]>;
  genre_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  genre_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  genre_CONTAINS?: InputMaybe<Scalars["String"]>;
  genre_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  genre_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  genre_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  genre_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  genre_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  published?: InputMaybe<Scalars["DateTime"]>;
  published_NOT?: InputMaybe<Scalars["DateTime"]>;
  published_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  published_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  published_LT?: InputMaybe<Scalars["DateTime"]>;
  published_LTE?: InputMaybe<Scalars["DateTime"]>;
  published_GT?: InputMaybe<Scalars["DateTime"]>;
  published_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
  avatar_url?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  avatar_url?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  avatar_url?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
};

export type UserWhere = {
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  avatar_url?: InputMaybe<Scalars["String"]>;
  avatar_url_NOT?: InputMaybe<Scalars["String"]>;
  avatar_url_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  avatar_url_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  avatar_url_CONTAINS?: InputMaybe<Scalars["String"]>;
  avatar_url_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  avatar_url_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  avatar_url_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  avatar_url_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  avatar_url_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  email_NOT?: InputMaybe<Scalars["String"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]>>;
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]>;
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
};

export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface BookAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNullable;
  assetId?: IntAggregateInputNonNullable;
  title?: StringAggregateInputNonNullable;
  author?: StringAggregateInputNonNullable;
  description?: StringAggregateInputNonNullable;
  image?: StringAggregateInputNonNullable;
  publisher?: StringAggregateInputNullable;
  genre?: StringAggregateInputNullable;
  published?: DateTimeAggregateInputNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class BookModel {
  public find(args?: {
    where?: BookWhere;

    options?: BookOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Book[]>;
  public create(args: {
    input: BookCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateBooksMutationResponse>;
  public update(args: {
    where?: BookWhere;
    update?: BookUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateBooksMutationResponse>;
  public delete(args: {
    where?: BookWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: BookWhere;

    aggregate: BookAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<BookAggregateSelection>;
}

export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNullable;
  name?: StringAggregateInputNullable;
  avatar_url?: StringAggregateInputNullable;
  email?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface ModelMap {
  Book: BookModel;
  User: UserModel;
}
