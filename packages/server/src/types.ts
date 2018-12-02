export interface CreateBlogInput {
  title: string;

  content: string;

  pictureUrl: string;

  techTags: string[];
}

export interface CreateCodeReviewRequestInput {
  numDays?: number | null;

  codeUrl: string;

  techTags: string[];

  notes: string;
}

export interface LoginInput {
  usernameOrEmail: string;

  password: string;
}

export interface RegisterInput {
  username: string;

  email: string;

  password: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  listCodeReviewRequests: CodeReviewRequest[];

  me?: User | null;

  dummy?: string | null;
}

export interface CodeReviewRequest {
  id: string;

  numDays?: number | null;

  codeUrl: string;

  techTags: string[];

  notes: string;
}

export interface User {
  id: string;

  username: string;

  email: string;
}

export interface Mutation {
  createBlog: CreateBlogReponse;

  createCodeReviewRequest: CodeReviewRequestResponse;

  login: LoginResponse;

  register: RegisterResponse;
}

export interface CreateBlogReponse {
  errors?: Error[] | null;

  blog?: Blog | null;
}

export interface Error {
  path: string;

  message: string;
}

export interface Blog {
  id: string;

  title: string;

  content: string;

  pictureUrl: string;

  techTags: string[];

  author: string;
}

export interface CodeReviewRequestResponse {
  errors?: Error[] | null;

  CodeReviewRequest?: CodeReviewRequest | null;
}

export interface LoginResponse {
  errors?: Error[] | null;

  user?: User | null;
}

export interface RegisterResponse {
  errors?: Error[] | null;
}

// ====================================================
// Arguments
// ====================================================

export interface CreateBlogMutationArgs {
  input: CreateBlogInput;
}
export interface CreateCodeReviewRequestMutationArgs {
  input: CreateCodeReviewRequestInput;
}
export interface LoginMutationArgs {
  input: LoginInput;
}
export interface RegisterMutationArgs {
  input: RegisterInput;
}

import { GraphQLResolveInfo } from "graphql";

import { MyContext } from "./context";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export namespace QueryResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    listCodeReviewRequests?: ListCodeReviewRequestsResolver<
      CodeReviewRequest[],
      TypeParent,
      Context
    >;

    me?: MeResolver<User | null, TypeParent, Context>;

    dummy?: DummyResolver<string | null, TypeParent, Context>;
  }

  export type ListCodeReviewRequestsResolver<
    R = CodeReviewRequest[],
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MeResolver<
    R = User | null,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DummyResolver<
    R = string | null,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CodeReviewRequestResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = CodeReviewRequest
  > {
    id?: IdResolver<string, TypeParent, Context>;

    numDays?: NumDaysResolver<number | null, TypeParent, Context>;

    codeUrl?: CodeUrlResolver<string, TypeParent, Context>;

    techTags?: TechTagsResolver<string[], TypeParent, Context>;

    notes?: NotesResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = CodeReviewRequest,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NumDaysResolver<
    R = number | null,
    Parent = CodeReviewRequest,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CodeUrlResolver<
    R = string,
    Parent = CodeReviewRequest,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TechTagsResolver<
    R = string[],
    Parent = CodeReviewRequest,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NotesResolver<
    R = string,
    Parent = CodeReviewRequest,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    username?: UsernameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = User,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UsernameResolver<
    R = string,
    Parent = User,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string,
    Parent = User,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    createBlog?: CreateBlogResolver<CreateBlogReponse, TypeParent, Context>;

    createCodeReviewRequest?: CreateCodeReviewRequestResolver<
      CodeReviewRequestResponse,
      TypeParent,
      Context
    >;

    login?: LoginResolver<LoginResponse, TypeParent, Context>;

    register?: RegisterResolver<RegisterResponse, TypeParent, Context>;
  }

  export type CreateBlogResolver<
    R = CreateBlogReponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CreateBlogArgs>;
  export interface CreateBlogArgs {
    input: CreateBlogInput;
  }

  export type CreateCodeReviewRequestResolver<
    R = CodeReviewRequestResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CreateCodeReviewRequestArgs>;
  export interface CreateCodeReviewRequestArgs {
    input: CreateCodeReviewRequestInput;
  }

  export type LoginResolver<
    R = LoginResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    input: LoginInput;
  }

  export type RegisterResolver<
    R = RegisterResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, RegisterArgs>;
  export interface RegisterArgs {
    input: RegisterInput;
  }
}

export namespace CreateBlogReponseResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = CreateBlogReponse
  > {
    errors?: ErrorsResolver<Error[] | null, TypeParent, Context>;

    blog?: BlogResolver<Blog | null, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Error[] | null,
    Parent = CreateBlogReponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type BlogResolver<
    R = Blog | null,
    Parent = CreateBlogReponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ErrorResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Error> {
    path?: PathResolver<string, TypeParent, Context>;

    message?: MessageResolver<string, TypeParent, Context>;
  }

  export type PathResolver<
    R = string,
    Parent = Error,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MessageResolver<
    R = string,
    Parent = Error,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace BlogResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Blog> {
    id?: IdResolver<string, TypeParent, Context>;

    title?: TitleResolver<string, TypeParent, Context>;

    content?: ContentResolver<string, TypeParent, Context>;

    pictureUrl?: PictureUrlResolver<string, TypeParent, Context>;

    techTags?: TechTagsResolver<string[], TypeParent, Context>;

    author?: AuthorResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = Blog,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string,
    Parent = Blog,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string,
    Parent = Blog,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PictureUrlResolver<
    R = string,
    Parent = Blog,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TechTagsResolver<
    R = string[],
    Parent = Blog,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AuthorResolver<
    R = string,
    Parent = Blog,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CodeReviewRequestResponseResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = CodeReviewRequestResponse
  > {
    errors?: ErrorsResolver<Error[] | null, TypeParent, Context>;

    CodeReviewRequest?: CodeReviewRequestResolver<
      CodeReviewRequest | null,
      TypeParent,
      Context
    >;
  }

  export type ErrorsResolver<
    R = Error[] | null,
    Parent = CodeReviewRequestResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CodeReviewRequestResolver<
    R = CodeReviewRequest | null,
    Parent = CodeReviewRequestResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LoginResponseResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = LoginResponse> {
    errors?: ErrorsResolver<Error[] | null, TypeParent, Context>;

    user?: UserResolver<User | null, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Error[] | null,
    Parent = LoginResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = User | null,
    Parent = LoginResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RegisterResponseResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RegisterResponse
  > {
    errors?: ErrorsResolver<Error[] | null, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Error[] | null,
    Parent = RegisterResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}
