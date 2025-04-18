export interface IUser {
  token: string
  id: string;
  personId: string;
  email: string;
  accountStatus: '' | 'active' | 'suspended';
  updatedAt: string;
  createdAt: string;
  isDeleted: boolean;
}
