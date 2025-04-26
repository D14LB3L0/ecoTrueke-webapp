import { StateCreator } from "zustand";
import { IPersonSlice } from "./interface/person.slice.interface";
import { IPerson } from "@/interfaces/person.interface";

export const createPersonSlice: StateCreator<IPersonSlice, [], [], IPersonSlice> = (set) => ({
    person: { firstName: '', lastName: '', phone: '', address: '', documentNumber: '', documentType: undefined, gender: undefined, profilePicture: '' },
    setPerson: (person: IPerson) => set({ person })
});