export type Role = "ADMIN" | "USER";

export type UserProfileToken = {
  username: string;
  email: string;
  token: string;
  role: Role;
  name: string;
};

export type UserProfile = {
  username: string;
  email: string;
  role: Role;
  name: string;
};
