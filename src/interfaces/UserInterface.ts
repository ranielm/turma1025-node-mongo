export interface IUserFilter {
  id: string;
}

export interface IUser extends IUserFilter {
  name: string;
  surname: string;
  email: string;
}
