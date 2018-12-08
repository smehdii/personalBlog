// ====================================================
// Documents
// ====================================================

export namespace Me {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    me: Me | null;
  };

  export type Me = {
    __typename?: "User";

    id: string;

    username: string;

    pictureUrl: string;

    bio: string;

    accessToken: string;
  };
}
