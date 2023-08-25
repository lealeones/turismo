/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Alumno = {
  __typename?: 'Alumno';
  /** createdAt */
  createdAt: Scalars['DateTime']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** mobile */
  mobile: Scalars['String']['output'];
  /** phone */
  phone: Scalars['String']['output'];
  /** updatedAt */
  updatedAt: Scalars['DateTime']['output'];
  /** userId */
  userId: Scalars['Int']['output'];
};

export type CreateAlumnoInput = {
  /** mobile */
  mobile: Scalars['String']['input'];
  /** phone */
  phone: Scalars['String']['input'];
  /** userId */
  userId: Scalars['Int']['input'];
};

export type CreateFileInput = {
  dateUpload: Scalars['DateTime']['input'];
  /** fileHash */
  fileHash: Scalars['String']['input'];
  /** fileName */
  fileName: Scalars['String']['input'];
  /** originalName */
  originalName: Scalars['String']['input'];
};

export type CreateLocationInput = {
  /** description */
  description: Scalars['String']['input'];
  /** tipe */
  tipe: Scalars['String']['input'];
  /** title */
  title: Scalars['String']['input'];
};

export type CreatePreProjectInput = {
  /** reviewInstanceId */
  reviewInstanceId: Scalars['Int']['input'];
};

export type CreateProjectFinalInput = {
  /** id */
  id: Scalars['Int']['input'];
  /** keywords */
  keywords: Array<Scalars['String']['input']>;
  /** summary */
  summary: Scalars['String']['input'];
  /** title */
  title: Scalars['String']['input'];
};

export type CreateReviewInput = {
  /** reviewFileId */
  reviewFileId: Scalars['Int']['input'];
  /** reviewInstanceId */
  reviewInstanceId: Scalars['Int']['input'];
  /** reviewerId */
  reviewerId: Scalars['Int']['input'];
};

export type CreateReviewInstanceInput = {
  /** fileId */
  fileId: Scalars['Int']['input'];
  /** preProjectId */
  preProjectId: Scalars['Int']['input'];
  /** projectId */
  projectId: Scalars['Int']['input'];
};

export type CreateRevisorInput = {
  /** cv_path */
  cv_path: Scalars['String']['input'];
  /** titulo */
  titulo: Scalars['String']['input'];
  /** userId */
  userId: Scalars['Int']['input'];
};

export type CreateTripInput = {
  /** dscr */
  dscr: Scalars['String']['input'];
  /** startTime */
  startTime: Scalars['DateTime']['input'];
  /** title */
  title: Scalars['String']['input'];
};

export type CreateUserAlumno = {
  lastname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  /** mobile */
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  /** phone */
  phone: Scalars['String']['input'];
  pwd: Scalars['String']['input'];
  rol: RolUser;
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  lastname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pwd: Scalars['String']['input'];
  rol: RolUser;
  username: Scalars['String']['input'];
};

export type CreateUserRevisorInput = {
  /** cv_path */
  cv_path: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pwd: Scalars['String']['input'];
  rol: RolUser;
  /** titulo */
  titulo: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  dateUpload: Scalars['DateTime']['output'];
  /** fileHash */
  fileHash: Scalars['String']['output'];
  /** fileName */
  fileName: Scalars['String']['output'];
  /** User ID */
  id: Scalars['Int']['output'];
  /** originalName */
  originalName: Scalars['String']['output'];
};

export type Location = {
  __typename?: 'Location';
  /** description */
  description: Scalars['String']['output'];
  /** Location ID */
  id: Scalars['Int']['output'];
  /** tipe */
  tipe: Scalars['String']['output'];
  /** title */
  title: Scalars['String']['output'];
};

export type LoginInput = {
  pwd: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlumno: Alumno;
  createFile: File;
  createLocation: Location;
  createPreProject: PreProject;
  createProjectFinal: ProjectFinal;
  createReview: Review;
  createReviewInstance: ReviewInstance;
  createRevisor: Revisor;
  createTrip: Trip;
  createUser: User;
  createUserAlumno: Alumno;
  createUserRevisor: Revisor;
  removeAlumno: Alumno;
  removeFile: File;
  removeLocation: Location;
  removePreProject: PreProject;
  removeProjectFinal: ProjectFinal;
  removeReview: Review;
  removeReviewInstance: ReviewInstance;
  removeRevisor: Revisor;
  removeTrip: Trip;
  removeUser: User;
  updateAlumno: Alumno;
  updateFile: File;
  updateLocation: Location;
  updatePreProject: PreProject;
  updateProjectFinal: ProjectFinal;
  updateReview: Review;
  updateReviewInstance: ReviewInstance;
  updateRevisor: Revisor;
  updateTrip: Trip;
  updateUser: User;
};


export type MutationCreateAlumnoArgs = {
  createAlumnoInput: CreateAlumnoInput;
};


export type MutationCreateFileArgs = {
  createFileInput: CreateFileInput;
};


export type MutationCreateLocationArgs = {
  createLocationInput: CreateLocationInput;
};


export type MutationCreatePreProjectArgs = {
  createPreProjectInput: CreatePreProjectInput;
};


export type MutationCreateProjectFinalArgs = {
  createProjectFinalInput: CreateProjectFinalInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationCreateReviewInstanceArgs = {
  createReviewInstanceInput: CreateReviewInstanceInput;
};


export type MutationCreateRevisorArgs = {
  createRevisorInput: CreateRevisorInput;
};


export type MutationCreateTripArgs = {
  createTripInput: CreateTripInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUserAlumnoArgs = {
  createUserAlumno: CreateUserAlumno;
};


export type MutationCreateUserRevisorArgs = {
  createUserRevisorInput: CreateUserRevisorInput;
};


export type MutationRemoveAlumnoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveFileArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveLocationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePreProjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProjectFinalArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveReviewInstanceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRevisorArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTripArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAlumnoArgs = {
  updateAlumnoInput: UpdateAlumnoInput;
};


export type MutationUpdateFileArgs = {
  updateFileInput: UpdateFileInput;
};


export type MutationUpdateLocationArgs = {
  updateLocationInput: UpdateLocationInput;
};


export type MutationUpdatePreProjectArgs = {
  updatePreProjectInput: UpdatePreProjectInput;
};


export type MutationUpdateProjectFinalArgs = {
  updateProjectFinalInput: UpdateProjectFinalInput;
};


export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput;
};


export type MutationUpdateReviewInstanceArgs = {
  updateReviewInstanceInput: UpdateReviewInstanceInput;
};


export type MutationUpdateRevisorArgs = {
  updateRevisorInput: UpdateRevisorInput;
};


export type MutationUpdateTripArgs = {
  updateTripInput: UpdateTripInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type PreProject = {
  __typename?: 'PreProject';
  /** endDate */
  endDate: Scalars['DateTime']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** idProjectFina */
  idProjectFinal: Scalars['Int']['output'];
  /** id */
  projectFinalId: Scalars['Int']['output'];
  /** reviewInstanceId */
  reviewInstanceId: Scalars['Int']['output'];
  /** startDate */
  startDate: Scalars['DateTime']['output'];
  /** state */
  state: Scalars['String']['output'];
};

export type ProjectFinal = {
  __typename?: 'ProjectFinal';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  alumno: Alumno;
  file: File;
  files: Array<File>;
  findTrips: Array<Trip>;
  getLocation: Location;
  location: Array<Location>;
  login: User;
  preProject: PreProject;
  projectFinal: ProjectFinal;
  review: Review;
  reviewInstance: ReviewInstance;
  revisor: Revisor;
  trip: Trip;
  user: User;
  users: Array<User>;
};


export type QueryAlumnoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFileArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetLocationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLoginArgs = {
  loginInput: LoginInput;
};


export type QueryPreProjectArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProjectFinalArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewInstanceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRevisorArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTripArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime']['output'];
  /** descriptionInstitution */
  descriptionInstitution: Scalars['String']['output'];
  /** descriptionStudent */
  descriptionStudent: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** reviewFileId */
  reviewFileId: Scalars['Int']['output'];
  /** reviewInstanceId */
  reviewInstanceId: Scalars['Int']['output'];
  /** reviewerId */
  reviewerId: Scalars['Int']['output'];
  /** state */
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewInstance = {
  __typename?: 'ReviewInstance';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  idFile: Scalars['Int']['output'];
  idPreProject: Scalars['Int']['output'];
  idProject: Scalars['Int']['output'];
  idReview: Scalars['Int']['output'];
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Revisor = {
  __typename?: 'Revisor';
  /** createdAt */
  createdAt: Scalars['DateTime']['output'];
  /** cv_path */
  cv_path: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** titulo */
  titulo: Scalars['String']['output'];
  /** updatedAt */
  updatedAt: Scalars['DateTime']['output'];
  /** userId */
  userId: Scalars['Int']['output'];
};

export enum RolUser {
  Administrador = 'ADMINISTRADOR',
  Estudiante = 'ESTUDIANTE',
  Otros = 'OTROS',
  Revisor = 'REVISOR',
  Secretaria = 'SECRETARIA'
}

export type Trip = {
  __typename?: 'Trip';
  /** dscr */
  dscr: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** startTime */
  startTime: Scalars['DateTime']['output'];
  /** title */
  title: Scalars['String']['output'];
};

export type UpdateAlumnoInput = {
  id: Scalars['Int']['input'];
  /** mobile */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** userId */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateFileInput = {
  dateUpload?: InputMaybe<Scalars['DateTime']['input']>;
  /** fileHash */
  fileHash?: InputMaybe<Scalars['String']['input']>;
  /** fileName */
  fileName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** originalName */
  originalName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLocationInput = {
  /** description */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** tipe */
  tipe?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePreProjectInput = {
  id: Scalars['Int']['input'];
  /** reviewInstanceId */
  reviewInstanceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProjectFinalInput = {
  id: Scalars['Int']['input'];
  /** keywords */
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** summary */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReviewInput = {
  id: Scalars['Int']['input'];
  /** reviewFileId */
  reviewFileId?: InputMaybe<Scalars['Int']['input']>;
  /** reviewInstanceId */
  reviewInstanceId?: InputMaybe<Scalars['Int']['input']>;
  /** reviewerId */
  reviewerId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateReviewInstanceInput = {
  /** fileId */
  fileId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  /** preProjectId */
  preProjectId?: InputMaybe<Scalars['Int']['input']>;
  /** projectId */
  projectId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRevisorInput = {
  /** cv_path */
  cv_path?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** titulo */
  titulo?: InputMaybe<Scalars['String']['input']>;
  /** userId */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTripInput = {
  /** dscr */
  dscr?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** startTime */
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  id: Scalars['Int']['input'];
  lastname?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pwd?: InputMaybe<Scalars['String']['input']>;
  rol?: InputMaybe<RolUser>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  /** User ID */
  id: Scalars['Int']['output'];
  lastname: Scalars['String']['output'];
  mail: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pwd: Scalars['String']['output'];
  rol: RolUser;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type CreateLocationMutationVariables = Exact<{
  data: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: { __typename?: 'Location', id: number } };

export type FindTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindTripsQuery = { __typename?: 'Query', findTrips: Array<{ __typename?: 'Trip', id: number, startTime: any, title: string, dscr: string }> };

export type GetLocationQueryVariables = Exact<{
  data: Scalars['Int']['input'];
}>;


export type GetLocationQuery = { __typename?: 'Query', getLocation: { __typename?: 'Location', title: string, description: string, tipe: string } };


export const CreateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createLocationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateLocationMutation, CreateLocationMutationVariables>;
export const FindTripsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findTrips"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findTrips"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dscr"}}]}}]}}]} as unknown as DocumentNode<FindTripsQuery, FindTripsQueryVariables>;
export const GetLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tipe"}}]}}]}}]} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Alumno = {
  __typename?: 'Alumno';
  /** createdAt */
  createdAt: Scalars['DateTime']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** mobile */
  mobile: Scalars['String']['output'];
  /** phone */
  phone: Scalars['String']['output'];
  /** updatedAt */
  updatedAt: Scalars['DateTime']['output'];
  /** userId */
  userId: Scalars['Int']['output'];
};

export type CreateAlumnoInput = {
  /** mobile */
  mobile: Scalars['String']['input'];
  /** phone */
  phone: Scalars['String']['input'];
  /** userId */
  userId: Scalars['Int']['input'];
};

export type CreateFileInput = {
  dateUpload: Scalars['DateTime']['input'];
  /** fileHash */
  fileHash: Scalars['String']['input'];
  /** fileName */
  fileName: Scalars['String']['input'];
  /** originalName */
  originalName: Scalars['String']['input'];
};

export type CreateLocationInput = {
  /** description */
  description: Scalars['String']['input'];
  /** tipe */
  tipe: Scalars['String']['input'];
  /** title */
  title: Scalars['String']['input'];
};

export type CreatePreProjectInput = {
  /** reviewInstanceId */
  reviewInstanceId: Scalars['Int']['input'];
};

export type CreateProjectFinalInput = {
  /** id */
  id: Scalars['Int']['input'];
  /** keywords */
  keywords: Array<Scalars['String']['input']>;
  /** summary */
  summary: Scalars['String']['input'];
  /** title */
  title: Scalars['String']['input'];
};

export type CreateReviewInput = {
  /** reviewFileId */
  reviewFileId: Scalars['Int']['input'];
  /** reviewInstanceId */
  reviewInstanceId: Scalars['Int']['input'];
  /** reviewerId */
  reviewerId: Scalars['Int']['input'];
};

export type CreateReviewInstanceInput = {
  /** fileId */
  fileId: Scalars['Int']['input'];
  /** preProjectId */
  preProjectId: Scalars['Int']['input'];
  /** projectId */
  projectId: Scalars['Int']['input'];
};

export type CreateRevisorInput = {
  /** cv_path */
  cv_path: Scalars['String']['input'];
  /** titulo */
  titulo: Scalars['String']['input'];
  /** userId */
  userId: Scalars['Int']['input'];
};

export type CreateTripInput = {
  /** dscr */
  dscr: Scalars['String']['input'];
  /** startTime */
  startTime: Scalars['DateTime']['input'];
  /** title */
  title: Scalars['String']['input'];
};

export type CreateUserAlumno = {
  lastname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  /** mobile */
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  /** phone */
  phone: Scalars['String']['input'];
  pwd: Scalars['String']['input'];
  rol: RolUser;
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  lastname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pwd: Scalars['String']['input'];
  rol: RolUser;
  username: Scalars['String']['input'];
};

export type CreateUserRevisorInput = {
  /** cv_path */
  cv_path: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pwd: Scalars['String']['input'];
  rol: RolUser;
  /** titulo */
  titulo: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  dateUpload: Scalars['DateTime']['output'];
  /** fileHash */
  fileHash: Scalars['String']['output'];
  /** fileName */
  fileName: Scalars['String']['output'];
  /** User ID */
  id: Scalars['Int']['output'];
  /** originalName */
  originalName: Scalars['String']['output'];
};

export type Location = {
  __typename?: 'Location';
  /** description */
  description: Scalars['String']['output'];
  /** Location ID */
  id: Scalars['Int']['output'];
  /** tipe */
  tipe: Scalars['String']['output'];
  /** title */
  title: Scalars['String']['output'];
};

export type LoginInput = {
  pwd: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlumno: Alumno;
  createFile: File;
  createLocation: Location;
  createPreProject: PreProject;
  createProjectFinal: ProjectFinal;
  createReview: Review;
  createReviewInstance: ReviewInstance;
  createRevisor: Revisor;
  createTrip: Trip;
  createUser: User;
  createUserAlumno: Alumno;
  createUserRevisor: Revisor;
  removeAlumno: Alumno;
  removeFile: File;
  removeLocation: Location;
  removePreProject: PreProject;
  removeProjectFinal: ProjectFinal;
  removeReview: Review;
  removeReviewInstance: ReviewInstance;
  removeRevisor: Revisor;
  removeTrip: Trip;
  removeUser: User;
  updateAlumno: Alumno;
  updateFile: File;
  updateLocation: Location;
  updatePreProject: PreProject;
  updateProjectFinal: ProjectFinal;
  updateReview: Review;
  updateReviewInstance: ReviewInstance;
  updateRevisor: Revisor;
  updateTrip: Trip;
  updateUser: User;
};


export type MutationCreateAlumnoArgs = {
  createAlumnoInput: CreateAlumnoInput;
};


export type MutationCreateFileArgs = {
  createFileInput: CreateFileInput;
};


export type MutationCreateLocationArgs = {
  createLocationInput: CreateLocationInput;
};


export type MutationCreatePreProjectArgs = {
  createPreProjectInput: CreatePreProjectInput;
};


export type MutationCreateProjectFinalArgs = {
  createProjectFinalInput: CreateProjectFinalInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationCreateReviewInstanceArgs = {
  createReviewInstanceInput: CreateReviewInstanceInput;
};


export type MutationCreateRevisorArgs = {
  createRevisorInput: CreateRevisorInput;
};


export type MutationCreateTripArgs = {
  createTripInput: CreateTripInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUserAlumnoArgs = {
  createUserAlumno: CreateUserAlumno;
};


export type MutationCreateUserRevisorArgs = {
  createUserRevisorInput: CreateUserRevisorInput;
};


export type MutationRemoveAlumnoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveFileArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveLocationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePreProjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProjectFinalArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveReviewInstanceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRevisorArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTripArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAlumnoArgs = {
  updateAlumnoInput: UpdateAlumnoInput;
};


export type MutationUpdateFileArgs = {
  updateFileInput: UpdateFileInput;
};


export type MutationUpdateLocationArgs = {
  updateLocationInput: UpdateLocationInput;
};


export type MutationUpdatePreProjectArgs = {
  updatePreProjectInput: UpdatePreProjectInput;
};


export type MutationUpdateProjectFinalArgs = {
  updateProjectFinalInput: UpdateProjectFinalInput;
};


export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput;
};


export type MutationUpdateReviewInstanceArgs = {
  updateReviewInstanceInput: UpdateReviewInstanceInput;
};


export type MutationUpdateRevisorArgs = {
  updateRevisorInput: UpdateRevisorInput;
};


export type MutationUpdateTripArgs = {
  updateTripInput: UpdateTripInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type PreProject = {
  __typename?: 'PreProject';
  /** endDate */
  endDate: Scalars['DateTime']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** idProjectFina */
  idProjectFinal: Scalars['Int']['output'];
  /** id */
  projectFinalId: Scalars['Int']['output'];
  /** reviewInstanceId */
  reviewInstanceId: Scalars['Int']['output'];
  /** startDate */
  startDate: Scalars['DateTime']['output'];
  /** state */
  state: Scalars['String']['output'];
};

export type ProjectFinal = {
  __typename?: 'ProjectFinal';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  alumno: Alumno;
  file: File;
  files: Array<File>;
  findTrips: Array<Trip>;
  getLocation: Location;
  location: Array<Location>;
  login: User;
  preProject: PreProject;
  projectFinal: ProjectFinal;
  review: Review;
  reviewInstance: ReviewInstance;
  revisor: Revisor;
  trip: Trip;
  user: User;
  users: Array<User>;
};


export type QueryAlumnoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFileArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetLocationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLoginArgs = {
  loginInput: LoginInput;
};


export type QueryPreProjectArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProjectFinalArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewInstanceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRevisorArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTripArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime']['output'];
  /** descriptionInstitution */
  descriptionInstitution: Scalars['String']['output'];
  /** descriptionStudent */
  descriptionStudent: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** reviewFileId */
  reviewFileId: Scalars['Int']['output'];
  /** reviewInstanceId */
  reviewInstanceId: Scalars['Int']['output'];
  /** reviewerId */
  reviewerId: Scalars['Int']['output'];
  /** state */
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewInstance = {
  __typename?: 'ReviewInstance';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  idFile: Scalars['Int']['output'];
  idPreProject: Scalars['Int']['output'];
  idProject: Scalars['Int']['output'];
  idReview: Scalars['Int']['output'];
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Revisor = {
  __typename?: 'Revisor';
  /** createdAt */
  createdAt: Scalars['DateTime']['output'];
  /** cv_path */
  cv_path: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** titulo */
  titulo: Scalars['String']['output'];
  /** updatedAt */
  updatedAt: Scalars['DateTime']['output'];
  /** userId */
  userId: Scalars['Int']['output'];
};

export enum RolUser {
  Administrador = 'ADMINISTRADOR',
  Estudiante = 'ESTUDIANTE',
  Otros = 'OTROS',
  Revisor = 'REVISOR',
  Secretaria = 'SECRETARIA'
}

export type Trip = {
  __typename?: 'Trip';
  /** dscr */
  dscr: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** startTime */
  startTime: Scalars['DateTime']['output'];
  /** title */
  title: Scalars['String']['output'];
};

export type UpdateAlumnoInput = {
  id: Scalars['Int']['input'];
  /** mobile */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** userId */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateFileInput = {
  dateUpload?: InputMaybe<Scalars['DateTime']['input']>;
  /** fileHash */
  fileHash?: InputMaybe<Scalars['String']['input']>;
  /** fileName */
  fileName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** originalName */
  originalName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLocationInput = {
  /** description */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** tipe */
  tipe?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePreProjectInput = {
  id: Scalars['Int']['input'];
  /** reviewInstanceId */
  reviewInstanceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProjectFinalInput = {
  id: Scalars['Int']['input'];
  /** keywords */
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** summary */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReviewInput = {
  id: Scalars['Int']['input'];
  /** reviewFileId */
  reviewFileId?: InputMaybe<Scalars['Int']['input']>;
  /** reviewInstanceId */
  reviewInstanceId?: InputMaybe<Scalars['Int']['input']>;
  /** reviewerId */
  reviewerId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateReviewInstanceInput = {
  /** fileId */
  fileId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  /** preProjectId */
  preProjectId?: InputMaybe<Scalars['Int']['input']>;
  /** projectId */
  projectId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRevisorInput = {
  /** cv_path */
  cv_path?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** titulo */
  titulo?: InputMaybe<Scalars['String']['input']>;
  /** userId */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTripInput = {
  /** dscr */
  dscr?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** startTime */
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  id: Scalars['Int']['input'];
  lastname?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pwd?: InputMaybe<Scalars['String']['input']>;
  rol?: InputMaybe<RolUser>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  /** User ID */
  id: Scalars['Int']['output'];
  lastname: Scalars['String']['output'];
  mail: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pwd: Scalars['String']['output'];
  rol: RolUser;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type CreateLocationMutationVariables = Exact<{
  data: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: { __typename?: 'Location', id: number } };

export type FindTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindTripsQuery = { __typename?: 'Query', findTrips: Array<{ __typename?: 'Trip', id: number, startTime: any, title: string, dscr: string }> };

export type GetLocationQueryVariables = Exact<{
  data: Scalars['Int']['input'];
}>;


export type GetLocationQuery = { __typename?: 'Query', getLocation: { __typename?: 'Location', title: string, description: string, tipe: string } };
