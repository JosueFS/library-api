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
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
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
  borrow?: Maybe<Book>;
  borrowAggregate?: Maybe<UserBookBorrowAggregationSelection>;
  favorites: Array<Book>;
  favoritesAggregate?: Maybe<UserBookFavoritesAggregationSelection>;
  borrowConnection: UserBorrowConnection;
  favoritesConnection: UserFavoritesConnection;
};

export type UserBorrowArgs = {
  where?: InputMaybe<BookWhere>;
  options?: InputMaybe<BookOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserBorrowAggregateArgs = {
  where?: InputMaybe<BookWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserFavoritesArgs = {
  where?: InputMaybe<BookWhere>;
  options?: InputMaybe<BookOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserFavoritesAggregateArgs = {
  where?: InputMaybe<BookWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserBorrowConnectionArgs = {
  where?: InputMaybe<UserBorrowConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserBorrowConnectionSort>>;
};

export type UserFavoritesConnectionArgs = {
  where?: InputMaybe<UserFavoritesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserFavoritesConnectionSort>>;
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

export type UserBookBorrowAggregationSelection = {
  __typename?: "UserBookBorrowAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserBookBorrowNodeAggregateSelection>;
};

export type UserBookBorrowNodeAggregateSelection = {
  __typename?: "UserBookBorrowNodeAggregateSelection";
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

export type UserBookFavoritesAggregationSelection = {
  __typename?: "UserBookFavoritesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserBookFavoritesNodeAggregateSelection>;
};

export type UserBookFavoritesNodeAggregateSelection = {
  __typename?: "UserBookFavoritesNodeAggregateSelection";
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

export type UserBorrowConnection = {
  __typename?: "UserBorrowConnection";
  edges: Array<UserBorrowRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserBorrowRelationship = {
  __typename?: "UserBorrowRelationship";
  cursor: Scalars["String"];
  node: Book;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"];
  node: User;
};

export type UserFavoritesConnection = {
  __typename?: "UserFavoritesConnection";
  edges: Array<UserFavoritesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserFavoritesRelationship = {
  __typename?: "UserFavoritesRelationship";
  cursor: Scalars["String"];
  node: Book;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type BookConnectOrCreateWhere = {
  node: BookUniqueWhere;
};

export type BookConnectWhere = {
  node: BookWhere;
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

export type BookOnCreateInput = {
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

export type BookUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
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

export type UserBorrowAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserBorrowAggregateInput>>;
  OR?: InputMaybe<Array<UserBorrowAggregateInput>>;
  node?: InputMaybe<UserBorrowNodeAggregationWhereInput>;
};

export type UserBorrowConnectFieldInput = {
  where?: InputMaybe<BookConnectWhere>;
};

export type UserBorrowConnectionSort = {
  node?: InputMaybe<BookSort>;
};

export type UserBorrowConnectionWhere = {
  AND?: InputMaybe<Array<UserBorrowConnectionWhere>>;
  OR?: InputMaybe<Array<UserBorrowConnectionWhere>>;
  node?: InputMaybe<BookWhere>;
  node_NOT?: InputMaybe<BookWhere>;
};

export type UserBorrowConnectOrCreateFieldInput = {
  where: BookConnectOrCreateWhere;
  onCreate: UserBorrowConnectOrCreateFieldInputOnCreate;
};

export type UserBorrowConnectOrCreateFieldInputOnCreate = {
  node: BookOnCreateInput;
};

export type UserBorrowCreateFieldInput = {
  node: BookCreateInput;
};

export type UserBorrowDeleteFieldInput = {
  where?: InputMaybe<UserBorrowConnectionWhere>;
};

export type UserBorrowDisconnectFieldInput = {
  where?: InputMaybe<UserBorrowConnectionWhere>;
};

export type UserBorrowFieldInput = {
  create?: InputMaybe<UserBorrowCreateFieldInput>;
  connect?: InputMaybe<UserBorrowConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserBorrowConnectOrCreateFieldInput>;
};

export type UserBorrowNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserBorrowNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserBorrowNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  author_EQUAL?: InputMaybe<Scalars["String"]>;
  author_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  author_GT?: InputMaybe<Scalars["Int"]>;
  author_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  author_GTE?: InputMaybe<Scalars["Int"]>;
  author_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  author_LT?: InputMaybe<Scalars["Int"]>;
  author_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  author_LTE?: InputMaybe<Scalars["Int"]>;
  author_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  image_EQUAL?: InputMaybe<Scalars["String"]>;
  image_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  image_GT?: InputMaybe<Scalars["Int"]>;
  image_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  image_GTE?: InputMaybe<Scalars["Int"]>;
  image_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  image_LT?: InputMaybe<Scalars["Int"]>;
  image_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  image_LTE?: InputMaybe<Scalars["Int"]>;
  image_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  publisher_EQUAL?: InputMaybe<Scalars["String"]>;
  publisher_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  publisher_GT?: InputMaybe<Scalars["Int"]>;
  publisher_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  publisher_GTE?: InputMaybe<Scalars["Int"]>;
  publisher_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  publisher_LT?: InputMaybe<Scalars["Int"]>;
  publisher_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  publisher_LTE?: InputMaybe<Scalars["Int"]>;
  publisher_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genre_EQUAL?: InputMaybe<Scalars["String"]>;
  genre_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genre_GT?: InputMaybe<Scalars["Int"]>;
  genre_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genre_GTE?: InputMaybe<Scalars["Int"]>;
  genre_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genre_LT?: InputMaybe<Scalars["Int"]>;
  genre_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genre_LTE?: InputMaybe<Scalars["Int"]>;
  genre_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  assetId_EQUAL?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  assetId_GT?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_GT?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_GT?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_GT?: InputMaybe<Scalars["Int"]>;
  assetId_GTE?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  assetId_LT?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_LT?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_LT?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_LT?: InputMaybe<Scalars["Int"]>;
  assetId_LTE?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_LTE?: InputMaybe<Scalars["Int"]>;
  published_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  published_GT?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  published_GTE?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  published_LT?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  published_LTE?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type UserBorrowUpdateConnectionInput = {
  node?: InputMaybe<BookUpdateInput>;
};

export type UserBorrowUpdateFieldInput = {
  where?: InputMaybe<UserBorrowConnectionWhere>;
  update?: InputMaybe<UserBorrowUpdateConnectionInput>;
  connect?: InputMaybe<UserBorrowConnectFieldInput>;
  disconnect?: InputMaybe<UserBorrowDisconnectFieldInput>;
  create?: InputMaybe<UserBorrowCreateFieldInput>;
  delete?: InputMaybe<UserBorrowDeleteFieldInput>;
  connectOrCreate?: InputMaybe<UserBorrowConnectOrCreateFieldInput>;
};

export type UserConnectInput = {
  borrow?: InputMaybe<UserBorrowConnectFieldInput>;
  favorites?: InputMaybe<Array<UserFavoritesConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  borrow?: InputMaybe<UserBorrowConnectOrCreateFieldInput>;
  favorites?: InputMaybe<Array<UserFavoritesConnectOrCreateFieldInput>>;
};

export type UserCreateInput = {
  name?: InputMaybe<Scalars["String"]>;
  avatar_url?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  borrow?: InputMaybe<UserBorrowFieldInput>;
  favorites?: InputMaybe<UserFavoritesFieldInput>;
};

export type UserDeleteInput = {
  borrow?: InputMaybe<UserBorrowDeleteFieldInput>;
  favorites?: InputMaybe<Array<UserFavoritesDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  borrow?: InputMaybe<UserBorrowDisconnectFieldInput>;
  favorites?: InputMaybe<Array<UserFavoritesDisconnectFieldInput>>;
};

export type UserFavoritesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserFavoritesAggregateInput>>;
  OR?: InputMaybe<Array<UserFavoritesAggregateInput>>;
  node?: InputMaybe<UserFavoritesNodeAggregationWhereInput>;
};

export type UserFavoritesConnectFieldInput = {
  where?: InputMaybe<BookConnectWhere>;
};

export type UserFavoritesConnectionSort = {
  node?: InputMaybe<BookSort>;
};

export type UserFavoritesConnectionWhere = {
  AND?: InputMaybe<Array<UserFavoritesConnectionWhere>>;
  OR?: InputMaybe<Array<UserFavoritesConnectionWhere>>;
  node?: InputMaybe<BookWhere>;
  node_NOT?: InputMaybe<BookWhere>;
};

export type UserFavoritesConnectOrCreateFieldInput = {
  where: BookConnectOrCreateWhere;
  onCreate: UserFavoritesConnectOrCreateFieldInputOnCreate;
};

export type UserFavoritesConnectOrCreateFieldInputOnCreate = {
  node: BookOnCreateInput;
};

export type UserFavoritesCreateFieldInput = {
  node: BookCreateInput;
};

export type UserFavoritesDeleteFieldInput = {
  where?: InputMaybe<UserFavoritesConnectionWhere>;
};

export type UserFavoritesDisconnectFieldInput = {
  where?: InputMaybe<UserFavoritesConnectionWhere>;
};

export type UserFavoritesFieldInput = {
  create?: InputMaybe<Array<UserFavoritesCreateFieldInput>>;
  connect?: InputMaybe<Array<UserFavoritesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserFavoritesConnectOrCreateFieldInput>>;
};

export type UserFavoritesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserFavoritesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserFavoritesNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  author_EQUAL?: InputMaybe<Scalars["String"]>;
  author_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  author_GT?: InputMaybe<Scalars["Int"]>;
  author_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  author_GTE?: InputMaybe<Scalars["Int"]>;
  author_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  author_LT?: InputMaybe<Scalars["Int"]>;
  author_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  author_LTE?: InputMaybe<Scalars["Int"]>;
  author_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  author_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  author_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  image_EQUAL?: InputMaybe<Scalars["String"]>;
  image_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  image_GT?: InputMaybe<Scalars["Int"]>;
  image_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  image_GTE?: InputMaybe<Scalars["Int"]>;
  image_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  image_LT?: InputMaybe<Scalars["Int"]>;
  image_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  image_LTE?: InputMaybe<Scalars["Int"]>;
  image_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  image_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  image_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  publisher_EQUAL?: InputMaybe<Scalars["String"]>;
  publisher_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  publisher_GT?: InputMaybe<Scalars["Int"]>;
  publisher_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  publisher_GTE?: InputMaybe<Scalars["Int"]>;
  publisher_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  publisher_LT?: InputMaybe<Scalars["Int"]>;
  publisher_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  publisher_LTE?: InputMaybe<Scalars["Int"]>;
  publisher_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  publisher_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  publisher_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  genre_EQUAL?: InputMaybe<Scalars["String"]>;
  genre_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  genre_GT?: InputMaybe<Scalars["Int"]>;
  genre_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  genre_GTE?: InputMaybe<Scalars["Int"]>;
  genre_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  genre_LT?: InputMaybe<Scalars["Int"]>;
  genre_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  genre_LTE?: InputMaybe<Scalars["Int"]>;
  genre_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  genre_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  genre_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  assetId_EQUAL?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  assetId_GT?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_GT?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_GT?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_GT?: InputMaybe<Scalars["Int"]>;
  assetId_GTE?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  assetId_LT?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_LT?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_LT?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_LT?: InputMaybe<Scalars["Int"]>;
  assetId_LTE?: InputMaybe<Scalars["Int"]>;
  assetId_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  assetId_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  assetId_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  assetId_SUM_LTE?: InputMaybe<Scalars["Int"]>;
  published_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  published_GT?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  published_GTE?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  published_LT?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  published_LTE?: InputMaybe<Scalars["DateTime"]>;
  published_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  published_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type UserFavoritesUpdateConnectionInput = {
  node?: InputMaybe<BookUpdateInput>;
};

export type UserFavoritesUpdateFieldInput = {
  where?: InputMaybe<UserFavoritesConnectionWhere>;
  update?: InputMaybe<UserFavoritesUpdateConnectionInput>;
  connect?: InputMaybe<Array<UserFavoritesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserFavoritesDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserFavoritesCreateFieldInput>>;
  delete?: InputMaybe<Array<UserFavoritesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserFavoritesConnectOrCreateFieldInput>>;
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type UserRelationInput = {
  borrow?: InputMaybe<UserBorrowCreateFieldInput>;
  favorites?: InputMaybe<Array<UserFavoritesCreateFieldInput>>;
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
  borrow?: InputMaybe<UserBorrowUpdateFieldInput>;
  favorites?: InputMaybe<Array<UserFavoritesUpdateFieldInput>>;
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
  borrow?: InputMaybe<BookWhere>;
  borrow_NOT?: InputMaybe<BookWhere>;
  borrowAggregate?: InputMaybe<UserBorrowAggregateInput>;
  favorites?: InputMaybe<BookWhere>;
  favorites_NOT?: InputMaybe<BookWhere>;
  favoritesAggregate?: InputMaybe<UserFavoritesAggregateInput>;
  /** Return Users where all of the related Books match this filter */
  favorites_ALL?: InputMaybe<BookWhere>;
  /** Return Users where none of the related Books match this filter */
  favorites_NONE?: InputMaybe<BookWhere>;
  /** Return Users where one of the related Books match this filter */
  favorites_SINGLE?: InputMaybe<BookWhere>;
  /** Return Users where some of the related Books match this filter */
  favorites_SOME?: InputMaybe<BookWhere>;
  borrowConnection?: InputMaybe<UserBorrowConnectionWhere>;
  borrowConnection_NOT?: InputMaybe<UserBorrowConnectionWhere>;
  favoritesConnection?: InputMaybe<UserFavoritesConnectionWhere>;
  favoritesConnection_NOT?: InputMaybe<UserFavoritesConnectionWhere>;
  favoritesConnection_ALL?: InputMaybe<UserFavoritesConnectionWhere>;
  favoritesConnection_NONE?: InputMaybe<UserFavoritesConnectionWhere>;
  favoritesConnection_SINGLE?: InputMaybe<UserFavoritesConnectionWhere>;
  favoritesConnection_SOME?: InputMaybe<UserFavoritesConnectionWhere>;
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
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;
    connectOrCreate?: UserConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
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
