import { IUserRating } from "@/interfaces/userRating.interface";

export interface IUserRatingSlice {
  userStars: IUserRating;
  setUserStars: (userStars: IUserRating) => void;
}
