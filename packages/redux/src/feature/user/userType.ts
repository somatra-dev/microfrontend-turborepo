export type MeUser = {
  sub?: string;
  email?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  profileImage?: string;
  uuid?: string;
};

export type MeResponse = {
  authenticated: boolean;
  user: MeUser | null;
};

export type NavUser = {
  name: string;
  email: string;
  avatar: string;
};

export const DEFAULT_NAV_USER: NavUser = {
  name: 'Guest User',
  email: 'guest@apple.com',
  avatar: ''
};
