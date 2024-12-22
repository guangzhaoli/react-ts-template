export interface User {
    "name": string
}

export type Name = string;

// define get user list API params
export interface GetUsersRequestParams {
    page?: number;
    pageSize?: number;
    searchQuery?: string;
  }
  
  // define get user list API response
  export interface GetUsersResponse {
    data: User[];
    total: number;
  }

  // userStore.ts store type
  export interface UserState {
    userId: string | null;
    userName: string | null;
    login: (id: string, name: string) => void;
    logout: () => void;
  }