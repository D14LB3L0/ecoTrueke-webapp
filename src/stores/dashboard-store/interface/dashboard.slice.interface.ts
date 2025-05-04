export interface IDashboardSlice {
  editProfile: "person" | "user";
  setEditProfile: (editProfile: "person" | "user") => void;
  collapsedSideBar: boolean;
  setCollapsedSideBar: (collapsedSideBar: boolean) => void;
}
