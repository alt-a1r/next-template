export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface IUserData extends IUser {
  full_name: string;
}

export class UserData implements IUserData {
  id;
  first_name;
  last_name;
  email;

  constructor(userData: IUser) {
    this.id = userData.id;
    this.first_name = userData.first_name;
    this.last_name = userData.last_name;
    this.email = userData.email;
  }

  get full_name() {
    return `${this.first_name || ''} ${this.last_name || ''}`;
  }
}
