// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  comment: (where?: CommentWhereInput) => Promise<boolean>;
  joke: (where?: JokeWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
  vote: (where?: VoteWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  comment: (where: CommentWhereUniqueInput) => CommentNullablePromise;
  comments: (args?: {
    where?: CommentWhereInput;
    orderBy?: CommentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Comment>;
  commentsConnection: (args?: {
    where?: CommentWhereInput;
    orderBy?: CommentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CommentConnectionPromise;
  joke: (where: JokeWhereUniqueInput) => JokeNullablePromise;
  jokes: (args?: {
    where?: JokeWhereInput;
    orderBy?: JokeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Joke>;
  jokesConnection: (args?: {
    where?: JokeWhereInput;
    orderBy?: JokeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => JokeConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  vote: (where: VoteWhereUniqueInput) => VoteNullablePromise;
  votes: (args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Vote>;
  votesConnection: (args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => VoteConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createComment: (data: CommentCreateInput) => CommentPromise;
  updateComment: (args: {
    data: CommentUpdateInput;
    where: CommentWhereUniqueInput;
  }) => CommentPromise;
  updateManyComments: (args: {
    data: CommentUpdateManyMutationInput;
    where?: CommentWhereInput;
  }) => BatchPayloadPromise;
  upsertComment: (args: {
    where: CommentWhereUniqueInput;
    create: CommentCreateInput;
    update: CommentUpdateInput;
  }) => CommentPromise;
  deleteComment: (where: CommentWhereUniqueInput) => CommentPromise;
  deleteManyComments: (where?: CommentWhereInput) => BatchPayloadPromise;
  createJoke: (data: JokeCreateInput) => JokePromise;
  updateJoke: (args: {
    data: JokeUpdateInput;
    where: JokeWhereUniqueInput;
  }) => JokePromise;
  updateManyJokes: (args: {
    data: JokeUpdateManyMutationInput;
    where?: JokeWhereInput;
  }) => BatchPayloadPromise;
  upsertJoke: (args: {
    where: JokeWhereUniqueInput;
    create: JokeCreateInput;
    update: JokeUpdateInput;
  }) => JokePromise;
  deleteJoke: (where: JokeWhereUniqueInput) => JokePromise;
  deleteManyJokes: (where?: JokeWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createVote: (data: VoteCreateInput) => VotePromise;
  updateVote: (args: {
    data: VoteUpdateInput;
    where: VoteWhereUniqueInput;
  }) => VotePromise;
  updateManyVotes: (args: {
    data: VoteUpdateManyMutationInput;
    where?: VoteWhereInput;
  }) => BatchPayloadPromise;
  upsertVote: (args: {
    where: VoteWhereUniqueInput;
    create: VoteCreateInput;
    update: VoteUpdateInput;
  }) => VotePromise;
  deleteVote: (where: VoteWhereUniqueInput) => VotePromise;
  deleteManyVotes: (where?: VoteWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  comment: (
    where?: CommentSubscriptionWhereInput
  ) => CommentSubscriptionPayloadSubscription;
  joke: (
    where?: JokeSubscriptionWhereInput
  ) => JokeSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  vote: (
    where?: VoteSubscriptionWhereInput
  ) => VoteSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type JokeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "content_ASC"
  | "content_DESC"
  | "published_ASC"
  | "published_DESC";

export type CommentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "content_ASC"
  | "content_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "name_ASC"
  | "name_DESC";

export type VoteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "value_ASC"
  | "value_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type CommentWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface JokeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  author?: Maybe<UserWhereInput>;
  AND?: Maybe<JokeWhereInput[] | JokeWhereInput>;
  OR?: Maybe<JokeWhereInput[] | JokeWhereInput>;
  NOT?: Maybe<JokeWhereInput[] | JokeWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  jokes_every?: Maybe<JokeWhereInput>;
  jokes_some?: Maybe<JokeWhereInput>;
  jokes_none?: Maybe<JokeWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface CommentWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  author?: Maybe<UserWhereInput>;
  joke?: Maybe<JokeWhereInput>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  AND?: Maybe<CommentWhereInput[] | CommentWhereInput>;
  OR?: Maybe<CommentWhereInput[] | CommentWhereInput>;
  NOT?: Maybe<CommentWhereInput[] | CommentWhereInput>;
}

export type JokeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export type VoteWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface VoteWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  author?: Maybe<UserWhereInput>;
  joke?: Maybe<JokeWhereInput>;
  value?: Maybe<Int>;
  value_not?: Maybe<Int>;
  value_in?: Maybe<Int[] | Int>;
  value_not_in?: Maybe<Int[] | Int>;
  value_lt?: Maybe<Int>;
  value_lte?: Maybe<Int>;
  value_gt?: Maybe<Int>;
  value_gte?: Maybe<Int>;
  AND?: Maybe<VoteWhereInput[] | VoteWhereInput>;
  OR?: Maybe<VoteWhereInput[] | VoteWhereInput>;
  NOT?: Maybe<VoteWhereInput[] | VoteWhereInput>;
}

export interface CommentCreateInput {
  id?: Maybe<ID_Input>;
  author?: Maybe<UserCreateOneInput>;
  joke?: Maybe<JokeCreateOneInput>;
  content: String;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email?: Maybe<String>;
  name: String;
  jokes?: Maybe<JokeCreateManyWithoutAuthorInput>;
}

export interface JokeCreateManyWithoutAuthorInput {
  create?: Maybe<JokeCreateWithoutAuthorInput[] | JokeCreateWithoutAuthorInput>;
  connect?: Maybe<JokeWhereUniqueInput[] | JokeWhereUniqueInput>;
}

export interface JokeCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  content: String;
  published?: Maybe<Boolean>;
}

export interface JokeCreateOneInput {
  create?: Maybe<JokeCreateInput>;
  connect?: Maybe<JokeWhereUniqueInput>;
}

export interface JokeCreateInput {
  id?: Maybe<ID_Input>;
  content: String;
  published?: Maybe<Boolean>;
  author?: Maybe<UserCreateOneWithoutJokesInput>;
}

export interface UserCreateOneWithoutJokesInput {
  create?: Maybe<UserCreateWithoutJokesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutJokesInput {
  id?: Maybe<ID_Input>;
  email?: Maybe<String>;
  name: String;
}

export interface CommentUpdateInput {
  author?: Maybe<UserUpdateOneInput>;
  joke?: Maybe<JokeUpdateOneInput>;
  content?: Maybe<String>;
}

export interface UserUpdateOneInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateDataInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
  jokes?: Maybe<JokeUpdateManyWithoutAuthorInput>;
}

export interface JokeUpdateManyWithoutAuthorInput {
  create?: Maybe<JokeCreateWithoutAuthorInput[] | JokeCreateWithoutAuthorInput>;
  delete?: Maybe<JokeWhereUniqueInput[] | JokeWhereUniqueInput>;
  connect?: Maybe<JokeWhereUniqueInput[] | JokeWhereUniqueInput>;
  set?: Maybe<JokeWhereUniqueInput[] | JokeWhereUniqueInput>;
  disconnect?: Maybe<JokeWhereUniqueInput[] | JokeWhereUniqueInput>;
  update?: Maybe<
    | JokeUpdateWithWhereUniqueWithoutAuthorInput[]
    | JokeUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | JokeUpsertWithWhereUniqueWithoutAuthorInput[]
    | JokeUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<JokeScalarWhereInput[] | JokeScalarWhereInput>;
  updateMany?: Maybe<
    JokeUpdateManyWithWhereNestedInput[] | JokeUpdateManyWithWhereNestedInput
  >;
}

export interface JokeUpdateWithWhereUniqueWithoutAuthorInput {
  where: JokeWhereUniqueInput;
  data: JokeUpdateWithoutAuthorDataInput;
}

export interface JokeUpdateWithoutAuthorDataInput {
  content?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface JokeUpsertWithWhereUniqueWithoutAuthorInput {
  where: JokeWhereUniqueInput;
  update: JokeUpdateWithoutAuthorDataInput;
  create: JokeCreateWithoutAuthorInput;
}

export interface JokeScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  AND?: Maybe<JokeScalarWhereInput[] | JokeScalarWhereInput>;
  OR?: Maybe<JokeScalarWhereInput[] | JokeScalarWhereInput>;
  NOT?: Maybe<JokeScalarWhereInput[] | JokeScalarWhereInput>;
}

export interface JokeUpdateManyWithWhereNestedInput {
  where: JokeScalarWhereInput;
  data: JokeUpdateManyDataInput;
}

export interface JokeUpdateManyDataInput {
  content?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface JokeUpdateOneInput {
  create?: Maybe<JokeCreateInput>;
  update?: Maybe<JokeUpdateDataInput>;
  upsert?: Maybe<JokeUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<JokeWhereUniqueInput>;
}

export interface JokeUpdateDataInput {
  content?: Maybe<String>;
  published?: Maybe<Boolean>;
  author?: Maybe<UserUpdateOneWithoutJokesInput>;
}

export interface UserUpdateOneWithoutJokesInput {
  create?: Maybe<UserCreateWithoutJokesInput>;
  update?: Maybe<UserUpdateWithoutJokesDataInput>;
  upsert?: Maybe<UserUpsertWithoutJokesInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutJokesDataInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
}

export interface UserUpsertWithoutJokesInput {
  update: UserUpdateWithoutJokesDataInput;
  create: UserCreateWithoutJokesInput;
}

export interface JokeUpsertNestedInput {
  update: JokeUpdateDataInput;
  create: JokeCreateInput;
}

export interface CommentUpdateManyMutationInput {
  content?: Maybe<String>;
}

export interface JokeUpdateInput {
  content?: Maybe<String>;
  published?: Maybe<Boolean>;
  author?: Maybe<UserUpdateOneWithoutJokesInput>;
}

export interface JokeUpdateManyMutationInput {
  content?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
  jokes?: Maybe<JokeUpdateManyWithoutAuthorInput>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
}

export interface VoteCreateInput {
  id?: Maybe<ID_Input>;
  author?: Maybe<UserCreateOneInput>;
  joke?: Maybe<JokeCreateOneInput>;
  value: Int;
}

export interface VoteUpdateInput {
  author?: Maybe<UserUpdateOneInput>;
  joke?: Maybe<JokeUpdateOneInput>;
  value?: Maybe<Int>;
}

export interface VoteUpdateManyMutationInput {
  value?: Maybe<Int>;
}

export interface CommentSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CommentWhereInput>;
  AND?: Maybe<CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput>;
  OR?: Maybe<CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput>;
  NOT?: Maybe<CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput>;
}

export interface JokeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<JokeWhereInput>;
  AND?: Maybe<JokeSubscriptionWhereInput[] | JokeSubscriptionWhereInput>;
  OR?: Maybe<JokeSubscriptionWhereInput[] | JokeSubscriptionWhereInput>;
  NOT?: Maybe<JokeSubscriptionWhereInput[] | JokeSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface VoteSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<VoteWhereInput>;
  AND?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
  OR?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
  NOT?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Comment {
  id: ID_Output;
  content: String;
}

export interface CommentPromise extends Promise<Comment>, Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  joke: <T = JokePromise>() => T;
  content: () => Promise<String>;
}

export interface CommentSubscription
  extends Promise<AsyncIterator<Comment>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  author: <T = UserSubscription>() => T;
  joke: <T = JokeSubscription>() => T;
  content: () => Promise<AsyncIterator<String>>;
}

export interface CommentNullablePromise
  extends Promise<Comment | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  joke: <T = JokePromise>() => T;
  content: () => Promise<String>;
}

export interface User {
  id: ID_Output;
  email?: String;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  jokes: <T = FragmentableArray<Joke>>(args?: {
    where?: JokeWhereInput;
    orderBy?: JokeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  jokes: <T = Promise<AsyncIterator<JokeSubscription>>>(args?: {
    where?: JokeWhereInput;
    orderBy?: JokeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  jokes: <T = FragmentableArray<Joke>>(args?: {
    where?: JokeWhereInput;
    orderBy?: JokeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Joke {
  id: ID_Output;
  content: String;
  published: Boolean;
}

export interface JokePromise extends Promise<Joke>, Fragmentable {
  id: () => Promise<ID_Output>;
  content: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface JokeSubscription
  extends Promise<AsyncIterator<Joke>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  content: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
}

export interface JokeNullablePromise
  extends Promise<Joke | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  content: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface CommentConnection {
  pageInfo: PageInfo;
  edges: CommentEdge[];
}

export interface CommentConnectionPromise
  extends Promise<CommentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CommentEdge>>() => T;
  aggregate: <T = AggregateCommentPromise>() => T;
}

export interface CommentConnectionSubscription
  extends Promise<AsyncIterator<CommentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CommentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCommentSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CommentEdge {
  node: Comment;
  cursor: String;
}

export interface CommentEdgePromise extends Promise<CommentEdge>, Fragmentable {
  node: <T = CommentPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CommentEdgeSubscription
  extends Promise<AsyncIterator<CommentEdge>>,
    Fragmentable {
  node: <T = CommentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateComment {
  count: Int;
}

export interface AggregateCommentPromise
  extends Promise<AggregateComment>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCommentSubscription
  extends Promise<AsyncIterator<AggregateComment>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface JokeConnection {
  pageInfo: PageInfo;
  edges: JokeEdge[];
}

export interface JokeConnectionPromise
  extends Promise<JokeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<JokeEdge>>() => T;
  aggregate: <T = AggregateJokePromise>() => T;
}

export interface JokeConnectionSubscription
  extends Promise<AsyncIterator<JokeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<JokeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateJokeSubscription>() => T;
}

export interface JokeEdge {
  node: Joke;
  cursor: String;
}

export interface JokeEdgePromise extends Promise<JokeEdge>, Fragmentable {
  node: <T = JokePromise>() => T;
  cursor: () => Promise<String>;
}

export interface JokeEdgeSubscription
  extends Promise<AsyncIterator<JokeEdge>>,
    Fragmentable {
  node: <T = JokeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateJoke {
  count: Int;
}

export interface AggregateJokePromise
  extends Promise<AggregateJoke>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateJokeSubscription
  extends Promise<AsyncIterator<AggregateJoke>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Vote {
  id: ID_Output;
  value: Int;
}

export interface VotePromise extends Promise<Vote>, Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  joke: <T = JokePromise>() => T;
  value: () => Promise<Int>;
}

export interface VoteSubscription
  extends Promise<AsyncIterator<Vote>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  author: <T = UserSubscription>() => T;
  joke: <T = JokeSubscription>() => T;
  value: () => Promise<AsyncIterator<Int>>;
}

export interface VoteNullablePromise
  extends Promise<Vote | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  joke: <T = JokePromise>() => T;
  value: () => Promise<Int>;
}

export interface VoteConnection {
  pageInfo: PageInfo;
  edges: VoteEdge[];
}

export interface VoteConnectionPromise
  extends Promise<VoteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<VoteEdge>>() => T;
  aggregate: <T = AggregateVotePromise>() => T;
}

export interface VoteConnectionSubscription
  extends Promise<AsyncIterator<VoteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VoteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVoteSubscription>() => T;
}

export interface VoteEdge {
  node: Vote;
  cursor: String;
}

export interface VoteEdgePromise extends Promise<VoteEdge>, Fragmentable {
  node: <T = VotePromise>() => T;
  cursor: () => Promise<String>;
}

export interface VoteEdgeSubscription
  extends Promise<AsyncIterator<VoteEdge>>,
    Fragmentable {
  node: <T = VoteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateVote {
  count: Int;
}

export interface AggregateVotePromise
  extends Promise<AggregateVote>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVoteSubscription
  extends Promise<AsyncIterator<AggregateVote>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CommentSubscriptionPayload {
  mutation: MutationType;
  node: Comment;
  updatedFields: String[];
  previousValues: CommentPreviousValues;
}

export interface CommentSubscriptionPayloadPromise
  extends Promise<CommentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CommentPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CommentPreviousValuesPromise>() => T;
}

export interface CommentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CommentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CommentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CommentPreviousValuesSubscription>() => T;
}

export interface CommentPreviousValues {
  id: ID_Output;
  content: String;
}

export interface CommentPreviousValuesPromise
  extends Promise<CommentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  content: () => Promise<String>;
}

export interface CommentPreviousValuesSubscription
  extends Promise<AsyncIterator<CommentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface JokeSubscriptionPayload {
  mutation: MutationType;
  node: Joke;
  updatedFields: String[];
  previousValues: JokePreviousValues;
}

export interface JokeSubscriptionPayloadPromise
  extends Promise<JokeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = JokePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = JokePreviousValuesPromise>() => T;
}

export interface JokeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<JokeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = JokeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = JokePreviousValuesSubscription>() => T;
}

export interface JokePreviousValues {
  id: ID_Output;
  content: String;
  published: Boolean;
}

export interface JokePreviousValuesPromise
  extends Promise<JokePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  content: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface JokePreviousValuesSubscription
  extends Promise<AsyncIterator<JokePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  content: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email?: String;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface VoteSubscriptionPayload {
  mutation: MutationType;
  node: Vote;
  updatedFields: String[];
  previousValues: VotePreviousValues;
}

export interface VoteSubscriptionPayloadPromise
  extends Promise<VoteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = VotePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VotePreviousValuesPromise>() => T;
}

export interface VoteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VoteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VoteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VotePreviousValuesSubscription>() => T;
}

export interface VotePreviousValues {
  id: ID_Output;
  value: Int;
}

export interface VotePreviousValuesPromise
  extends Promise<VotePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  value: () => Promise<Int>;
}

export interface VotePreviousValuesSubscription
  extends Promise<AsyncIterator<VotePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  value: () => Promise<AsyncIterator<Int>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Joke",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
