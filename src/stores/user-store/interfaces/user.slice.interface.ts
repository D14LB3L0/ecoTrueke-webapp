import { IUser } from "@/interfaces/user.interface";

export interface IUserSlice {
    user: IUser;
    setUser: (user: IUser) => void;
}