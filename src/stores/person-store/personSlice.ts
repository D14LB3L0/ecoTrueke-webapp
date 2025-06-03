import { StateCreator } from "zustand";
import { IPersonSlice } from "./interface/person.slice.interface";
import { IPerson, IproductPerson } from "@/interfaces/person.interface";

export const createPersonSlice: StateCreator<
  IPersonSlice,
  [],
  [],
  IPersonSlice
> = (set) => ({
  person: {
    name: "",
    paternalSurname: "",
    maternalSurname: "",
    phone: "",
    address: "",
    documentNumber: "",
    documentType: undefined,
    gender: undefined,
    profilePicture: null,
  },
  setPerson: (person: IPerson) => set({ person }),
  productPersonId: "",
  setProductPersonId: (productPersonId: string) => set({ productPersonId }),
  productPerson: {
    name: "",
    paternalSurname: "",
    maternalSurname: "",
    address: null,
    gender: null,
    profilePicture: null,
    createdAt: "",
  },
  setProductPerson: (productPerson: IproductPerson) => set({ productPerson }),
});
