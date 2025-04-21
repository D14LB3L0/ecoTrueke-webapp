import { IUser } from "@/interfaces/user.interface";

export interface IUserSlice {
    user: IUser;
    setUser: (user: IUser) => void;
    editProfile: 'person' | 'user';
    setEditProfile: (editProfile: 'person' | 'user') => void;
}