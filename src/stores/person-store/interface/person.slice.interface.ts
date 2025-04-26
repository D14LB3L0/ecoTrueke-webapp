import { IPerson } from "@/interfaces/person.interface";

export interface IPersonSlice {
    person: IPerson;
    setPerson: (person: IPerson) => void;
}